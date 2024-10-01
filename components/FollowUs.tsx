import Link from "next/link";
import React from "react";
import globalData from "@/app/globalData";
import Image from "next/image";
import group1 from "@/assets/Group 1.svg";
import group2 from "@/assets/Group 2.svg";
function FollowUs() {
  return (
    <section
      className="bg-gradient-to-r from-dark-one to-dark-two text-bright-one text-center rounded-xl
          mx-4 md:mx-8 lg:mx-32 my-16 py-10 relative 
          after:content-['']
          after:absolute
          after:left-1/4
          after:-bottom-10
          lg:after:-bottom-20
          after:w-1/2
          after:h-[0.5px]
          after:block
        after:bg-black"
    >
      <Image
        src={group1}
        alt="icon"
        width={325}
        height={240}
        className="absolute hidden md:block left-0 top-0 w-fit md:h-full"
      />
      <h1 className="mb-6 text-2xl lg:text-5xl font-bold">
        لا تدع المهم يفوتك!
      </h1>

      <p className="mb-16 text-base lg:text-2xl font-medium">
        تابعنا على صفحاتنا لتصلك مشاريعنا و منتجاتنا الجديدة بإذن الله
      </p>
      <ul className="mx-auto flex flex-row-reverse items-center justify-center gap-6 lg:gap-16">
        {globalData.socialLinks.map((social, index) => (
          <li key={index}>
            <Link href={social.href} target="_blank">
              <Image
                src={social.src}
                alt={social.alt}
                width={40}
                height={40}
                className="w-6 lg:w-10"
              />
            </Link>
          </li>
        ))}
      </ul>
      <Image
        src={group2}
        alt="icon"
        width={325}
        height={240}
        className="absolute hidden md:block right-0 bottom-0 w-fit md:h-full"
      />
    </section>
  );
}

export default FollowUs;
