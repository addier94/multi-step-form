import {
  TPickAddOns,
  useFormActions,
  useFormData,
} from "@/context/form-data-context";
import { Helper } from "@/helpers";
import { useEffect } from "react";

export const PickAddOns = () => {
  const {
    formData: { pickAddOns, plans },
  } = useFormData();

  const { setPickAddOns } = useFormActions();

  const toggleChecked = (name: string) => {
    const modifiedOns = pickAddOns.map((addon, index) => {
      const priceMonOrYr = plans.isMonthly ? 1 : 10;
      const priceMonOrYrForCustom = plans.isMonthly ? 2 : 20;

      let price = 0;
      // Check if the current add-on is the last one in the array
      if (pickAddOns.length - 1 === index) {
        price = priceMonOrYrForCustom;
      } else {
        price = priceMonOrYr;
      }

      return addon.name !== name
        ? addon
        : {
            ...addon,
            checked: !addon.checked,
            price: !addon.checked ? price : 0,
          };
    });
    setPickAddOns(modifiedOns);
  };

  const handleCheckboxChange = (name: string) => {
    toggleChecked(name);
  };

  useEffect(() => {
    const updatedAddOns = Helper.updateAddOns(plans.isMonthly, pickAddOns);

    setPickAddOns(updatedAddOns);
  }, []);

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
        Pick add-ons
      </h1>
      <p className="text-neutral-cool-gray">
        You have the option of monthly or yearly billing.
      </p>
      <article
        className="
        mt-2
        md:mt-6
        space-y-3
      "
      >
        {pickAddOns.map((addOn) => (
          <label
            key={addOn.name}
            className={`
            flex
            justify-between           
            items-center
            border-[1px]
            rounded-lg
            py-3
            px-4
            cursor-pointer
            duration-150
            hover:border-primary-marine-blue
            ${
              addOn.checked
                ? "bg-neutral-alabaster border-primary-marine-blue "
                : ""
            }
            `}
          >
            <div
              className="
              flex
              items-center
              gap-4
            "
            >
              <input
                type="checkbox"
                checked={addOn.checked}
                onChange={() => handleCheckboxChange(addOn.name)}
                className=" 
                  border-2 
                  border-blue-500 
                  checked:border-blue-500 
                  w-5 h-5 "
                id={`${addOn.name}-checkbox`}
              />
              <div>
                <h5 className="text-primary-marine-blue font-medium">
                  {addOn.name}
                </h5>
                <p className="text-neutral-cool-gray text-xs">
                  {addOn.description}
                </p>
              </div>
            </div>
            <span className="text-primary-purplish-blue text-xs">
              +${addOn.price}/{addOn.period}
            </span>
          </label>
        ))}
      </article>
    </main>
  );
};
