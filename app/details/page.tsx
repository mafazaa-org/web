"use client";
import { Button, CenterSection } from "mafazaa-react-ui";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
export default function Details() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type"); // Retrieve 'type' query parameter

  const isSkilled = type === "skilled";

  return (
    <>
      <Head>
        <title>
          {" "}
          {isSkilled ? "For Skilled Individuals" : "For Everyone Else"}
        </title>
        <meta
          name="description"
          content={`Details for ${
            isSkilled ? "skilled individuals" : "everyone else"
          }`}
        />
      </Head>
      <CenterSection
        {...{
          backgroundImage: isSkilled
            ? "skilled" // Background for skilled individuals
            : "/assets/non-skilled-bg.jpg", // Background for non-skilled individuals
          textColor: "#f2f2f2",
          title: isSkilled ? "Join Our Skilled Team" : "Join Our Community",
          description: isSkilled
            ? "Use your skills to contribute to impactful projects and help the community."
            : "Support the community and make a difference in simple ways.",
          buttons: [
            {
              fill: true,
              text: isSkilled ? "Go to Google Form" : "Join WhatsApp Group",
              backgroundOrBorderColor: isSkilled ? "#18cad3" : "#60148c",
              textColor: "#f2f2f2",
              link: isSkilled
                ? "https://example.com/google-form" // Google Form link
                : "https://example.com/whatsapp-group", // WhatsApp group link
            },
          ],
          type: "center",
        }}
      />
    </>
  );
}
