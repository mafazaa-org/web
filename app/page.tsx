"use client";

import Section from "@/components/Section";
import Project from "@/components/Project";
import homeData from "./homeData";
import FollowUs from "@/components/FollowUs";
import Form from "@/components/Form";
import { useEffect, useState } from "react";
import PoemSection, { poemType } from "@/components/poemSection";

export default function Home() {
	const [projects, setProjects] = useState([]);
	const [poem, setPoem] = useState<poemType>();
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		(async () => {
			const res = await (
				await fetch(
					`${process.env.NEXT_PUBLIC_API_HOST}/global/projects`
				)
			).json();
			setProjects(res);
			const p = await (
				await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/global/poem`)
			).json();
			setPoem(p);
			setLoaded(true);
		})();
	}, []);
	return (
		loaded && (
			<main dir="rtl">
				<PoemSection {...(poem as poemType)} />
				{homeData.map((element, index) => (
					<Section {...element} key={index} />
				))}
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
					<h1 className="font-bold text-2xl lg:text-5xl mb-6">
						مشاريعنا
					</h1>
					<div className="grid md:grid-cols-3 gap-8 ">
						{projects.map((element: any, index) => (
							<Project {...element} key={index} />
						))}
					</div>
				</section>
				<FollowUs />
				<Form />
			</main>
		)
	);
}
