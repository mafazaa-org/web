import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "مفازا - الصفحة الرئيسية | حجب المواقع الإباحية و توفير المحتوى الإسلامي",
  description:
    "مفازا هو مشروع لحماية الأطفال والشباب من المحتوى غير اللائق، مع تقديم مواد علمية عالية الجودة وفرص عمل للشباب، لتوفير بيئة آمنة ونقية على الإنترنت.",

  keywords: [
    "مفازا",
    "حجب المواقع الاباحية من الهاتف",
    "حجب المواقع الاباحية dns",
    "المواقع الاباحيه",
    "المواقع الاباحية",
    "منع المواقع الاباحيه",
    "حجب المواقع الإباحية",
    "حجب المواقع الإباحية عن طريق الراوتر",
    "فلترة الإنترنت",
    "محتوى إسلامي للأطفال",
    "فرص عمل للشباب",
    "مواد علمية",
    "تكنولوجيا آمنة",
    "بديل الإنترنت النظيف",
  ],

  authors: [{ name: "فريق مفازا", url: "https://mafazaa.com" }],

  openGraph: {
    title: "مفازا - حماية الإنترنت وتوفير محتوى آمن",
    description:
      "مفازا يساعد في حجب المواقع الإباحية، ويوفر محتوى علمي وإسلامي عالي الجودة، بالإضافة إلى تسهيل فرص العمل للشباب.",
    url: "https://mafazaa.com",
    siteName: "مفازا",
    locale: "ar_AR",
    type: "website",
    // images: [
    //   {
    //     url: "https://mafazaa.com/og-image.jpg", // ضع رابط صورة مناسبة
    //     width: 1200,
    //     height: 630,
    //     alt: "شعار مفازا - منصة للإنترنت الآمن",
    //   },
    // ],
  },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "مفازا - حجب المحتوى غير اللائق وتوفير بيئة إنترنت آمنة",
  //   description:
  //     "مفازا هو مشروع لحماية الأطفال والشباب من المحتوى غير اللائق، مع تقديم مواد علمية عالية الجودة وفرص عمل.",
  //   site: "@mafazaa", // ضع حساب تويتر الخاص بالمشروع إذا كان لديك
  //   creator: "@mafazaa",
  //   images: ["https://mafazaa.com/twitter-image.jpg"], // ضع صورة مناسبة لتويتر
  // },

  metadataBase: new URL("https://mafazaa.com"), // يحدد النطاق الأساسي للميتا داتا
  alternates: {
    canonical: "https://mafazaa.com",
  },
  robots: "index, follow", // يساعد في تحسين الأرشفة في محركات البحث
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
