import { SectionProps } from "@/components/Section";
import sideSectionImage from "@/assets/sideSection.png";

import { SideSectionProps } from "@/components/SideSection";
import { CenterSectionProps } from "@/components/CenterSection";

const section1: CenterSectionProps = {
  backgroundImage: "bg-[url(../assets/protect.png)]",
  textColor: "text-bright-one",
  title: "احمي أطفالك من المحتوى الإباحي",
  description:
    "الكثير من الأطفال يكتشفون المواقع الإباحية عن طريق الصدفة أو الخطأ !\nلا تدع هذا يحدث!",
  buttons: [
    {
      type: "fill",
      text: "سأحمي أطفالي",
      backgroundOrBorderColor: "bg-accent-color",
      textColor: "text-bright-one",
      link: "https://ainaa.mafazaa.com",
    },
    {
      type: "outline",
      text: "المزيد ...",
      backgroundOrBorderColor: "",
      textColor: "text-bright-one",
      link: "https://ainaa.mafazaa.com",
    },
  ],
};

const section2: SideSectionProps = {
  imageSrc: sideSectionImage,
  title: "اغرس في أولادك الدين القويم",
  description:
    "وفر لأطفالك كرتون إسلامي هادف يرسخ في قلوبهم و عقيدتهم و مبادئهم و دينهم  و يربيهم تربية حسنة إن شاء الله",
  textColor: "text-black",
  buttons: [
    {
      type: "fill",
      text: "أرني هذا المحتوى",
      backgroundOrBorderColor: "bg-accent-color",
      textColor: "text-bright-one",
      link: "https://youtube.com/playlist?list=PLiICC_-DcP0SsG6GfDxMkzR-uo6emprzd&feature=shared",
    },
  ],
  reverse: true,
};

const homeData: SectionProps[] = [
  {
    type: "center",
    payload: section1,
  },
  {
    type: "side",
    payload: section2,
  },
];

export default homeData;
