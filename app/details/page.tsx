"use client";
import Head from "next/head";
import { CenterSection } from "mafazaa-react-ui";
import { useSearchParams } from "next/navigation";
import detailsData from "./detailsData";
export default function Details() {
	const searchParams = useSearchParams();
	const type = searchParams.get("type") as string; // Retrieve 'type' query parameter

	const isSkilled = type === "skilled";

	return (
		<>
			<Head>
				<title>
					{isSkilled
						? "For Skilled Individuals"
						: "For Everyone Else"}
				</title>
				<meta
					name="description"
					content={`Details for ${
						isSkilled ? "skilled individuals" : "everyone else"
					}`}
				/>
			</Head>
			<CenterSection {...detailsData[type]} />
		</>
	);
}
