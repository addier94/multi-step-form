import { useFormData } from "@/context/form-data-context";
import React from "react";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const { formData } = useFormData();

  return (
    <footer
      className={`
        flex
        justify-between
        items-center
        bg-white
        px-4
        py-4
        ${className}`}
    >
      <button
        className="
          text-neutral-cool-gray
          px-4
          rounded-[.300rem]
          duration-100
          hover:text-primary-marine-blue
        "
      >
        Go Back
      </button>
      <button
        className="
          text-neutral-white
          bg-primary-marine-blue
          px-4
          py-2
          rounded-[.300rem]
        "
      >
        Next Step
      </button>
    </footer>
  );
};
