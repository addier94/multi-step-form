import {
  TPersonalInfo,
  TPickAddOns,
  TSelectedPlan,
  TStepsForm,
} from "./context/form-data-context";

interface ValidationRule {
  (value: string): { error: boolean; message: string };
}

type TChangePlan = {
  newArray: TSelectedPlan[];
  updatedSelectedPlan: TSelectedPlan;
};

export class Helper {
  static findIfAPropertyHasTrue(steps: TStepsForm[]) {
    return steps.find((step) => step.isCurrentStep)!;
  }

  static validationRules: Record<string, ValidationRule> = {
    name: (value: string) => ({
      error: value.trim().length < 3,
      message: "The field cannot be less than 3 characters",
    }),
    email: (value: string) => ({
      error: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: "Invalid email address",
    }),
    phone: (value: string) => ({
      error: value.length < 5 || isNaN(Number(value)),
      message: "The field must be a valid number",
    }),
  };

  static validateInputs(name: string, value: string) {
    const { error, message } = this.validationRules[name](value);
    return {
      [name]: error ? message : "",
    };
  }

  static isFormValid(personalInfo: TPersonalInfo): boolean {
    const { name, email, phone } = personalInfo;
    return (
      !this.validationRules["name"](name).error &&
      !this.validationRules["email"](email).error &&
      !this.validationRules["phone"](phone).error
    );
  }

  // Select plan
  static changeFields = (
    isMonthly: boolean,
    plansAvailable: TSelectedPlan[]
  ): TSelectedPlan[] => {
    return plansAvailable.map((plan) => ({
      ...plan,
      period: !isMonthly ? "yr" : "mo",
      price: !isMonthly ? plan.price * 10 : plan.price / 10,
    }));
  };

  static changePlanToMonthlyOrYearly(
    isMonthly: boolean,
    plansAvailable: TSelectedPlan[]
  ): TSelectedPlan[] {
    const isFirstPlanMonthly = plansAvailable[0].period === "mo";
    const isFirstPlanYearly = plansAvailable[0].period === "yr";

    if (
      (isMonthly && isFirstPlanMonthly) ||
      (!isMonthly && isFirstPlanYearly)
    ) {
      return plansAvailable;
    }

    const newPlan = this.changeFields(isMonthly, plansAvailable);
    return newPlan;
  }

  static getCurrentPlan(plans: TSelectedPlan[]): TSelectedPlan {
    return plans.find((plan) => plan.planSelected)!;
  }

  static changePlan = (
    selectedPlan: TSelectedPlan,
    plansAvailable: TSelectedPlan[]
  ): TChangePlan | undefined => {
    const oldPlan = this.getCurrentPlan(plansAvailable);
    const updatedOldPlan = { ...oldPlan, planSelected: false };

    if (updatedOldPlan.id === selectedPlan.id) return;

    const updatedSelectedPlan = { ...selectedPlan, planSelected: true };

    const remainedOne = plansAvailable.filter(
      (obj) => obj.id !== oldPlan.id && obj.id !== selectedPlan.id
    );

    const newArray = [...remainedOne, updatedOldPlan, updatedSelectedPlan];
    newArray.sort((a, b) => a.id - b.id);

    return { newArray, updatedSelectedPlan };
  };

  // pick add ons
  static updateAddOns(
    isMonthly: boolean,
    pickAddOns: TPickAddOns[]
  ): TPickAddOns[] {
    if (isMonthly && pickAddOns[0].period === "mo") {
      return pickAddOns;
    }
    if (!isMonthly && pickAddOns[0].period === "yr") {
      return pickAddOns;
    }

    const updatedAddOns: TPickAddOns[] = pickAddOns.map((addOn) => ({
      ...addOn,
      price: !isMonthly ? addOn.price * 10 : addOn.price / 10,
      period: !isMonthly ? "yr" : "mo",
    }));

    return updatedAddOns;
  }
}
