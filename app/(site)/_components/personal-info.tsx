import { useFormActions, useFormData } from "@/context/form-data-context";
import React from "react";

interface PersonalInfoProps {
  className?: string;
}

export const PersonalInfo = ({ className }: PersonalInfoProps) => {
  const { formData } = useFormData();
  const { setPersonalInfo } = useFormActions();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPersonalInfo({ ...formData.personalInfo, [name]: value });
  };

  return (
    <>
      <h1 className="text-3xl text-primary-marine-blue font-bold">
        Personal Info
      </h1>
      <p className="text-neutral-cool-gray">
        Please provide your name, email address, and phone number.
      </p>
      <section className="flex flex-col gap-3">
        <div>
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border-[1px] border-neutral-light-gray rounded-[.300rem] py-[0.60rem] px-4 w-full"
            placeholder="e.g. Stephen King"
            name="name"
            value={formData.personalInfo.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="border-[1px] border-neutral-light-gray rounded-[.300rem] py-[0.60rem] px-4 w-full"
            placeholder="e.g. stephenking@lorem.com"
            name="email"
            value={formData.personalInfo.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="border-[1px] border-neutral-light-gray rounded-[.300rem] py-[0.60rem] px-4 w-full"
            placeholder="e.g. +1 234 567 890"
            name="phone"
            value={formData.personalInfo.phone}
            onChange={handleInputChange}
          />
        </div>
      </section>
    </>
  );
};
