import { CenterSection } from "mafazaa-react-ui";
import React from "react";
import ideaData from "./ideaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "مفازا - فكرة المشروع",
};

const IdeaPage = () => {
  return (
    <main>
      <CenterSection
        {...{
          backgroundImage:
            "bg-[url(../assets/islamic-new-year-pattern-background.jpg)]",
          textColor: "#f2f2f2",
          title: "فكرة المشروع",
          description:
            "بسم الله الرحمن الرحيم \n ينقسم مشروع مفازا إلى خمسة مشاريع أساسية و هي عينا سلسبيلا، نباتا حسنا، زدني علما، و قرضا حسنا، و باميلكا \n نتعرف عليهم في الفقرات التالية إن شاء الله",
          buttons: [],
          type: "center",
        }}
      />
      <section className="flex flex-col text-right">
        {ideaData.map((idea, i) => (
          <div
            key={i}
            className={`${
              i % 2
                ? "bg-gradient-to-r from-dark-one to-dark-two text-bright-one"
                : "bg-gradient-to-r from-bright-one to-bright-two text-dark-one"
            } flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-6 sm:py-8 md:py-10 text-bright-one`}
          >
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
              {idea.name}{" "}
            </h2>
            {idea.explanation.map((text, i) => (
              <div key={i}>
                <br />
                <p className="text-sm sm:text-base md:text-lg">{text}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
};

export default IdeaPage;
