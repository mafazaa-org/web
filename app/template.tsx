"use client";

import { useEffect, useState } from "react";
import { Header, Footer } from "mafazaa-react-ui";
import logo from "@/public/logo/svg/logo_dark.svg";
import "./globals.css";

type LinksTypes = {
  socialLinks: {
    href: string;
    src: string;
    text: string;
  }[];
  importantLinks: {
    href: string;
    text: string;
  }[];
};
export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [links, setLinks] = useState<LinksTypes>();
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
    loaded && (
      <>
        <Header links={links} logo={logo} />
        {children}
        <Footer links={links} logo={logo} projects={projects} />
      </>
    )
  );
}
