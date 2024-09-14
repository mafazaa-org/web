import Link from "next/link";
import React from "react";
import globalData from "@/app/globalData";
import Image from "next/image";

function FollowUs() {
  return (
    <section
      className="mx-4 md:mx-8 lg:mx-20 my-24 py-10 lg:py-20 relative bg-gradient-to-r from-dark-one to-dark-two
          text-bright-one text-center rounded-xl
          after:content-['']
          after:absolute
          after:left-1/4
          after:bottom-0
          after:w-1/2
          after:h-[0.5px]
          after:block
        after:bg-black"
    >
      <span className="absolute left-0 top-0 hidden lg:block w-fit">
        <svg
          width="360"
          height="270"
          viewBox="0 0 360 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M116.253 228.439C-5.36565 203.213 61.4815 24.1903 233.432 26.4677C292.544 27.2506 22.983 70.9728 116.253 228.439Z"
            stroke="#6C6C6C"
          />
          <path
            d="M142.533 231.007C20.914 205.781 87.7612 26.7584 259.712 29.0358C318.824 29.8187 49.2627 73.5409 142.533 231.007Z"
            stroke="#6C6C6C"
          />
          <path
            d="M167.03 240.978C45.4111 215.752 112.258 36.7294 284.209 39.0068C343.321 39.7897 73.7597 83.5118 167.03 240.978Z"
            stroke="#6C6C6C"
          />
        </svg>
      </span>
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
      <span className="absolute hidden lg:block right-0 bottom-0 w-fit">
        <svg
          width="372"
          height="285"
          viewBox="0 0 372 285"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M255.047 50.0587C375.052 80.4779 297.481 259.464 125.803 250.33C66.7851 247.191 338.765 213.525 255.047 50.0587Z"
            stroke="#6C6C6C"
          />
          <path
            d="M228.943 46.4103C348.947 76.8294 271.377 255.815 99.6989 246.682C40.681 243.542 312.661 209.877 228.943 46.4103Z"
            stroke="#6C6C6C"
          />
          <path
            d="M205.066 35.3217C325.07 65.7408 247.499 244.726 75.8213 235.593C16.8033 232.454 288.783 198.788 205.066 35.3217Z"
            stroke="#6C6C6C"
          />
        </svg>
      </span>
    </section>
  );
}

export default FollowUs;
