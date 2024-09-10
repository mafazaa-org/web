const projectsData: ProjectDataType[] = [
  {
    title: "عينا سلسبيلا",
    en: "ainaa",
    description: "مشروع يهدف ان شاء الله الى تنظيف النت من المحتوى الاباحي ثم كل ما يغضب الله عز و جل",
    link: "ainaa",
  },
  {
    title: "نباتا حسنا",
    en: "nabataa",
    description: "مشروع يهدف إلى إنشاء جيل صالح بإذن الله تعالى عبر توفير/تجميع محتوى كرتوني إسلامي هادف و غير ذلك من الطرق التي تغرس الدين القويم و شرع الله في الطفل.",
    link: "nabataa",
  },
  {
    title: "زدني علما",
    en: "elmaa",
    description: "مشروع يهدف إن شاء الله إلى تعريب المحتوى التعليمي الأجنبي أو إنشاء محتوى عالى الجودة حتى يصير لنا نفس الجودة التعليمية لدى الغرب",
    link: "elmaa",
  },
];

export default projectsData;

export type ProjectDataType = {
  title: string;
  en: string;
  description: string;
  link: string;
};
