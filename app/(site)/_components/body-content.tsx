import { PersonalInfo } from "./personal-info";
import { AsideWrapper } from "@/components/higher-order-ui/aside-wrapper";
import { ContentWrapper } from "@/components/higher-order-ui/content-wrapper";
import { SelectPlan } from "./select-plan";
import { PickAddOns } from "./pick-add-ons";
import { FinishingUp } from "./finishing-up";
import { ThankYou } from "./thank-you";
import { useFormData } from "@/context/form-data-context";
import { Aside } from "@/components/aside";
import { Helper } from "@/helpers";

interface BodyContentProps {
  className?: string;
}

export const BodyContent = ({ className }: BodyContentProps) => {
  const { formData } = useFormData();

  const activeStep = Helper.findIfAPropertyHasTrue(formData.stepsForm);

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
        {/* showed just in desktop screen*/}
        <Aside />
      </AsideWrapper>

      <ContentWrapper>
        {activeStep.id === 1 && <PersonalInfo />}
        {activeStep.id === 2 && <SelectPlan />}
        {activeStep.id === 3 && <PickAddOns />}
        {activeStep.id === 4 && !activeStep.guard && <FinishingUp />}
        {activeStep.id === 4 && activeStep.guard && <ThankYou />}
      </ContentWrapper>
    </article>
  );
};
