"use client";

import { useEffect, useState } from "react";
import { Header, Footer } from "mafazaa-react-ui";
import logo from "@/public/logo/svg/logo_dark.svg";
import "./globals.css";
import { usePathname } from "next/navigation"; // Import usePathname

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
import { Header, Footer } from "mafazaa-react-ui";
import logo from "@/public/logo/svg/logo_dark.svg";
import "./globals.css";
import { usePathname } from "next/navigation"; // Import usePathname

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
  children,
}: Readonly<{
  children: React.ReactNode;
  children: React.ReactNode;
}>) {
  const [links, setLinks] = useState<LinksTypes>();
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname(); // Get the current route

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
  const excludeHeaderFooter = pathname === "/join";

  return (
    loaded && (
      <>
        {!excludeHeaderFooter && <Header links={links} logo={logo} />}
        {children}
        {!excludeHeaderFooter && (
          <Footer links={links} logo={logo} projects={projects} />
        )}
      </>
    )
  );
}
