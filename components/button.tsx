import Link from "next/link";
import React from "react";

function Button({
	backgroundOrBorderColor,
	textColor,
	text,
	type,
	link,
}: ButtonProps) {
	return (
		<Link href={link}>
			<button
				className={`${
					type === "outline" && "bg-transparent border-2"
				} ${backgroundOrBorderColor} ${textColor} font-bold text-2xl px-[30px] py-[15px] rounded`}
			>
				<h4>{text}</h4>
			</button>
		</Link>
	);
}

export default Button;

export type ButtonProps = {
	link: string;
	backgroundOrBorderColor: string;
	textColor: string;
	text: string;
	type: "fill" | "outline";
};
