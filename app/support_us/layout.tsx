import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ادعمنا",
	description:
		"ادعم مشروع مفازا - مشروع دعوي إسلامي يهدف إلى خدمة الإسلام والمسلمين. تبرعك يساعدنا في تنفيذ مشاريع دعوية تخدم المجتمع الإسلامي وتوفر محتوى إسلامي هادف ومواد علمية وفرص عمل للشباب.",
	openGraph: {
		title: "ادعمنا | مفازا",
		description:
			"ادعم مشروع مفازا - مشروع دعوي إسلامي يهدف إلى خدمة الإسلام والمسلمين",
		url: "https://mafazaa.com/support_us",
	},
	twitter: {
		card: "summary",
		title: "ادعمنا | مفازا",
		description: "ادعم مشروع مفازا - مشروع دعوي إسلامي",
	},
	alternates: {
		canonical: "https://mafazaa.com/support_us",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
