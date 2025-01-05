"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo/svg/logo_dark.svg";
import { usePathname } from "next/navigation";

type FooterColumn = {
	title: string;
	links: { href: string; label: string }[];
};

const textColor = "text-bright-one";
const afterborder =
	"relative after:bg-accent-color after:h-[1px] after:w-2/3 after:absolute after:bottom-0 after:right-0";

function Footer({ links }: { links: any }) {
	const pathname = usePathname();

	const [isSpecialRoute, setIsSpecialRoute] = useState(false);
	const [projects, setProjects] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			setIsSpecialRoute(pathname === "/contact");

			const api_host = await (
				await fetch("/api/public_env/api_host")
			).json();

			const res = await (
				await fetch(`${api_host}/global/projects`, {
					cache: "force-cache",
				})
			).json();
			setProjects(res);

			setLoaded(true);
		})();
	}, []);

	const columns = [
		{
			title: "روابط مهمة",
			links: links.importantLinks,
		},
		{
			title: "مشاريعنا",
			links: projects.map((project: any) => ({
				href: `https://${project.en}.mafazaa.com`,
				text: project.title,
			})),
		},
	];

	return (
		loaded && (
			<footer
				className={`w-full ${
					isSpecialRoute
						? "bg-[#030B27]"
						: "bg-gradient-to-r from-dark-one to-dark-two"
				}  ${textColor} text-right `}
			>
				<div
					className={`flex flex-col-reverse lg:grid grid-cols-12 gap-6 md:gap-10 lg:gap-20 px-6 md:px-12 lg:px-32 pb-8 pt-10 lg:pt-20 lg:pb-16 ${textColor} `}
				>
					{/* Contact Section */}
					<div className="flex flex-col lg:w-fit max-lg:w-full gap-4 lg:gap-6 col-span-3 max-lg:items-end lg:justify-start ">
						<h3
							className={`text-2xl lg:text-3xl font-bold ${afterborder} pb-2 lg:pb-4`}
						>
							تواصل معنا
						</h3>
						<a
							target="_blank"
							className="text-lg lg:text-xl font-bold border-b border-bright-one pb-2 lg:pb-4"
							href={`mailto:${links.support}`}
						>
							{links.support}
						</a>
						<ul className="flex items-center justify-center lg:justify-between gap-4 lg:gap-6">
							{links.socialLinks.map(
								(social: any, index: any) => (
									<li key={index}>
										<Link
											href={social.href}
											target="_blank"
										>
											<Image
												src={social.src}
												alt={social.alt}
												width={27}
												height={27}
											/>
										</Link>
									</li>
								)
							)}
						</ul>
					</div>

					{/* Dynamic Columns */}
					<div className="flex flex-col-reverse lg:flex-row-reverse gap-10 col-span-6 items-start lg:items-start lg:justify-evenly">
						{columns.map((column, index) => (
							<div
								key={index}
								className="flex flex-col gap-4 lg:gap-6 min-h-full"
							>
								<h3
									className={`text-2xl lg:text-3xl font-bold ${afterborder} pb-2 lg:pb-4`}
								>
									{column.title}
								</h3>
								<ul className="flex flex-col justify-end gap-2 lg:gap-4 text-base font-bold">
									{column.links.map(
										(
											link: {
												href: string;
												text: string;
											},
											linkIndex: number
										) => (
											<li key={linkIndex}>
												<Link href={link.href}>
													{link.text}
												</Link>
											</li>
										)
									)}
								</ul>
							</div>
						))}
					</div>

					{/* Logo Section */}
					<div className="flex items-center justify-center lg:justify-center  col-span-3">
						<Link href={"/"}>
							<Image
								src={logo}
								alt="logo"
								width={143}
								height={67}
								className=" object-contain"
							/>
						</Link>
					</div>
				</div>

				{/* Footer Bottom Section
      <div className="flex justify-center items-center py-4 lg:py-5 border-t border-bright-one">
        <p className={`text-sm lg:text-xl ${textColor}`}>
          Mafazza - &copy; 2024
        </p>
      </div> */}
			</footer>
		)
	);
}

export default Footer;
