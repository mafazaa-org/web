import { Button } from "mafazaa-react-ui";
import Head from "next/head";

export default function page() {
  return (
    <>
      <Head>
        <title>Join Us</title>
        <meta
          name="description"
          content="Join our community and connect with us!"
        />
      </Head>
      <div className="flex items-center justify-center  bg-bright-one ">
        <div className="bg-white rounded-lg shadow-lg p-24  w-full text-center">
          <h1 className="text-3xl font-bold text-dark-one mb-6">
            Join Our Community
          </h1>
          <p className="text-dark-two mb-6">
            Become a part of our community and stay connected. Choose one of the
            options below:
          </p>
          <div className="flex justify-center items-center gap-6">
            <Button
              backgroundOrBorderColor="#0d309e"
              text="Join WhatsApp Group"
              textColor="#212121"
              type="outline"
              link=""
            ></Button>

            <Button
              backgroundOrBorderColor="#60148c"
              text="Fill the Form"
              textColor="#212121"
              type="outline"
              link=""
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
