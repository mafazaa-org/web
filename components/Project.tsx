// components/Project.tsx

import React from "react";
import Link from "next/link";
import { ProjectDataType } from "../app/projectsData";
import { link } from "fs";

const Project: React.FC<ProjectDataType> = ({ title, description, en }) => {
	return (
		<div className="flex flex-col items-center overflow-hidden  ">
			{/* Image Section */}
			<Link href={`https://${en}.mafazaa.com`} className="w-full">
				<div className="w-full h-56 md:h-80 lg:h-96 bg-black flex items-center justify-center rounded-lg">
					<h2 className="text-bright-one font-bold text-2xl md:text-3xl lg:text-5xl ">
						{title}
					</h2>
				</div>
			</Link>

			{/* Content Section */}
			<div className="p-6 text-center">
				<p className="text-black text-base md:text-lg lg:text-2xl font-bold mb-4 text-right tracking-wide ">
					{description}
				</p>
				{/* <Link
          href={link}
          className="inline-block px-6 py-2 text-white bg-accent-color rounded-md hover:bg-accent-dark transition-colors duration-300"
        >
          View Project
        </Link> */}
			</div>
		</div>
	);
};

export default Project;
