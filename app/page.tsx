"use client";

import { CenterSectionData, sideSectionData } from "./homeData";
import { useEffect, useState } from "react";
import {
  Form,
  FollowUs,
  Project,
  CenterSection,
  SideSection,
} from "mafazaa-react-ui";
import img1 from "@/assets/Group 1.svg";
import img2 from "@/assets/Group 2.svg";
import "./globals.css";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const links = {
    socialLinks: [
      {
        href: "https://whatsapp.com/channel/0029VakgzRJ5kg7BkQFSJK36",
        src: "https://api.mafazaa.com/icons/whatsapp.svg",
        alt: "whatsapp",
      },
      {
        href: "https://facebook.com/mafazaa.org",
        src: "https://api.mafazaa.com/icons/facebook.svg",
        alt: "facebook",
      },
      {
        href: "https://youtube.com/@mafazaa_official",
        src: "https://api.mafazaa.com/icons/youtube.svg",
        alt: "youtube",
      },
      {
        href: "mailto:support@mafazaa.com",
        src: "https://api.mafazaa.com/icons/mail.svg",
        alt: "mail",
      },
    ],
    support: "support@mafazaa.com",
  };
  useEffect(() => {
    (async () => {
      const res = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/global/projects`)
      ).json();
      setProjects(res);
    })();
  }, []);
  return (
    <main dir="rtl">
      {/* {homeData.map((element, index) => (
        <Section {...element} key={index} />
      ))} */}
      <CenterSection {...CenterSectionData} />
      <SideSection {...sideSectionData} />
      <section
        className="px-4 md:px-10 lg:px-32 py-10 relative 
          after:content-['']
          after:absolute
          after:left-1/4
          after:bottom-0
          after:w-1/2
          after:h-[0.5px]
          after:block
        after:bg-black"
        id="projects"
      >
        <h1 className="font-bold text-2xl lg:text-5xl mb-6">مشاريعنا</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((element: any, index) => (
            <Project {...element} key={index} />
          ))}
        </div>
      </section>
      <FollowUs links={links} img1={img1} img2={img2} />
      <Form />
    </main>
  );
}
