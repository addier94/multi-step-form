import { useFormData } from "@/context/form-data-context";

export const Aside = () => {
  const {
    formData: { stepsForm },
  } = useFormData();
  return (
    <section
      className="
            flex
            flex-col
            gap-5
            text-neutral-white
          "
    >
      {stepsForm.map((stepForm) => (
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
                  ${
                    stepForm.isCurrentStep
                      ? "text-black bg-primary-light-blue"
                      : ""
                  }
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
  );
};
