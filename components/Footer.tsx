import React from "react";
import Image from "next/image";
import Link from "next/link";

type SocialLink = {
  href: string;
  src: string;
  alt: string;
};

type FooterColumn = {
  title: string;
  links: { href: string; label: string }[];
};

type FooterProps = {
  logoSrc: string;
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  contactEmail: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
};

function Footer({
  logoSrc,
  socialLinks,
  columns,
  contactEmail,
  backgroundColor,
  textColor,
  borderColor,
}: FooterProps) {
  return (
    <footer className={`w-full ${backgroundColor} ${textColor} ${borderColor}`}>
      <div
        className={`flex justify-between p-24 mx-auto max-w-7xl ${textColor}`}
      >
        <div>
          <Image
            src={logoSrc}
            alt="logo"
            width={244}
            height={244}
            className="w-full h-full object-contain"
          />
        </div>
        {columns.map((column, index) => (
          <div key={index} className="flex flex-col gap-[30px]">
            <h3
              className={`text-3xl font-bold border-b ${borderColor} pb-[30px]`}
            >
              {column.title}
            </h3>
            <ul className="flex flex-col gap-[30px] text-xl">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-[30px]">
          <h3
            className={`text-3xl font-bold border-b ${borderColor} pb-[30px]`}
          >
            تواصل معنا
          </h3>
          <a
            className="text-xl font-bold border-b border-bright-one pb-[30px]"
            href={`mailto:${contactEmail}`}
          >
            {contactEmail}
          </a>
          <ul className="flex items-center gap-[30px]">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <Link href={social.href}>
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
      <div className="flex justify-center items-center pb-5">
        <p className={`text-xl ${textColor} `}>Mafazza - &copy; 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
