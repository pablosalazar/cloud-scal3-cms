import { SectionHeader } from "@/components/ui/section-header";
import {
  Shield,
  BarChart3,
  BarChart3 as BarChart,
  CircleDashed,
} from "lucide-react";

const features = [
  {
    icon: CircleDashed,
    title: "Savings Automation",
    description: "Identify and approve cost-saving actions with minimal effort",
  },
  {
    icon: Shield,
    title: "Buying Automation",
    description:
      "Execute purchases like Savings Plans—without logging into the AWS Console",
  },
  {
    icon: BarChart3,
    title: "ITSM Task Integration",
    description:
      "Reduce reliance on engineering tickets by letting Agent Bill handle routine CFM actions",
  },
  {
    icon: BarChart,
    title: "Program Management",
    description: "Streamline AWS MAP credit tracking, approvals, and reporting",
  },
];

export function WhatAgentBillDoes() {
  return (
    <section className="py-[20px]">
      <div className="container mx-auto">
        <div className="card-featured">
          <SectionHeader
            title="WHAT AGENT BILL DOES"
            className="justify-center"
          />

          <h2 className="text-5xl font-bold tracking-[-1.09px] mb-6 text-center">
            Turn Complexity into Action. Fast.
          </h2>

          <p className="text-lg text-black/60 leading-[1.56] max-w-4xl mx-auto text-center mb-6">
            Agent Bill is built to automate the most time-consuming, manual
            tasks of AWS Cloud Financial Management. Whether it&apos;s handling
            approvals, surfacing cost-saving recommendations, or executing
            buying decisions—Agent Bill works quietly in the background to
            support your team&apos;s FinOps workflows.
          </p>

          <div className="grid grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center rounded-4xl px-8">
                <div className="bg-white p-3 w-fit rounded-2xl mb-6 mx-auto">
                  <feature.icon size={28} />
                </div>

                <h3 className="text-xl font-bold leading-tight mb-2">
                  {feature.title}
                </h3>

                <p className="text-black/60 leading-[1.5]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
