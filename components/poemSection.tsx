import React from "react";

export type poemType = {
	source: string;
	verses: string[][];
};

const PoemSection = ({ source, verses }: poemType) => {
	return (
		<section
			className={`py-24 h-1/3 w-full object-cover bg-no-repeat bg-cover bg-center text-bright-one bg-[url(../assets/top-view-islamic-new-year-concept.jpg)] 
      relative overflow-hidden flex items-center justify-center z-10 before:content-['']
            before:absolute
            before:inset-0
            before:block
          before:bg-black
            before:opacity-65
            before:z-[-5]
            `}
		>
			<div className="text-center items-center lg:mt-16 py-8 flex flex-col gap-2 lg:gap-4 max-lg:px-4 w-2/3">
				{verses.map((v, ind) => (
					<div key={ind} className="w-1/2">
						{v.map((verse, i, a) => (
							<p
								key={i}
								className={`text-base sm:text-lg md:text-xl lg:text-[32px] mb-0 lg:mb-8 font-bold ${
									a.length == 1
										? "text-center"
										: i % 2
										? "text-left"
										: "text-right"
								}`}
							>
								{verse}
							</p>
						))}
					</div>
				))}
				<h4 className="text-left w-2/3"> - {source}</h4>
			</div>
		</section>
	);
};

export default PoemSection;
