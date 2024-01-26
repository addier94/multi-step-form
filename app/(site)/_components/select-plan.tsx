import {
  TSelectedPlan,
  useFormActions,
  useFormData,
} from "@/context/form-data-context";
import { Helper } from "@/helpers";
import Image from "next/image";
import { useEffect } from "react";

export const SelectPlan = () => {
  const {
    formData: { plans, plansAvailable },
  } = useFormData();

  const { setPlans, setPlansAvailable } = useFormActions();

  const changePlan = (selected: TSelectedPlan) => {
    const changed = Helper.changePlan(selected, plansAvailable);

    if (!changed) return;

    setPlansAvailable(changed.newArray);
    setPlans({ ...plans, selectedPlan: changed.updatedSelectedPlan });
  };

  useEffect(() => {
    const newPlan = Helper.changePlanToMonthlyOrYearly(
      plans.isMonthly,
      plansAvailable
    );
    setPlansAvailable(newPlan);

    setPlans({ ...plans, selectedPlan: Helper.getCurrentPlan(newPlan) });
  }, [plans.isMonthly]);

  return (
    <main
      className="
      flex
      flex-col
      gap-3
      md:gap-0
    "
    >
      <h1 className="text-2xl text-primary-marine-blue font-bold">
        Select your plan
      </h1>
      <p className="text-neutral-cool-gray">
        You have the option of monthly or yearly billing.
      </p>
      <article
        className="
        space-y-2
        md:space-y-0
        md:flex
        md:flex-auto
        md:gap-3
        md:mt-6
      "
      >
        {plansAvailable.map((option) => (
          <section
            key={option.name}
            onClick={() => changePlan(option)}
            className={`
              flex
              items-start
              md:flex-1
              md:flex-col
              md:items-start
              md:gap-6
              md:p-3
              gap-3
              border-[1px]
              border-neutral-light-gray
              rounded-md
              px-4
              py-[.96rem]
              cursor-pointer
              transition-all
              duration-150
              hover:border-primary-marine-blue
              ${
                option.planSelected
                  ? "border-primary-marine-blue bg-neutral-alabaster"
                  : ""
              }
            `}
          >
            <figure
              className="
                md:w-8
                md:h-8
                w-10 
                h-10"
            >
              <Image
                src={option.icon}
                width={0}
                height={0}
                alt={`Illustration of ${option.name}`}
                className="w-full"
              />
            </figure>
            <div className="text-base">
              <h3
                className={`
                  font-medium
                  text-primary-marine-blue
                `}
              >
                {option.name}
              </h3>
              <p
                className={`
                      text-sm
                      text-neutral-cool-gray
                `}
              >
                ${option.price}/{option.period}
              </p>
              {option.period === "yr" && (
                <p className="text-xs text-primary-marine-blue">
                  2 months free
                </p>
              )}
            </div>
          </section>
        ))}
      </article>
      <footer
        className="
          flex
          items-center
          justify-center
          gap-3
          mt-3
          h-12
          rounded-md
          text-neutral-cool-gray
          bg-neutral-alabaster
          text-sm
        "
      >
        <span
          className={`${plans.isMonthly ? "text-primary-marine-blue" : ""}`}
        >
          Monthly
        </span>
        <span
          className="
            flex
            items-center
            justify-center
            w-10
            h-[1.33rem]
            bg-primary-marine-blue
            rounded-full
          "
        >
          <input
            type="range"
            id="myRange"
            name="myRange"
            min="0"
            max="1"
            value={plans.isMonthly ? 0 : 1}
            onChange={() => setPlans({ ...plans, isMonthly: !plans.isMonthly })}
            className="custom-range w-8 bg-primary-marine-blue appearance-none rounded-md"
          />
        </span>
        <span
          className={`${plans.isMonthly ? "" : "text-primary-marine-blue"}`}
        >
          Yearly
        </span>
      </footer>
    </main>
  );
};
