"use client";

import { Header } from "mafazaa-react-ui";
import CustomFooter from "@/components/CustomFooter";
import headerLogo from "@/assets/الشعار/الشعار/3مفازا.png";
import footerLogo from "@/assets/الشعار/اللوجو/32مفازا.png";
import { headerConfig, footerConfig } from "./siteConfig";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootTemplate({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const excludeHeaderFooter = pathname === "/join";

	return (
		<>
			{!excludeHeaderFooter && (
				<Header links={headerConfig} logo={headerLogo} />
			)}
			{children}
			{!excludeHeaderFooter && (
				<CustomFooter links={footerConfig} logo={footerLogo} />
			)}
		</>
	);
}
