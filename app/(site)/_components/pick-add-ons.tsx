import { useState } from "react";

interface PickAddOnsType {
  name: string;
  description: string;
  price: string;
  checked: boolean;
}
const pickAddOns: PickAddOnsType[] = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    price: "1",
    checked: true,
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: "2",
    checked: true,
  },
  {
    name: "Customizable profile",
    description: "Custom there on your profile",
    price: "2",
    checked: false,
  },
];
export const PickAddOns = () => {
  const [pickAddOnsData, setPickAddOnsData] =
    useState<PickAddOnsType[]>(pickAddOns);

  const toggleChecked = (name: string) => {
    setPickAddOnsData((prev) =>
      prev.map((addOn) =>
        addOn.name === name ? { ...addOn, checked: !addOn.checked } : addOn
      )
    );
  };

  const handleCheckboxChange = (name: string) => {
    toggleChecked(name);
  };

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
        {pickAddOnsData.map((addOn) => (
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
            <span className="text-primary-purplish-blue text-xs">+$1/mo</span>
          </label>
        ))}
      </article>
    </main>
  );
};
