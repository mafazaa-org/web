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
        className={`${backgroundOrBorderColor} ${textColor} font-bold text-base rounded-lg min-w-52 
        ${
          type === "outline"
            ? "bg-transparent border-[3px] py-[14.5px] px-[45px]"
            : "py-[17.5px] px-[48px]"
        }
        `}
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
