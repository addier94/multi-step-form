import { useFormActions, useFormData } from "@/context/form-data-context";
import { Helper } from "@/helpers";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const {
    formData: { stepsForm },
  } = useFormData();
  const { setStepsForm } = useFormActions();

  const activeStep = Helper.findIfAPropertyHasTrue(stepsForm);
  const ifStepsCompleted = activeStep.id === 4 && activeStep.guard;

  const cantGoBack = stepsForm[activeStep.id - 1].id !== 1;

  const activateNextStep = () => {
    const canGoNext = activeStep.id > 0 && activeStep.id < 4;
    if (canGoNext && activeStep.guard) {
      const deactivatedStep = { ...activeStep, isCurrentStep: false };
      const activateNextStep = {
        ...stepsForm[activeStep.id],
        isCurrentStep: true,
      };

      const updatedSteps = stepsForm
        .filter(
          (step) =>
            step.id !== deactivatedStep.id && step.id !== activateNextStep.id
        )
        .concat(deactivatedStep, activateNextStep)
        .sort((a, b) => a.id - b.id);

      setStepsForm(updatedSteps);
    } else {
      const lastStep = stepsForm[3];
      const newArr = [...stepsForm];

      if (lastStep.id === 4) {
        newArr[3] = { ...lastStep, guard: true };
        setStepsForm(newArr);
      }
    }
  };
  const goBack = () => {
    const deactivateCurrentStep = { ...activeStep, isCurrentStep: false };
    const activateBackStep = {
      ...stepsForm[activeStep.id - 2],
      isCurrentStep: true,
    };

    const updatedSteps = stepsForm
      .filter(
        (step) =>
          step.id !== deactivateCurrentStep.id &&
          step.id !== activateBackStep.id
      )
      .concat(deactivateCurrentStep, activateBackStep)
      .sort((a, b) => a.id - b.id);

    setStepsForm(updatedSteps);
  };
  return (
    <>
      {!ifStepsCompleted && (
        <footer
          className={`
        grid-cols-2
        gap-4
        bg-white
        px-4
        py-41
        ${className}`}
        >
          {cantGoBack && (
            <button
              onClick={goBack}
              className="
          text-neutral-cool-gray
          rounded-[.300rem]
          duration-100
          hover:text-primary-marine-blue
          col-start-1
          col-end-2
          row-start-1
          row-end-2
          place-self-start
          my-auto
          "
            >
              Go Back
            </button>
          )}
          <button
            className="
          text-neutral-white
          bg-primary-marine-blue
          px-4
          py-2
          rounded-[.300rem]
          row-start-1
          row-end-2
          col-start-2
          col-end-3
          place-self-end
        "
            onClick={activateNextStep}
          >
            Next Step
          </button>
        </footer>
      )}
    </>
  );
};
