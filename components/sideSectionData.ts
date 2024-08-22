import Image from "@/assets/sideSection.png";
export const sideSectionData = [
  {
    imageSrc: Image,
    title: "اغرس في أولادك الدين القويم",
    description:
      "وفر لأطفالك كرتون إسلامي هادف يرسخ في قلوبهم و عقيدتهم و مبادئهم و دينهم  و يربيهم تربية حسنة إن شاء الله",
    textColor: "text-dark-one",
    buttons: [
      {
        type: "filled",
        text: "أرني هذا المحتوى",
        backgroundColor: "bg-dark-one",
        textColor: "text-bright-one",
        buttonLink: "/your-link2",
      },
      {
        type: "outlined",
        text: "المزيد . . .",
        borderColor: "border-primary-color",
        textColor: "text-primary-color",
        buttonLink: "/your-link2",
      },
    ],
    reverse: true,
  },
];
