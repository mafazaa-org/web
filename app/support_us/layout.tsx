import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ادعم مفازا",
	description:
		"ادعم مفازا - مشروع دعوي إسلامي يهدف إلى خدمة الناس عامة و المسلمين خاصة",
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
