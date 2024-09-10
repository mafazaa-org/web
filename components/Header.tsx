"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo/svg/logo_dark.svg";
import globalData from "@/app/globalData";

type NavLink = {
  href: string;
  label: string;
};

type HeaderProps = {
  logoSrc: string;
  navLinks: NavLink[];
};

const sideLinksWidth = "w-full";
function _Header({ logoSrc, navLinks }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex md:grid grid-cols-3 items-center justify-start md:justify-items-center px-6 py-4 md:px-10 lg:px-20  fixed top-0 w-full z-20 transition-colors duration-300 mt-0 h-20 md:h-36 md:-mt-10 ${
        isScrolled
          ? "bg-gradient-to-r from-dark-one to-dark-two  "
          : "bg-transparent"
      }`}
    >
      <ul
        className={`hidden md:flex justify-start items-center gap-6 ${sideLinksWidth}`}
      >
        {globalData.socialLinks.map((social, index) => (
          <li key={index}>
            <Link target="_blank" {...social}>
              <Image {...social} width={27} height={27} alt={social.alt} />
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="block md:hidden text-bright-one focus:outline-none relative z-20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <Link href="/">
        <Image
          src={logoSrc}
          alt="logo"
          width={143}
          height={67}
          className="object-contain"
        />
      </Link>
      <ul
        className={`hidden md:flex justify-end items-center gap-6 text-bright-one font-bold ${sideLinksWidth}`}
      >
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href} target="_blank">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {isMenuOpen && (
        <ul className="md:hidden bg-gradient-to-r from-dark-one to-dark-two px-6 py-4 z-10 fixed left-0 top-0 w-full h-screen flex flex-col-reverse items-center justify-center">
          {navLinks.map((link, index) => (
            <li key={index} className="py-2">
              <Link
                href={link.href}
                className="text-bright-one font-bold hover:text-gray-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

const headerData = {
  logoSrc: Logo,
  navLinks: globalData.navLinks,
};

const Header = () => _Header(headerData);

export default Header;
