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
          type === "outline" && "bg-transparent border-[3px]"
        } ${backgroundOrBorderColor} ${textColor} font-bold text-base py-[17.5px] px-[48px] rounded-2xl min-w-52 `}
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
