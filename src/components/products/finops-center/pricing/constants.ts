export type Plan = {
  amount: string;
  period: "hourly" | "monthly" | "yearly";
  label: string;
};

export type Feature = { text: string };

export type PricingPlan = {
  title: string;
  subtitle: string;
  plans: Plan[];
  buttonText: string;
  estimate: string;
  features: Feature[];
};

export const pricingPlans: PricingPlan[] = [
  {
    title: "FinOps In-a-Box (hourly)",
    subtitle: "Pay-as-you-go flexibility",
    plans: [{ amount: "$0.99", period: "hourly", label: "/hr" }],
    buttonText: "Try for Free",
    estimate: "Est. $83 per Installation and Updates",
    features: [{ text: "Full Features" }, { text: "10 Accounts" }],
  },
  {
    title: "FinOps In-a-Box",
    subtitle: "A cost-effective annual plan",
    plans: [
      { amount: "$500", period: "monthly", label: "/mo" },
      { amount: "$5k", period: "yearly", label: "/yr" },
    ],
    buttonText: "Buy Now",
    estimate: "Marketplace Special Offer",
    features: [{ text: "Full Features" }, { text: "25 Accounts" }],
  },
  {
    title: "Enterprise",
    subtitle: "Comprehensive enterprise solution",
    plans: [
      { amount: "$3K", period: "monthly", label: "/mo" },
      { amount: "$30k", period: "yearly", label: "/yr" },
    ],
    buttonText: "Buy Now",
    estimate: "Recommended",
    features: [{ text: "Full Features" }, { text: "Unlimited Accounts" }],
  },
];
