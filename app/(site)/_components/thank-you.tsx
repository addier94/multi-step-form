import Image from "next/image";
import React from "react";

export const ThankYou = () => {
  return (
    <main
      className="
        flex
        flex-col
        gap-3
        md:gap-1
        pt-12
        pb-10
      "
    >
      <header
        className="
          flex
          justify-center
          flex-col
          items-center
        "
      >
        <figure className="w-16 h-16">
          <Image
            src="/assets/images/icon-thank-you.svg"
            width={0}
            height={0}
            alt="Thank you"
            className="w-full"
          />
        </figure>
        <h3 className="text-2xl mt-5 font-bold text-primary-marine-blue">
          Thank you!
        </h3>
      </header>
      <p className="text-neutral-cool-gray text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </main>
  );
};
