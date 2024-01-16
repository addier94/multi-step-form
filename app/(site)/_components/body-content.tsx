import { PersonalInfo } from "./personal-info";
import { AsideWrapper } from "@/components/higher-order-ui/aside-wrapper";
import { ContentWrapper } from "@/components/higher-order-ui/content-wrapper";
import { stepForms } from "@/data";
import { useState } from "react";
import { SelectPlan } from "./select-plan";
import { PickAddOns } from "./pick-add-ons";
import { FinishingUp } from "./finishing-up";
import { ThankYou } from "./thank-you";

interface BodyContentProps {
  className?: string;
}

export const BodyContent = ({ className }: BodyContentProps) => {
  const [activeForm, setActiveForm] = useState(false);
  return (
    <article
      className={`
        mx-5
        bg-neutral-white
        shadow-xl
        rounded-xl
        self-start
        md:self-center
        md:flex
        md:max-w-screen-md
        md:mx-auto
        md:p-3
        md:h-[30rem]
        ${className}`}
    >
      <AsideWrapper>
        <section
          className="
            flex
            flex-col
            gap-5
            text-neutral-white
          "
        >
          {stepForms.map((stepForm) => (
            <article
              key={stepForm.id}
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className={`
                  w-7
                  h-7
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border-[1px]
                  ${activeForm ? "text-black bg-primary-light-blue" : ""}
                  `}
              >
                {stepForm.id}
              </div>
              <div
                className="
                  text-xs
                  font-medium
                "
              >
                <h3
                  className="
                  text-primary-pastel-blue 
                  font-medium
                "
                >
                  STEP {stepForm.id}
                </h3>
                <p
                  className="
                  text-sm
                "
                >
                  {stepForm.title}
                </p>
              </div>
            </article>
          ))}
        </section>
      </AsideWrapper>

      <ContentWrapper>
        <PersonalInfo />
        {/* <SelectPlan /> */}
        {/* <PickAddOns /> */}
        {/* <FinishingUp /> */}
        {/* <ThankYou /> */}
      </ContentWrapper>
    </article>
  );
};
