"use client";

import { useState } from "react";
import { pricingPlans } from "./constants";
import { PricingCard } from "./PricingCard";

const billingCycles = ["monthly", "yearly"];

export function Pricing() {
  const [selectedCycle, setSelectedCycle] = useState("yearly");

  return (
    <section className="my-10">
      <div className="max-w-6xl mx-auto">
        {/* Billing Cycle Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-surface-2 rounded-lg p-1 flex">
            {billingCycles.map((cycle) => (
              <button
                key={cycle}
                onClick={() => setSelectedCycle(cycle)}
                className={`px-6 py-2 rounded-md font-semibold transition-all capitalize text-[#2d2f31] cursor-pointer ${
                  selectedCycle === cycle
                    ? "bg-green shadow-sm"
                    : "bg-app text-white/60 hover:text-white"
                }`}
              >
                {cycle}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex gap-10 justify-between">
          {pricingPlans.map((pricingPlan, index) => {
            let plan = pricingPlan.plans.find(
              (plan) => plan.period === selectedCycle
            );

            if (!plan) {
              plan = pricingPlan.plans.find((plan) => plan.period === "hourly");
            }

            if (!plan) {
              return null;
            }

            return (
              <PricingCard
                key={index}
                title={pricingPlan.title}
                subtitle={pricingPlan.subtitle}
                plan={plan}
                buttonText={pricingPlan.buttonText}
                estimate={pricingPlan.estimate}
                features={pricingPlan.features}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
