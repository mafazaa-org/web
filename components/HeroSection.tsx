"use client";

import Image from "next/image";
import Link from "next/link";
import logoPattern from "@/assets/الشعار/الشعار/2مفازا.png";
import type { HeroSectionProps, Button } from "@/types/index";

export default function HeroSection({
	textColor,
	description,
	buttons,
}: HeroSectionProps) {
	return (
		<section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
			{/* Background Pattern with Logo */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary-color via-dark-one to-secondary-color">
				{/* Logo Pattern Overlay */}
				<div
					className="absolute inset-0 opacity-10"
					style={{
						backgroundImage: `url(${
							typeof logoPattern === "string"
								? logoPattern
								: logoPattern.src || logoPattern
						})`,
						backgroundSize: "400px 400px",
						backgroundRepeat: "repeat",
						backgroundPosition: "center",
					}}
				/>
				{/* Animated Logo Elements */}
				<div className="absolute top-20 right-20 w-64 h-64 opacity-5 animate-pulse">
					<Image
						src={logoPattern}
						alt=""
						fill
						className="object-contain"
						unoptimized
					/>
				</div>
				<div
					className="absolute bottom-20 left-20 w-96 h-96 opacity-5 animate-pulse"
					style={{ animationDelay: "1s" }}
				>
					<Image
						src={logoPattern}
						alt=""
						fill
						className="object-contain"
						unoptimized
					/>
				</div>
				<div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-5 animate-pulse"
					style={{ animationDelay: "2s" }}
				>
					<Image
						src={logoPattern}
						alt=""
						fill
						className="object-contain"
						unoptimized
					/>
				</div>
			</div>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-dark-one/60 via-dark-two/50 to-dark-one/60"></div>

			{/* Content */}
			<div className="relative z-10 px-4 md:px-10 lg:px-32 py-20 text-center max-w-6xl">
				<div className="space-y-8 lg:space-y-12">
					<p
						className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl leading-relaxed whitespace-pre-line font-bold"
						style={{ color: textColor }}
					>
						{description}
					</p>

					{buttons.length > 0 && (
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
							{buttons.map((button: Button, index: number) => (
								<Link
									key={index}
									href={button.link}
									className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
										button.fill
											? "hover:opacity-90 hover:scale-105 shadow-lg"
											: "border-2 hover:bg-white/10"
									}`}
									style={{
										backgroundColor: button.fill
											? button.backgroundOrBorderColor
											: "transparent",
										borderColor:
											button.backgroundOrBorderColor,
										color: button.textColor,
									}}
								>
									{button.text}
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
