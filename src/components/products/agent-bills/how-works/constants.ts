import { WorksTab, WorksDataRecord } from "./types";

export const worksTabs: WorksTab[] = [
  { id: "embedded-Q&A", label: "Embedded Q&A" },
];

export const worksData: WorksDataRecord = {
  "embedded-Q&A": {
    id: "embedded-Q&A",
    type: "text-image",
    title: "Simplifying CFM Spending Questions",
    description:
      "Leverage the power of Amazon Q in QuickSight that is seamlessly embedded in the FinOps Center Header to answer users AWS Spending questions.",
    features: [
      "Automated Deployment",
      "Currated Topic Per Role",
      "RLS per Role Dataset",
      "Customize to Customers Organizational Naming",
      "Seamlessly Add New Topics",
    ],
    image: "/cs3-dashboard.svg",
    alt: "Simplifying CFM Spending Questions",
  },
};
