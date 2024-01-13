import { useState } from "react";

interface UseInputOptions {
  initialValues?: { [key: string]: string };
}

interface UseInputResult {
  value: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}
export const useInput = ({
  initialValues = {},
}: UseInputOptions): UseInputResult => {
  const [value, setValue] = useState<{ [key: string]: string }>(initialValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const reset = () => {
    setValue(initialValues);
  };

  return {
    value,
    onChange,
    reset,
  };
};

export default useInput;
