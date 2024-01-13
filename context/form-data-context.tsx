import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
  useCallback,
} from "react";

export interface TPersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export interface TSelectYourPlan {
  arcade: string;
  advanced: string;
  pro: string;
}

export interface TPickAddOns {
  onlineService: string;
  largerStorage: string;
  customizableProfile: string;
}

export interface TFinishingUp {
  arcade: string;
  onlineService: string;
  largerStorage: string;
  TotalPerMonth: string;
}

export interface FormDataType {
  personalInfo: TPersonalInfo;
  selectYourPlan: TSelectYourPlan;
  pickAddOns: TPickAddOns;
  finishingUp: TFinishingUp;
}

interface Action {
  type: string;
  payload: any;
}

interface FormDataContextType {
  formData: FormDataType;
  dispatch: Dispatch<Action>;
}

const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const initialState: FormDataType = {
    personalInfo: { name: "", email: "", phone: "" },
    selectYourPlan: { arcade: "", advanced: "", pro: "" },
    pickAddOns: {
      onlineService: "",
      largerStorage: "",
      customizableProfile: "",
    },
    finishingUp: {
      arcade: "",
      onlineService: "",
      largerStorage: "",
      TotalPerMonth: "",
    },
  };

  const formReducer = (state: FormDataType, action: Action): FormDataType => {
    switch (action.type) {
      case "SET_PERSONAL_INFO":
        return { ...state, personalInfo: action.payload };
      case "SET_SELECT_YOUR_PLAN":
        return { ...state, selectYourPlan: action.payload };
      case "SET_PICK_ADD_ONS":
        return { ...state, pickAddOns: action.payload };
      case "SET_FINISHING_UP":
        return { ...state, finishingUp: action.payload };
      default:
        return state;
    }
  };

  const [formData, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormDataContext.Provider value={{ formData, dispatch }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};

export const useFormActions = () => {
  const { dispatch } = useFormData();

  const setPersonalInfo = useCallback(
    (values: { [key: string]: string }) => {
      dispatch({ type: "SET_PERSONAL_INFO", payload: values });
    },
    [dispatch]
  );

  // Add other form actions as needed

  return { setPersonalInfo };
};
