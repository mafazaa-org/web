import { SectionProps } from "@/components/Section";
import sideSectionImage from "@/assets/sideSection.png";
import centerSectionImage from "@/assets/protect.png";

import { SideSectionProps } from "@/components/SideSection";
import { CenterSectionProps } from "@/components/CenterSection";

export const CenterSectionData: CenterSectionProps = {
  backgroundImage: centerSectionImage.src,
  textColor: "#f2f2f2",
  title: "احمي أطفالك من المحتوى الإباحي",
  description:
    "الكثير من الأطفال يكتشفون المواقع الإباحية عن طريق الصدفة أو الخطأ !\nلا تدع هذا يحدث!",
  buttons: [
    {
      type: "fill",
      text: "سأحمي أطفالي",
      backgroundOrBorderColor: "#18cad3",
      textColor: "#f2f2f2",
      link: "https://ainaa.mafazaa.com",
    },
    {
      type: "outline",
      text: "المزيد ...",
      backgroundOrBorderColor: "",
      textColor: "#f2f2f2",
      link: "https://ainaa.mafazaa.com",
    },
  ],
};

export const sideSectionData: SideSectionProps = {
  imageSrc: sideSectionImage,
  title: "اغرس في أولادك الدين القويم",
  description:
    "وفر لأطفالك كرتون إسلامي هادف يرسخ في قلوبهم و عقيدتهم و مبادئهم و دينهم  و يربيهم تربية حسنة إن شاء الله",
  textColor: "#000000",
  buttons: [
    {
      type: "fill",
      text: "أرني هذا المحتوى",
      backgroundOrBorderColor: "#18cad3",
      textColor: "#f2f2f2",
      link: "https://youtube.com/playlist?list=PLiICC_-DcP0SsG6GfDxMkzR-uo6emprzd&feature=shared",
    },
  ],
  reverse: true,
};

const homeData: SectionProps[] = [
  {
    type: "center",
    payload: CenterSectionData,
  },
  {
    type: "side",
    payload: sideSectionData,
  },
];

export default homeData;
