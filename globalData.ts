import whatsappIcon from "./assets/whatsapp.svg";
import facebookIcon from "./assets/facebook.svg";
import youtubeIcon from "./assets/youtube.svg";
import mailIcon from "./assets/mail.svg";

const globalData: globalDataType = {
	socialLinks: [
		{
			href: "https://wa.me/201003816322",
			src: whatsappIcon,
			alt: "whatsapp",
		},
		{
			href: "https://facebook.com/mafazaa.org",
			src: facebookIcon,
			alt: "facebook",
		},
		{
			href: "https://youtube.com/@mafazaa_official",
			src: youtubeIcon,
			alt: "youtube",
		},
		{ href: "mailto:support@mafazaa.com", src: mailIcon, alt: "mail" },
	],
	navLinks: [
		{ href: "/projects", label: "مشاريعنا" },
		{
			href: "/contact",
			label: "تواصل معنا",
		},
	],
	support: "support@mafazaa.com",
};

export default globalData;

type globalDataType = {
	socialLinks: SocialLink[];
	navLinks: { href: string; label: string }[];
	support: string;
};

type SocialLink = {
	href: string;
	src: string;
	alt: string;
};
