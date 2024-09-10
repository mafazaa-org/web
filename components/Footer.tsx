import React from "react";
import Image from "next/image";
import Link from "next/link";
import globalData from "@/app/globalData";
import logo from "@/public/logo/svg/logo_dark.svg";
import projectsData from "@/app/projectsData";

type FooterColumn = {
  title: string;
  links: { href: string; label: string }[];
};

export type FooterProps = { columns: FooterColumn[] };

const textColor = "text-bright-one";
const borderColor = "border-accent-color";

function _Footer({ columns }: FooterProps) {
  return (
    <footer
      className={`w-full bg-gradient-to-r from-dark-one to-dark-two ${textColor} ${borderColor} text-right`}
    >
      <div
        className={`flex flex-col lg:flex-row-reverse justify-between gap-12 p-8 lg:p-24 mx-auto max-w-7xl ${textColor}`}
      >
        {/* Logo Section */}
        <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              width={244}
              height={244}
              className="w-32 h-32 lg:w-full lg:h-full object-contain"
            />
          </Link>
        </div>

        {/* Dynamic Columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col gap-4 lg:gap-6">
              <h3
                className={`text-2xl lg:text-3xl font-bold border-b ${borderColor} pb-2 lg:pb-4`}
              >
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2 lg:gap-4 text-lg lg:text-xl">
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

        {/* Contact Section */}
        <div className="flex flex-col gap-4 lg:gap-6">
          <h3
            className={`text-2xl lg:text-3xl font-bold border-b ${borderColor} pb-2 lg:pb-4`}
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
          <ul className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6">
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
      </div>

      {/* Footer Bottom Section */}
      <div className="flex justify-center items-center py-4 lg:py-5 border-t border-bright-one">
        <p className={`text-sm lg:text-xl ${textColor}`}>
          Mafazza - &copy; 2024
        </p>
      </div>
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
