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
			let res = await (
				await fetch(
					`${process.env.NEXT_PUBLIC_API_HOST}/global/links`,
					{ cache: "force-cache" }
				)
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
