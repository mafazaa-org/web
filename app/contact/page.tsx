import { Form } from "mafazaa-react-ui";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "مفازا - تواصل معنا",
};

function ContactPage() {
  return (
    <div dir="rtl" className=" h-full w-full  mt-24">
      <Form />
    </div>
  );
}

export default ContactPage;
