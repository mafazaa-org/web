import React from "react";
import Header from "./Header";
import { headerData } from "@/components/headerData";
import OutlinedButton from "./OutlinedButton";
import FilledButton from "./FilledButton";
type ButtonConfig = {
  type: string;
  text: string;
  backgroundColor?: string;
  textColor: string;
  borderColor?: string;
};

type SectionProps = {
  backgroundImage: string;
  textColor: string;
  heading: string;
  subheading: string;
  buttons: ButtonConfig[];
};

function Section({
  backgroundImage,
  textColor,
  heading,
  subheading,
  buttons,
}: SectionProps) {
  return (
    <section
      className={`pb-24 min-h-screen w-full object-cover bg-no-repeat bg-cover bg-center ${textColor} ${backgroundImage} 
      relative overflow-hidden block z-10 before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-black
            before:opacity-65
            before:z-[-5]`}
    >
      <Header {...headerData} />
      <div className="text-center py-12 ">
        <h1 className={`text-5xl font-extrabold `}>{heading}</h1>
        <h4 className={`text-2xl font-bold mt-6`}>{subheading}</h4>
        <div className="flex justify-center gap-10 mt-12">
          {buttons.map((button, index) => {
            if (button.type === "filled") {
              return (
                <FilledButton
                  key={index}
                  backgroundColor={button.backgroundColor || "bg-accent-color"}
                  textColor={button.textColor}
                  text={button.text}
                />
              );
            } else {
              return (
                <OutlinedButton
                  key={index}
                  borderColor={button.borderColor || "border-bright-one"}
                  textColor={button.textColor}
                  text={button.text}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Section;
