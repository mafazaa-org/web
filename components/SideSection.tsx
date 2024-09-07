import React from "react";
import Image from "next/image";
import Button, { ButtonProps } from "./button";

export type SideSectionProps = {
	imageSrc: any;
	title: string;
	description: string;
	textColor: string;
	buttons: ButtonProps[];
	reverse?: boolean;
};

function SideSection({
	imageSrc,
	title,
	description,
	buttons,
	textColor,
	reverse,
}: SideSectionProps) {
	return (
		<div className={`flex ${reverse ? "flex-row-reverse" : ""}  `}>
			<div className="flex-1 w-1/2">
				<Image
					src={imageSrc}
					alt={title}
					width={750}
					height={500}
					className="object-cover"
				/>
			</div>
			<div
				className={`flex-1 w-1/2 flex flex-col items-center justify-center gap-4 px-4  ${textColor}`}
			>
				<h2 className={`text-7xl w-4/5 font-bold mb-4`}>{title}</h2>
				<p className="text-xl font-bold mb-4 w-4/5 text-center">
					{description}
				</p>
				<div className="flex items-center justify-center gap-4">
					{buttons.map((button: ButtonProps, index: number) => (
						<Button {...button} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}

export default SideSection;
