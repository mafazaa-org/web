import { Form } from "mafazaa-react-ui";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "تواصل معنا",
	description:
		"تواصل مع فريق مفازا - نحن هنا للإجابة على استفساراتك ومساعدتك. استخدم النموذج التالي لإرسال رسالتك وسنرد عليك في أقرب وقت ممكن.",
	openGraph: {
		title: "تواصل معنا | مفازا",
		description:
			"تواصل مع فريق مفازا - نحن هنا للإجابة على استفساراتك ومساعدتك",
		url: "https://mafazaa.com/contact",
	},
	twitter: {
		card: "summary",
		title: "تواصل معنا | مفازا",
		description: "تواصل مع فريق مفازا - نحن هنا للإجابة على استفساراتك",
	},
	alternates: {
		canonical: "https://mafazaa.com/contact",
	},
};

function ContactPage() {
	return (
		<div dir="rtl" className="h-full w-full mt-24">
			<Form />
		</div>
	);
}

export default ContactPage;
