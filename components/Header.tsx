import React from "react";
import Image from "next/image";
import Logo from "@/public/logo/svg/logo_main.svg";
import facebook from "@/assets/facebook.svg";
import whatsapp from "@/assets/whatsapp.svg";
import youtube from "@/assets/youtube.svg";
import mail from "@/assets/mail.svg";
import Link from "next/link";
function Header() {
  return (
    <header className="flex justify-between items-center px-48 -mt-8">
      <ul className="flex items-center gap-6">
        <li>
          <Link href="/">
            <Image src={mail} alt="mail" width={20} height={20} />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={youtube} alt="youtube" width={20} height={20} />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={facebook} alt="facebook" width={20} height={20} />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={whatsapp} alt="whatsapp" width={20} height={20} />
          </Link>
        </li>
      </ul>
      <Image
        src={Logo}
        alt="logo"
        width={200}
        height={200}
        className="object-contain "
      />
      <ul className="flex items-center gap-6">
        <li>
          <Link href="/">تواصل معنا</Link>
        </li>
        <li>
          <Link href="/">ساهم معنا</Link>
        </li>
        <li>
          <Link href="/">مشاريعنا</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
