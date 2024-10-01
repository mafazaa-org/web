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
    <div
      className={`flex gap-6 lg:gap-0 ${
        reverse
          ? "flex-col lg:flex-row-reverse"
          : "flex-col-reverse lg:flex-row"
      } mt-20 mb-10 py-10 lg:py-20 relative 
          after:content-['']
          after:absolute
          after:left-1/4
          after:bottom-0
          after:w-1/2
          after:h-[0.5px]
          after:block
        after:bg-black`}
    >
      <div
        className="max-lg:flex max-lg:items-center max-lg:justify-center flex-1 lg:w-1/2 relative before:content-['']
          before:w-1/3
          before:h-1/2
          before:absolute
          before:left-4
          lg:before:left-1/4
          before:-top-1/4
          before:block
        before:bg-accent-color
          before:rounded-lg
          before:opacity-40
          before:-z-10
          before:blur-[1px]
          "
      >
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className="object-cover  rounded-lg max-lg:w-3/4"
        />
      </div>
      <div
        className={`flex-1 lg:w-1/2 flex flex-col items-start justify-center gap-4 px-4 lg:pr-28  ${textColor}`}
      >
        <h2 className={`text-xl  md:text-3xl lg:text-5xl w-4/5 font-bold mb-4`}>
          {title}
        </h2>
        <p className="text-xs sm:text-sm md:text-lg lg:text-2xl font-bold mb-4 w-4/5 text-right">
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
