import React from "react";
import SideSection, { SideSectionProps } from "./SideSection";
import CenterSection, { CenterSectionProps } from "./CenterSection";

const Section = ({ type, payload }: SectionProps) => {
	return type == "center" ? (
		<CenterSection {...(payload as CenterSectionProps)} />
	) : (
		<SideSection {...(payload as SideSectionProps)} />
	);
};

export default Section;

export type SectionProps = {
	type: "side" | "center";
	payload: CenterSectionProps | SideSectionProps;
};
