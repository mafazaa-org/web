"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { FooterConfig, SocialLink, ImportantLink } from "@/types/index";

const textColor = "text-bright-one";
const afterborder =
	"relative after:bg-accent-color after:h-[1px] after:w-2/3 after:absolute after:bottom-0 after:right-0";

interface CustomFooterProps {
	links: FooterConfig;
	logo?: string | any;
}
function CustomFooter({ links, logo }: CustomFooterProps) {
	return (
		<footer
			dir="ltr"
			className={`w-full bg-gradient-to-r from-dark-one to-dark-two ${textColor} text-right`}
		>
			<div
				className={`flex flex-col-reverse lg:grid grid-cols-12 gap-6 md:gap-10 lg:gap-20 px-6 md:px-12 lg:px-32 pb-8 pt-10 lg:pt-20 lg:pb-16 ${textColor}`}
			>
				{/* Contact Section */}
				<div className="flex flex-col lg:w-fit max-lg:w-full gap-4 lg:gap-6 col-span-3 max-lg:items-end lg:justify-start">
					<h3
						className={`text-2xl lg:text-3xl font-bold ${afterborder} pb-2 lg:pb-4`}
					>
						تواصل معنا
					</h3>
					<a
						target="_blank"
						className="text-lg lg:text-xl font-bold border-b border-bright-one pb-2 lg:pb-4"
						href={`mailto:${links.supportEmail}`}
					>
						{links.supportEmail}
					</a>
					<ul className="flex items-center justify-center lg:justify-between gap-4 lg:gap-6">
						{links.socialLinks.map(
							(social: SocialLink, index: number) => (
								<li key={index}>
									<Link
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											src={social.src}
											alt={social.alt || social.text}
											width={27}
											height={27}
										/>
									</Link>
								</li>
							)
						)}
					</ul>
				</div>

				{/* Important Links Section */}
				<div className="flex flex-col-reverse lg:flex-row-reverse gap-10 col-span-6 items-start lg:items-start lg:justify-evenly">
					<div className="flex flex-col gap-4 lg:gap-6 min-h-full">
						<h3
							className={`text-2xl lg:text-3xl font-bold ${afterborder} pb-2 lg:pb-4`}
						>
							روابط مهمة
						</h3>
						<ul className="flex flex-col-reverse justify-end gap-2 lg:gap-4 text-base font-bold">
							{links.importantLinks.map(
								(link: ImportantLink, linkIndex: number) => (
									<li
										key={linkIndex}
										className="hover:underline hover:text-accent-color"
									>
										<Link href={link.href}>
											{link.text}
										</Link>
									</li>
								)
							)}
						</ul>
					</div>
				</div>

				{/* Logo Section */}
				<div className="flex items-center justify-center lg:justify-center col-span-3">
					<Link href={"/"}>
						<Image
							src={logo}
							alt="logo"
							width={143}
							height={67}
							className="object-contain"
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default CustomFooter;
