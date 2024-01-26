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

export interface TPlans {
  isMonthly: boolean;
  selectedPlan: TSelectedPlan;
}

export interface TSelectedPlan {
  id: number;
  name: string;
  icon: string;
  price: number;
  period: "mo" | "yr";
  planSelected: boolean;
}

export interface TPickAddOns {
  name: string;
  description: string;
  price: number;
  period: "mo" | "yr";
  checked: boolean;
}

export interface TFinishingUp {
  arcade: string;
  onlineService: string;
  largerStorage: string;
  TotalPerMonth: string;
}

export interface TStepsForm {
  id: number;
  title: string;
  description: string;
  guard: boolean;
  isCurrentStep: boolean;
}

export interface FormDataType {
  personalInfo: TPersonalInfo;
  plans: TPlans;
  plansAvailable: TSelectedPlan[];
  pickAddOns: TPickAddOns[];
  finishingUp: TFinishingUp;
  stepsForm: TStepsForm[];
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
    plans: {
      isMonthly: true,
      selectedPlan: {
        id: 1,
        name: "Arcade",
        icon: "/assets/images/icon-arcade.svg",
        price: 9,
        period: "mo",
        planSelected: true,
      },
    },
    plansAvailable: [
      {
        id: 1,
        name: "Arcade",
        icon: "/assets/images/icon-arcade.svg",
        price: 9,
        period: "mo",
        planSelected: true,
      },
      {
        id: 2,
        name: "Advanced",
        icon: "/assets/images/icon-advanced.svg",
        price: 12,
        period: "mo",
        planSelected: false,
      },
      {
        id: 3,
        name: "Pro",
        icon: "/assets/images/icon-pro.svg",
        price: 15,
        period: "mo",
        planSelected: false,
      },
    ],
    pickAddOns: [
      {
        name: "Online service",
        description: "Access to multiplayer games",
        price: 0,
        period: "mo",
        checked: false,
      },
      {
        name: "Larger storage",
        description: "Extra 1TB of cloud save",
        price: 0,
        period: "mo",
        checked: false,
      },
      {
        name: "Customizable profile",
        description: "Custom there on your profile",
        price: 0,
        period: "mo",
        checked: false,
      },
    ],
    finishingUp: {
      arcade: "",
      onlineService: "",
      largerStorage: "",
      TotalPerMonth: "",
    },
    stepsForm: [
      {
        id: 1,
        title: "YOUR INFO",
        description: "Personal Information",
        guard: false,
        isCurrentStep: true,
      },
      {
        id: 2,
        title: "SELECT PLAN",
        description: "Choose your plan",
        guard: true,
        isCurrentStep: false,
      },
      {
        id: 3,
        title: "ADD-ONS",
        description: "Add some goodies",
        guard: true,
        isCurrentStep: false,
      },
      {
        id: 4,
        title: "SUMMARY",
        description: "Review and Submit",
        guard: false,
        isCurrentStep: false,
      },
    ],
  };

  const formReducer = (state: FormDataType, action: Action): FormDataType => {
    switch (action.type) {
      case "SET_PERSONAL_INFO":
        return { ...state, personalInfo: action.payload };
      case "SET_SELECTED_PLAN":
        return { ...state, plans: action.payload };
      case "SET_PLANS_AVAILABLE":
        return { ...state, plansAvailable: action.payload };
      case "SET_PICK_ADD_ONS":
        return { ...state, pickAddOns: action.payload };
      case "SET_FINISHING_UP":
        return { ...state, finishingUp: action.payload };
      case "SET_STEPS_FORM":
        return { ...state, stepsForm: action.payload };
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

  const setStepsForm = useCallback(
    (stepsForm: TStepsForm[]) => {
      dispatch({ type: "SET_STEPS_FORM", payload: stepsForm });
    },
    [dispatch]
  );

  const setPlans = useCallback(
    (plan: TPlans) => {
      dispatch({ type: "SET_SELECTED_PLAN", payload: plan });
    },
    [dispatch]
  );

  const setPlansAvailable = useCallback(
    (plans: TSelectedPlan[]) => {
      dispatch({ type: "SET_PLANS_AVAILABLE", payload: plans });
    },
    [dispatch]
  );

  const setPickAddOns = useCallback(
    (addOn: TPickAddOns[]) => {
      dispatch({ type: "SET_PICK_ADD_ONS", payload: addOn });
    },
    [dispatch]
  );

  return {
    setPersonalInfo,
    setStepsForm,
    setPlans,
    setPlansAvailable,
    setPickAddOns,
  };
};
