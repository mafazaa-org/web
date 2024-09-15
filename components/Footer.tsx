"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import globalData from "@/app/globalData";
import logo from "@/public/logo/svg/logo_dark.svg";
import projectsData from "@/app/projectsData";
import { usePathname } from "next/navigation";

type FooterColumn = {
  title: string;
  links: { href: string; label: string }[];
};

export type FooterProps = { columns: FooterColumn[] };

const textColor = "text-bright-one";
const afterborder =
  "relative after:bg-accent-color after:h-[1px] after:w-2/3 after:absolute after:bottom-0 after:right-0";

function _Footer({ columns }: FooterProps) {
  const pathname = usePathname();

  const [isSpecialRoute, setIsSpecialRoute] = useState(false);

  useEffect(() => {
    setIsSpecialRoute(pathname === "/contact");
  }, [pathname]);
  return (
    <footer
      className={`w-full ${
        isSpecialRoute
          ? "bg-[#030B27]"
          : "bg-gradient-to-r from-dark-one to-dark-two"
      }  ${textColor} text-right `}
    >
      <div
        className={`flex flex-col-reverse lg:grid grid-cols-12 gap-6 md:gap-12 lg:gap-24 px-6 md:px-10 lg:px-20 py-12 lg:py-28 ${textColor} `}
      >
        {/* Contact Section */}
        <div className="flex flex-col lg:w-fit max-lg:w-full gap-4 lg:gap-6 col-span-3 max-lg:items-end lg:justify-center ">
          <h3
            className={`text-2xl lg:text-3xl font-bold ${afterborder} pb-2 lg:pb-4`}
          >
            تواصل معنا
          </h3>
          <a
            target="_blank"
            className="text-lg lg:text-xl font-bold border-b border-bright-one pb-2 lg:pb-4"
            href={`mailto:${globalData.support}`}
          >
            {globalData.support}
          </a>
          <ul className="flex items-center justify-center lg:justify-between gap-4 lg:gap-6">
            {globalData.socialLinks.map((social, index) => (
              <li key={index}>
                <Link href={social.href} target="_blank">
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={27}
                    height={27}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Columns */}
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 col-span-6 items-end lg:items-center lg:justify-evenly">
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col gap-4 lg:gap-6">
              <h3
                className={`text-2xl lg:text-3xl font-bold ${afterborder} pb-2 lg:pb-4`}
              >
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2 lg:gap-4 text-base font-bold">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} target="_blank">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Logo Section */}
        <div className="flex items-center justify-center lg:justify-center  col-span-3">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              width={143}
              height={67}
              className=" object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Footer Bottom Section
      <div className="flex justify-center items-center py-4 lg:py-5 border-t border-bright-one">
        <p className={`text-sm lg:text-xl ${textColor}`}>
          Mafazza - &copy; 2024
        </p>
      </div> */}
    </footer>
  );
}

const footerData: FooterProps = {
  columns: [
    {
      title: "روابط مهمة",
      links: globalData.navLinks,
    },
    {
      title: "مشاريعنا",
      links: projectsData.map((project) => ({
        href: `https://${project.en}.mafazaa.com`,
        label: project.title,
      })),
    },
  ],
};

const Footer = () => _Footer(footerData);

export default Footer;
