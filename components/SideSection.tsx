import React from "react";
import Image from "next/image";
import Link from "next/link";
import FilledButton from "./FilledButton";
import OutlinedButton from "./OutlinedButton";

interface SideSectionProps {
  imageSrc: any;
  title: string;
  description: string;
  textColor: string;
  buttons: any;
  reverse?: boolean;
}

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
          {buttons.map((button: any, index: number) => {
            if (button.type === "filled") {
              return (
                <Link href={button.buttonLink} key={index}>
                  <FilledButton
                    backgroundColor={button.backgroundColor}
                    textColor={button.textColor}
                    text={button.text}
                  />
                </Link>
              );
            } else {
              return (
                <Link href={button.buttonLink} key={index}>
                  <OutlinedButton
                    borderColor={button.borderColor}
                    textColor={button.textColor}
                    text={button.text}
                  />
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default SideSection;
