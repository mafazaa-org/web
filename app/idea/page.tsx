import Section from "@/components/Section";
import React from "react";
import ideaData from "./ideaData";

const IdeaPage = () => {
	return (
		<main>
			<Section
				{...{
					payload: {
						backgroundImage:
							"bg-[url(../assets/islamic-new-year-pattern-background.jpg)]",
						textColor: "text-bright-one",
						title: "فكرة المشروع",
						description:
							"بسم الله الرحمن الرحيم \n ينقسم مشروع مفازا إلى خمسة مشاريع أساسية و هي عينا سلسبيلا، نباتا حسنا، زدني علما، و قرضا حسنا، و باميلكا \n نتعرف عليها في الفقرة التالية إن شاء الله",
						buttons: [],
					},
					type: "center",
				}}
			/>
			<section className="flex flex-col text-right">
				{ideaData.map((v, i) => (
					<div
						key={i}
						className={`${
							i % 2
								? "bg-gradient-to-r from-dark-one to-dark-two text-bright-one"
								: "bg-gradient-to-r from-bright-one to-bright-two text-dark-one"
						} flex flex-col px-72 py-10 text-bright-one`}
					>
						<h2 className="font-bold text-2xl">{v.name} </h2>
						{v.explanation.map((v, i) => (
							<div key={i}>
								<br /> <p>{v}</p>
							</div>
						))}
					</div>
				))}
			</section>
		</main>
	);
};

export default IdeaPage;
