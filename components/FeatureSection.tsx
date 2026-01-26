"use client";

import Image from "next/image";
import Link from "next/link";
import type { FeatureSectionProps, Button } from "@/types/index";

export default function FeatureSection({
	imageSrc,
	title,
	description,
	textColor,
	buttons,
	reverse = false,
}: FeatureSectionProps) {
	return (
		<section className="w-full py-16 md:py-24 px-4 md:px-10 lg:px-32">
			<div
				className={`flex flex-col ${
					reverse ? "lg:flex-row-reverse" : "lg:flex-row"
				} items-center gap-8 lg:gap-16 max-w-7xl mx-auto`}
			>
				{/* Image */}
				<div className="w-full lg:w-1/2 flex justify-center">
					<div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl">
						<Image
							src={imageSrc}
							alt={title}
							fill
							className="object-cover"
						/>
					</div>
				</div>

				{/* Content */}
				<div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
					<h2
						className="text-3xl md:text-4xl lg:text-5xl font-bold"
						style={{ color: textColor }}
					>
						{title}
					</h2>
					<p
						className="text-lg md:text-xl lg:text-2xl leading-relaxed"
						style={{ color: textColor }}
					>
						{description}
					</p>
					<div className="flex flex-wrap gap-4">
						{buttons.map((button: Button, index: number) => (
							<Link
								key={index}
								href={button.link}
								className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
									button.fill
										? "hover:opacity-90 hover:scale-105"
										: "border-2 hover:bg-white/10"
								}`}
								style={{
									backgroundColor: button.fill
										? button.backgroundOrBorderColor
										: "transparent",
									borderColor: button.backgroundOrBorderColor,
									color: button.textColor,
								}}
							>
								{button.text}
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

