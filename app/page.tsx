"use client";

import HeroSection from "@/components/HeroSection";
import type { HeroSectionProps } from "@/types/index";
import "./globals.css";

export default function Home() {
	const heroData: HeroSectionProps = {
		textColor: "#f2f2f2",
		description:"نحن قومٌ أعزنا الله بالإسلام، فإن ابتغينا العزة في غيره أذلنا الله",
		buttons: [],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "مفازا",
						url: "https://mafazaa.com",
						logo: "https://mafazaa.com/logo.png",
						description:
							"مشروع دعوي إسلامي يهدف إلى خدمة الإسلام والمسلمين. إن الله ابتعثنا لنخرج العباد من عبادة العباد إلى عبادة رب العباد، ومن ضيق الدنيا إلى سعة الدنيا والآخرة، ومن جور الأديان إلى عدل الإسلام.",
						mission:
							"خدمة الإسلام والمسلمين من خلال مشاريع دعوية ومحتوى إسلامي هادف",
						sameAs: [
							"https://facebook.com/mafazaa.unite",
							"https://youtube.com/@mafazaa_official",
							"https://github.com/mafazaa-org/",
						],
						contactPoint: {
							"@type": "ContactPoint",
							email: "support@mafazaa.com",
							contactType: "دعم فني",
						},
					}),
				}}
			/>
			<main dir="rtl" className="min-h-screen">
				<HeroSection {...heroData} />
			
			</main>
		</>
	);
}
