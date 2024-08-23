import React from "react";
import Image from "next/image";
import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

type SocialLink = {
  href: string;
  src: string;
  alt: string;
};

type HeaderProps = {
  logoSrc: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
};

function Header({ logoSrc, navLinks, socialLinks }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-48 -mt-8">
      <ul className="flex items-center gap-6 text-white">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Image
        src={logoSrc}
        alt="logo"
        width={200}
        height={200}
        className="object-contain"
      />
      <ul className="flex items-center gap-6">
        {socialLinks.map((social, index) => (
          <li key={index}>
            <Link href={social.href}>
              <Image src={social.src} alt={social.alt} width={27} height={27} />
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
