interface StepForm {
  id: number;
  title: string;
  description: string;
}
export const stepForms: StepForm[] = [
  {
    id: 1,
    title: "YOUR INFO",
    description: "Personal Information",
  },
  {
    id: 2,
    title: "SELECT PLAN",
    description: "Choose your plan",
  },
  {
    id: 3,
    title: "ADD-ONS",
    description: "Add some goodies",
  },
  {
    id: 4,
    title: "SUMMARY",
    description: "Review and Submit",
  },
];
