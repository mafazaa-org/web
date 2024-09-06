import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "مفازا - الصفحة الرئيسية",
	description:
		"موقع مفازا - منصة لحجب المواقع الإباحية، توفير محتوى إسلامي للأطفال، توفير فرص عمل و تسهيل العمل للشباب، و توفير مواد علمية بجودة عالية تنافس الغرب",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ar">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
