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
        justify-end
        bg-white
        p-4
        ${className}`}
    >
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
