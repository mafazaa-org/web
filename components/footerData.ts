import facebookIcon from "@/assets/facebook.svg";
import whatsappIcon from "@/assets/whatsapp.svg";
import youtubeIcon from "@/assets/youtube.svg";
import mailIcon from "@/assets/mail.svg";
import logo from "@/public/logo/svg/logo_dark.svg";

const footerData = {
  logoSrc: logo,
  contactEmail: "info@example.com",
  backgroundColor: "bg-gradient-to-r from-dark-one to-dark-two",
  textColor: "text-bright-one",
  borderColor: "border-accent-color",
  socialLinks: [
    { href: "/", src: whatsappIcon, alt: "whatsapp" },
    { href: "/", src: facebookIcon, alt: "facebook" },
    { href: "/", src: youtubeIcon, alt: "youtube" },
    { href: "/", src: mailIcon, alt: "mail" },
  ],
  columns: [
    {
      title: "روابط مهمة",
      links: [
        { href: "/", label: "الرئيسية" },
        { href: "/", label: "مشاريعنا" },
        { href: "/", label: "تواصل معنا" },
        { href: "/", label: "ساهم معنا" },
      ],
    },
    {
      title: "مشاريعنا",
      links: [
        { href: "/", label: "عينا سلسبيلا" },
        { href: "/", label: "نباتا حسنا" },
        { href: "/", label: "زدني علما" },
      ],
    },
  ],
};
export { footerData };
