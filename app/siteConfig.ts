import githubIcon from "@/assets/github.svg";
import youtubeIcon from "@/assets/youtube.svg";
import type {
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
			href: "/support_us",
			text: "ادعمنا",
		},
		{
			href: "/manhaj",
			text: "المنهج"
		}
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
			href: "/support_us",
			text: "ادعمنا",
		},
		{
			href: "/manhaj",
			text: "المنهج"
		}

	],
	supportEmail: "support@mafazaa.com",
};

export const siteLinks = headerConfig;
