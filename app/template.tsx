"use client";

import { useEffect, useState } from "react";
import { Header, Footer } from "mafazaa-react-ui";
import logo from "@/public/logo/svg/logo_dark.svg";
import { navLinks } from "./globalData";
export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [links, setLinks] = useState();
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST}/global/links`,
          { cache: "force-cache" }
        );
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        setLinks(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch links.");
      } finally {
        setLoaded(true);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const res = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/global/projects`)
      ).json();
      setProjects(res);
    })();
  }, []);
  if (!loaded) {
    return <div>Loading...</div>; // Render a loading state
  }

  return (
    <>
      <Header links={links} navLinks={navLinks} logo={logo} />
      {children}
      <Footer
        links={links}
        navLinks={navLinks}
        logo={logo}
        projects={projects}
      />
    </>
  );
}
