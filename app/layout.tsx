import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مفازا - الصفحة الرئيسية",
  description:
    "موقع مفازا - منصة لحجب المواقع الإباحية، توفير محتوى إسلامي للأطفال، توفير فرص عمل و تسهيل العمل للشباب، و توفير مواد علمية بجودة عالية تنافس الغرب",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
