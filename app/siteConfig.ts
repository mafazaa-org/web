import facebookIcon from "@/assets/facebook.svg";
import githubIcon from "@/assets/github.svg";
import instagramIcon from "@/assets/instagram.svg";
import youtubeIcon from "@/assets/youtube.svg";
import whatsappIcon from "@/assets/whatsapp.svg";
import mailIcon from "@/assets/mail.svg";
import type {
	SocialLink,
	ImportantLink,
	HeaderConfig,
	FooterConfig,
} from "@/types/index";
export const headerConfig: HeaderConfig = {
	socialLinks: [

		{
			href: "https://youtube.com/@mafazaa_official",
			src: youtubeIcon,
			text: "YouTube",
		},



		{
			href: "https://github.com/mafazaa-org/",
			src: githubIcon,
			text: "GitHub",
		},
	],
	importantLinks: [
		{
			href: "/contact",
			text: "تواصل معنا",
		},
		{
			href: "/support_us",
			text: "ادعمنا",
		},
	],
};

export const footerConfig: FooterConfig = {
	socialLinks: [
		{
			href: "https://youtube.com/@mafazaa_official",
			src: youtubeIcon,
			text: "YouTube",
		},

		{
			href: "https://github.com/mafazaa-org/",
			src: githubIcon,
			text: "GitHub",
		},
	],
	importantLinks: [
		{
			href: "/contact",
			text: "تواصل معنا",
		},
		{
			href: "/support_us",
			text: "ادعمنا",
		},

	],
	supportEmail: "support@mafazaa.com",
};

export const siteLinks = headerConfig;
