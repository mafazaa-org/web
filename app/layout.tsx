import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
	subsets: ["arabic", "latin"],
	weight: ["200", "300", "400", "500", "700", "800", "900"],
	variable: "--font-tajawal",
});

export const metadata: Metadata = {
	title: {
		default: "مفازا - مشروع دعوي إسلامي | رؤية ورسالة إسلامية",
		template: "%s | مفازا",
	},
	description:
		"مفازا مشروع دعوي إسلامي يهدف إلى خدمة الإسلام والمسلمين. إن الله ابتعثنا لنخرج العباد من عبادة العباد إلى عبادة رب العباد، ومن ضيق الدنيا إلى سعة الدنيا والآخرة، ومن جور الأديان إلى عدل الإسلام",
	keywords: [
		"مفازا",
		"مشروع دعوي إسلامي",
		"رؤية إسلامية",
		"رسالة إسلامية",
		"خدمة الإسلام",
		"خدمة المسلمين",
		"محتوى إسلامي",
		"محتوى هادف",
		"مواد إسلامية",
		"مشاريع دعوية",
		"خدمة المجتمع الإسلامي",
		"دعوة إسلامية",
	],
	authors: [{ name: "فريق مفازا", url: "https://mafazaa.com" }],
	creator: "مفازا",
	publisher: "مفازا",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://mafazaa.com"),
	alternates: {
		canonical: "https://mafazaa.com",
	},
	openGraph: {
		type: "website",
		locale: "ar_SA",
		url: "https://mafazaa.com",
		siteName: "مفازا",
		title: "مفازا - مشروع دعوي إسلامي | رؤية ورسالة إسلامية",
		description:
			"مشروع دعوي إسلامي يهدف إلى خدمة الإسلام والمسلمين. إن الله ابتعثنا لنخرج العباد من عبادة العباد إلى عبادة رب العباد، ومن ضيق الدنيا إلى سعة الدنيا والآخرة، ومن جور الأديان إلى عدل الإسلام.",
		images: [
			{
				url: "https://mafazaa.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "شعار مفازا - مشروع دعوي إسلامي",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "مفازا - مشروع دعوي إسلامي | رؤية ورسالة إسلامية",
		description:
			"مشروع دعوي إسلامي يهدف إلى خدمة الإسلام والمسلمين. نوفر محتوى إسلامي هادف، مواد علمية، وفرص عمل للشباب.",
		images: ["https://mafazaa.com/twitter-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		// Add Google Search Console verification when available
		// google: "your-google-verification-code",
	},
	category: "دعوة إسلامية",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ar" dir="rtl" className={tajawal.variable}>
			<head>
				{/* Accessibility: Preload critical resources */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body className={`antialiased ${tajawal.className}`}>
				{children}
			</body>
		</html>
	);
}
