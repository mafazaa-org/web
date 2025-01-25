"use client";
import Head from "next/head";
import { CenterSection } from "mafazaa-react-ui";
import { useSearchParams } from "next/navigation";
import skilledImg from "@/assets/skilled.jpg";
import nonskilledImg from "@/assets/top-view-islamic-new-year-concept.jpg";
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
            ? skilledImg // Background for skilled individuals
            : nonskilledImg, // Background for non-skilled individuals
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
