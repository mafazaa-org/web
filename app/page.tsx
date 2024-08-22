import Section from "@/components/Section";
import { sectionData } from "@/components/sectionData";
import Footer from "@/components/Footer";
import { footerData } from "@/components/footerData";
import SideSection from "@/components/SideSection";
import { sideSectionData } from "@/components/sideSectionData";

export default function Home() {
  return (
    <main dir="rtl">
      <Section {...sectionData} />
      {sideSectionData.map((section, index) => (
        <SideSection
          key={index}
          imageSrc={section.imageSrc}
          title={section.title}
          description={section.description}
          reverse={section.reverse}
          buttons={section.buttons}
          textColor={section.textColor}
        />
      ))}
      <Footer {...footerData} />
    </main>
  );
}
