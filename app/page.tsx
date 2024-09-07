import Section from "@/components/Section";
import homeData from "./homeData";

export default function Home() {
	return (
		<main dir="rtl">
			{homeData.map((element, index) => (
				<Section {...element} key={index} />
			))}
		</main>
	);
}
