import { useFormActions, useFormData } from "@/context/form-data-context";
import { Helper } from "@/helpers";
import { useEffect } from "react";

export const FinishingUp = () => {
  const {
    formData: { plans, pickAddOns, plansAvailable, stepsForm },
  } = useFormData();

  const { setPlans, setPlansAvailable, setPickAddOns } = useFormActions();

  const {
    selectedPlan: { name: planName, price: planPrice, period: planPeriod },
    isMonthly,
  } = plans;

  const { price: servicePrice } = pickAddOns[0];
  const { price: largeStoragePrice } = pickAddOns[1];
  const { price: customizablePrice } = pickAddOns[2];

  const total =
    planPrice + servicePrice + largeStoragePrice + customizablePrice;

  const changePlan = () => {
    setPlans({ ...plans, isMonthly: !plans.isMonthly });
  };

  useEffect(() => {
    const newPlan = Helper.changePlanToMonthlyOrYearly(
      plans.isMonthly,
      plansAvailable
    );
    setPlansAvailable(newPlan);

    const addOnsUpdated = Helper.updateAddOns(plans.isMonthly, pickAddOns);

    setPickAddOns(addOnsUpdated);
    setPlans({ ...plans, selectedPlan: Helper.getCurrentPlan(newPlan) });
  }, [plans.isMonthly]);

  return (
    <main
      className="
      flex
      flex-col
      gap-3
      md:gap-1
    "
    >
      <h1 className="text-2xl text-primary-marine-blue font-bold">
        Finishing up
      </h1>
      <p className="text-neutral-cool-gray">
        Double-check everything looks OK before confirming.
      </p>
      <article
        className="
        mt-2
        md:mt-6
        space-y-3
        text-primary-marine-blue
        text-sm
      "
      >
        <div>
          <div
            className="
            bg-neutral-alabaster
              p-4
              rounded-lg
            "
          >
            <section
              className="
              flex
              justify-between
              items-center
              border-b-[1px]
              pb-4
            "
            >
              <p
                className="
                flex
                flex-col
              "
              >
                <span className="font-medium ">
                  {planName} ({isMonthly ? "Monthly" : "Yearly"})
                </span>
                <button
                  onClick={() => changePlan()}
                  className="underline self-start text-neutral-cool-gray"
                >
                  Change
                </button>
              </p>
              <p className="font-medium">
                ${planPrice}/{planPeriod}
              </p>
            </section>
            <section
              className="
                flex
                justify-between
                items-center
              "
            >
              <p
                className="
                flex
                justify-between
                w-full
                mt-4
                "
              >
                <span className="text-neutral-cool-gray">Online service</span>
                <span>
                  +${servicePrice}/{planPeriod}
                </span>
              </p>
            </section>
            <section
              className="
                flex
                justify-between
                items-center
              "
            >
              <p
                className="
                flex
                justify-between
                w-full
                mt-4
                "
              >
                <span className="text-neutral-cool-gray">Larger storage</span>
                <span>
                  +${largeStoragePrice}/{planPeriod}
                </span>
              </p>
            </section>
            <section
              className="
                flex
                justify-between
                items-center
              "
            >
              <p
                className="
                flex
                justify-between
                w-full
                mt-4
                "
              >
                <span className="text-neutral-cool-gray">
                  Customizable Profile
                </span>
                <span>
                  +${customizablePrice}/{planPeriod}
                </span>
              </p>
            </section>
          </div>
          <section
            className="flex
              justify-between
              mt-8
              mx-4
              "
          >
            <p className="text-neutral-cool-gray">
              Total <span>(Per {isMonthly ? "month" : "year"})</span>
            </p>
            <p className="text-primary-purplish-blue font-bold">
              ${total}/{isMonthly ? "mo" : "yr"}
            </p>
          </section>
        </div>
      </article>
    </main>
  );
};
