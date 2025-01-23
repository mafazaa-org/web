"use client";
import React from "react";
import { Button, CenterSection } from "mafazaa-react-ui";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>انضم إلينا</title>
        <meta
          name="description"
          content="انضم إلى مجتمعنا وساهم في تحقيق الفائدة للجميع!"
        />
      </Head>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Section for Skilled Individuals */}
        <div
          className="flex-1 flex flex-col items-center justify-center p-8 text-center"
          style={{
            background: "linear-gradient(135deg, #0d309e, #18cad3)", // Gradient for Skilled Individuals
          }}
        >
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#f2f2f2" }}>
            للمحترفين وأصحاب المهارات
          </h1>
          <p
            className="text-lg mb-6"
            style={{ color: "#ccc" }} // Subtle secondary text
          >
            هل أنت مطور، مصمم، أو تمتلك مهارات مميزة؟ انضم إلينا وساهم في تنفيذ
            مشاريع هادفة تخدم مجتمعنا الإسلامي وتحدث تغييراً إيجابياً.
          </p>
          <Button
            text="تعرف أكثر"
            backgroundOrBorderColor=" #18cad3" // Gradient Button
            textColor="#f2f2f2" // Bright One
            fill
            link={`/details?type=skilled`}
          />
        </div>

        {/* Right Section for Non-Skilled Individuals */}
        <div
          className="flex-1 flex flex-col items-center justify-center p-8 text-center"
          style={{
            background: "linear-gradient(135deg, #60148c, #0d309e)", // Gradient for Non-Skilled Individuals
          }}
        >
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#f2f2f2" }}>
            للجميع مهما كانت مهاراتهم
          </h1>
          <p
            className="text-lg mb-6"
            style={{ color: "#ccc" }} // Subtle secondary text
          >
            ليس لديك مهارات تقنية؟ لا تقلق! يمكنك الانضمام إلينا والمساعدة في
            دعم المشاريع والمجتمع بطرق أخرى مفيدة ومؤثرة.
          </p>
          <Button
            text="تعرف أكثر"
            backgroundOrBorderColor=" #60148c" // Gradient Button
            textColor="#f2f2f2" // Bright One
            fill
            link={`/details?type=non-skilled`}
          />
        </div>
      </div>
    </>
  );
}
