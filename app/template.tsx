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
=======
	const [links, setLinks] = useState({});
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		(async () => {
			const api_host = await (
				await fetch("/api/public_env/api_host")
			).json();

			let res = await (
				await fetch(`${api_host}/global/links`, {
					cache: "force-cache",
				})
			).json();
			console.log(res);
			setLinks(res);
			setLoaded(true);
		})();
	}, []);
	return (
		loaded && (
			<>
				<Header links={links} />
				{children}
				<Footer links={links} />
			</>
		)
	);
>>>>>>> 9d5cee575301ed2a28de7cfef976cfa09a2a0c49
}
