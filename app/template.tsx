"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function RootTemplate({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
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
}
