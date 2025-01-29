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
  const [links, setLinks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiHostResponse = await fetch("./api/public_env/api_host");

        const apiHost = await apiHostResponse.json();

        const [projectsResponse, linksResponse] = await Promise.all([
          fetch(`${apiHost}/global/projects`, { cache: "force-cache" }),
          fetch(`${apiHost}/global/links`, { cache: "force-cache" }),
        ]);

        setProjects(await projectsResponse.json());
        setLinks(await linksResponse.json());
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoaded(true);
      }
    };

    fetchData();
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
