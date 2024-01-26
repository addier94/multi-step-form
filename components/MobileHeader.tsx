import { useFormData } from "@/context/form-data-context";

interface MobileHeaderProps {
  className?: string;
}

export const MobileHeader = ({ className }: MobileHeaderProps) => {
  const {
    formData: { stepsForm },
  } = useFormData();

  return (
    <header
      style={{ backgroundImage: "url(/assets/images/bg-sidebar-mobile.svg)" }}
      className={`
        h-40
        bg-no-repeat
        bg-cover
        ${className}
        `}
    >
      <ul
        className={`
        flex 
        justify-center 
        text-white
        p-8 
        gap-5`}
      >
        {stepsForm.map((stepForm) => (
          <li
            key={stepForm.id}
            className={`
              w-9
              h-9
              flex
              items-center
              justify-center
              rounded-full
              border-[1px]
              ${
                stepForm.isCurrentStep ? "bg-primary-light-blue text-black" : ""
              }
            `}
          >
            {stepForm.id}
          </li>
        ))}
      </ul>
    </header>
  );
};
