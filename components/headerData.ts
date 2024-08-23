import facebookIcon from "@/assets/facebook.svg";
import whatsappIcon from "@/assets/whatsapp.svg";
import youtubeIcon from "@/assets/youtube.svg";
import mailIcon from "@/assets/mail.svg";
import Logo from "@/public/logo/svg/logo_dark.svg";

const headerData = {
  logoSrc: Logo,
  navLinks: [
    { href: "/", label: "مشاريعنا" },
    { href: "/", label: "ساهم معنا" },
    { href: "/", label: "تواصل معنا" },
  ],
  socialLinks: [
    { href: "/", src: whatsappIcon, alt: "whatsapp" },
    { href: "/", src: facebookIcon, alt: "facebook" },
    { href: "/", src: youtubeIcon, alt: "youtube" },
    { href: "/", src: mailIcon, alt: "mail" },
  ],
};

export { headerData };
