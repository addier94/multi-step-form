import { useFormActions, useFormData } from "@/context/form-data-context";
import { Helper } from "@/helpers";
import React, { useEffect, useState } from "react";

export const PersonalInfo = () => {
  const { formData } = useFormData();
  const { setPersonalInfo, setStepsForm } = useFormActions();

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPersonalInfo({ ...formData.personalInfo, [name]: value });

    const updatedErrors = Helper.validateInputs(name, value);

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      ...updatedErrors,
    }));
  };

  useEffect(() => {
    const updateStepsFom = () => {
      const isFormValid = Helper.isFormValid(formData.personalInfo);
      const newGuardValue = isFormValid ? true : false;

      if (formData.stepsForm[0].guard !== newGuardValue) {
        setStepsForm([
          {
            ...formData.stepsForm[0],
            guard: newGuardValue,
          },
          ...formData.stepsForm.slice(1),
        ]);
      }
    };
    updateStepsFom();
  }, [formData, setStepsForm]);
  return (
    <main
      className="
      flex
      flex-col
      gap-3
    "
    >
      <h1 className="text-2xl text-primary-marine-blue font-bold">
        Personal Info
      </h1>
      <p className="text-neutral-cool-gray text-sm">
        Please provide your name, email address, and phone number.
      </p>
      <article>
        <section className="flex flex-col gap-3">
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="
              text-sm
              flex
              justify-between
              "
            >
              <span>Name</span>
              {validationErrors.name && (
                <span className="text-primary-strawberry-red font-medium">
                  {validationErrors.name}
                </span>
              )}
            </label>
            <input
              type="text"
              id="name"
              className={`
                border-[1px] 
                border-neutral-light-gray 
                rounded-[.300rem] 
                py-[0.60rem] 
                px-4 
                ${validationErrors.name ? "border-primary-strawberry-red" : ""}
                w-full`}
              placeholder="e.g. Stephen King"
              name="name"
              value={formData.personalInfo.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="
              text-sm
              flex 
              justify-between
              "
            >
              <span>Email Address</span>
              {validationErrors.email && (
                <span className="text-primary-strawberry-red font-medium">
                  {validationErrors.email}
                </span>
              )}
            </label>
            <input
              type="email"
              id="email"
              className={`
                border-[1px] 
                border-neutral-light-gray 
                rounded-[.300rem] 
                py-[0.60rem] 
                px-4 
                ${validationErrors.email ? "border-primary-strawberry-red" : ""}
                w-full`}
              placeholder="e.g. stephenking@lorem.com"
              name="email"
              value={formData.personalInfo.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="phone"
              className="
              text-sm
              flex
              justify-between
              "
            >
              <span>Phone Number</span>
              {validationErrors.phone && (
                <span className="text-primary-strawberry-red font-medium">
                  {validationErrors.phone}
                </span>
              )}
            </label>
            <input
              type="text"
              id="phone"
              className={`
                border-[1px] 
                border-neutral-light-gray 
                rounded-[.300rem] 
                py-[0.60rem] 
                px-4 
                ${validationErrors.phone ? "border-primary-strawberry-red" : ""}
                w-full`}
              placeholder="e.g. +1 234 567 890"
              name="phone"
              value={formData.personalInfo.phone}
              onChange={handleInputChange}
            />
          </div>
        </section>
      </article>
    </main>
  );
};
