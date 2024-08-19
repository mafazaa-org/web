import React from "react";
import Header from "./Header";

function HeroSection() {
  return (
    <section className="hero__section">
      <Header />
      <div className="hero__section__content text-center">
        <h1 className="text-bright-one text-5xl font-extrabold mt-12 ">
          احمي أطفالك من المحتوى الإباحي
        </h1>
        <h4 className="text-bright-one text-2xl font-bold mt-6">
          الكثير من الأطفال يكتشفون المواقع الإباحية عن طريق الصدفة أو الخطأ! لا
          تدع هذا يحدث!{" "}
        </h4>
        <div className="flex justify-center gap-10 mt-12">
          <button className="bg-transparent border-2 w-1/6 border-bright-one text-bright-one font-bold text-2xl  px-[30px] py-[15px] rounded">
            <h4>...المزيد</h4>
          </button>
          <button className="bg-accent-color w-1/6 text-bright-one font-bold text-2xl px-[30px] py-[15px] rounded">
            <h4>سأحمي أطفالي</h4>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
