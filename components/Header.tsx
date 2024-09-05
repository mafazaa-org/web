import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo/svg/logo_dark.svg";
import globalData from "@/globalData";

type NavLink = {
	href: string;
	label: string;
};

type HeaderProps = {
	logoSrc: string;
	navLinks: NavLink[];
};

function _Header({ logoSrc, navLinks }: HeaderProps) {
	return (
		<header className="flex justify-between items-center px-48 -mt-8 flex-row-reverse">
			<ul className="flex items-center gap-6 text-white">
				{navLinks.map((link, index) => (
					<li key={index}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
			<Link href={"/"}>
				<Image
					src={logoSrc}
					alt="logo"
					width={200}
					height={200}
					className="object-contain"
				/>
			</Link>
			<ul className="flex items-center gap-6">
				{globalData.socialLinks.map((social, index) => (
					<li key={index}>
						<Link target="_blank" {...social}>
							<Image {...social} width={27} height={27} />
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
}

const headerData = {
	logoSrc: Logo,
	navLinks: globalData.navLinks,
};

const Header = () => _Header(headerData);

export default Header;
