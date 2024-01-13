import { useState } from "react";

interface MobileHeaderProps {
  className?: string;
}

export const MobileHeader = ({ className }: MobileHeaderProps) => {
  const [isActiveForm, setIsActiveForm] = useState<boolean>(true);

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
        <li
          className={`
            w-9
            h-9
            flex
            items-center
            justify-center
            rounded-full
            border-[1px]
            ${isActiveForm ? "bg-primary-light-blue text-black" : ""}
          `}
        >
          1
        </li>
        <li
          className="
            w-9
            h-9
            flex
            items-center
            justify-center
            rounded-full
            border-[1px]
          "
        >
          2
        </li>
        <li
          className="
            w-9
            h-9
            flex
            items-center
            justify-center
            rounded-full
            border-[1px]
          "
        >
          3
        </li>
        <li
          className="
            w-9
            h-9
            flex
            items-center
            justify-center
            rounded-full
            border-[1px]
          "
        >
          4
        </li>
      </ul>
    </header>
  );
};
