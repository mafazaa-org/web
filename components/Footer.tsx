import React from "react";
import Image from "next/image";
import Link from "next/link";
import globalData from "@/app/globalData";
import logo from "@/public/logo/svg/logo_dark.svg";
import projectsData from "@/app/projectsData";

type FooterColumn = {
	title: string;
	links: { href: string; label: string }[];
};

export type FooterProps = { columns: FooterColumn[] };

const textColor = "text-bright-one";
const borderColor = "border-accent-color";

function _Footer({ columns }: FooterProps) {
	return (
		<footer
			className={`w-full bg-gradient-to-r from-dark-one to-dark-two ${textColor} ${borderColor}`}
		>
			<div
				className={`flex flex-row-reverse justify-between p-24 mx-auto max-w-7xl ${textColor}`}
			>
				<div>
					<Link href={"/"}>
						<Image
							src={logo}
							alt="logo"
							width={244}
							height={244}
							className="w-full h-full object-contain"
						/>
					</Link>
				</div>
				{columns.map((column, index) => (
					<div key={index} className="flex flex-col gap-[30px]">
						<h3
							className={`text-3xl font-bold border-b ${borderColor} pb-[30px]`}
						>
							{column.title}
						</h3>
						<ul className="flex flex-col gap-[30px] text-xl">
							{column.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									<Link href={link.href} target="_blank">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
				<div className="flex flex-col gap-[30px]">
					<h3
						className={`text-3xl font-bold border-b ${borderColor} pb-[30px]`}
					>
						تواصل معنا
					</h3>
					<a
						target="_blank"
						className="text-xl font-bold border-b border-bright-one pb-[30px]"
						href={`mailto:${globalData.support}`}
					>
						{globalData.support}
					</a>
					<ul className="flex items-center gap-[30px]">
						{globalData.socialLinks.map((social, index) => (
							<li key={index}>
								<Link href={social.href} target="_blank">
									<Image
										src={social.src}
										alt={social.alt}
										width={27}
										height={27}
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="flex justify-center items-center pb-5">
				<p className={`text-xl ${textColor} `}>Mafazza - &copy; 2024</p>
			</div>
		</footer>
	);
}

const footerData: FooterProps = {
	columns: [
		{
			title: "روابط مهمة",
			links: globalData.navLinks,
		},
		{
			title: "مشاريعنا",
			links: projectsData.map((project) => ({
				href: `https://${project.en}.mafazaa.com`,
				label: project.name,
			})),
		},
	],
};

const Footer = () => _Footer(footerData);

export default Footer;
