"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo/svg/logo_dark.svg";
import { usePathname } from "next/navigation"; // Next.js 13+ (app directory)

const sideLinksWidth = "w-full";
function Header({ links }: { links: any }) {
	const pathname = usePathname();

	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSpecialRoute, setIsSpecialRoute] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	useEffect(() => {
		setIsSpecialRoute(pathname === "/contact");
	}, [pathname]);

	const fetchedLinks = {
		...links,
		importantLinks: links.importantLinks.filter(
			(v: { href: string; text: string }) =>
				["انضم إلينا", "مشاريعنا", "فكرة المشروع"].includes(v.text)
		),
	};
	return (
		<header
			className={`flex md:grid grid-cols-3 items-center justify-between md:justify-items-center px-6 py-4 md:px-12 lg:px-32 fixed top-0 w-full z-20 transition-colors duration-300 h-16 md:h-20 lg:h-24 ${
				isScrolled || isSpecialRoute
					? "bg-gradient-to-r from-dark-one to-dark-two"
					: "bg-transparent"
			}`}
		>
			<ul
				className={`hidden md:flex justify-start items-center gap-6 ${sideLinksWidth}`}
			>
				{fetchedLinks.socialLinks.map((social: any, index: any) => (
					<li key={index}>
						<Link target="_blank" {...social}>
							<Image
								{...social}
								width={27}
								height={27}
								alt={social.text}
							/>
						</Link>
					</li>
				))}
			</ul>
			<button
				className="block md:hidden text-bright-one focus:outline-none relative z-20"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					{isMenuOpen ? (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					) : (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					)}
				</svg>
			</button>
			<Link href="/">
				<Image
					src={Logo}
					alt="logo"
					width={143}
					height={67}
					className="max-lg:w-[67px] max-lg:h-[32px] object-contain"
				/>
			</Link>
			<ul
				className={`hidden md:flex justify-end items-center gap-6 text-bright-one font-bold ${sideLinksWidth}`}
			>
				{fetchedLinks.importantLinks.map(
					(link: { href: string; text: string }, index: number) => (
						<li key={index}>
							<Link href={link.href}>{link.text}</Link>
						</li>
					)
				)}
			</ul>
			{isMenuOpen && (
				<ul className="md:hidden bg-gradient-to-r from-dark-one to-dark-two px-6 py-4 z-10 fixed left-0 top-0 w-full h-screen flex flex-col-reverse items-center justify-center">
					{fetchedLinks.importantLinks.map(
						(
							link: { href: string; text: string },
							index: number
						) => (
							<li key={index} className="py-2">
								<Link
									href={link.href}
									className="text-bright-one font-bold hover:text-gray-200"
								>
									{link.text}
								</Link>
							</li>
						)
					)}
				</ul>
			)}
		</header>
	);
}
export default Header;
