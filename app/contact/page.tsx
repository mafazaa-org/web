import Form from "@/components/Form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "مفازا - تواصل معنا",
};

function ContactPage() {
	return (
		<div
			dir="rtl"
			className="bg-gradient-to-r from-dark-one to-dark-two h-full w-full text-white mt-24"
		>
			<Form />
		</div>
	);
}

export default ContactPage;
