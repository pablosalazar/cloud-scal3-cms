"use client";

import { WhatAgentBillDoes } from "@/components/products/agent-bills/WhatAgentBillDoes";
import { HowAgentBillWorks } from "@/components/products/agent-bills/how-works/HowAgentBillWorks";
import { WhyAgentBill } from "@/components/products/agent-bills/WhyAgentBill";
import { BetterTogether } from "@/components/products/agent-bills/BetterTogether";
import { CTA } from "@/components/common/CTA";
import { Hero } from "@/components/common/Hero";
import { Play } from "lucide-react";
import { Why } from "@/components/common/Why";
import { FAQ, FAQItem } from "@/components/common/FAQ";

const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "Amazon Q in QuickSight Q&A bar for Generative-BI",
    answer:
      "Amazon Q in QuickSight provides natural language querying capabilities for your business intelligence dashboards. This integration allows users to ask questions about their data in plain English and receive instant visualizations and insights, making data analysis more accessible to non-technical users.",
  },
  {
    id: "item-2",
    question:
      "Worker Agent connected to FinOps Center via Beckrock AgentCore Gateway",
    answer:
      "The Worker Agent is a specialized component that handles automated tasks and workflows within the FinOps Center. It connects through an Bedrock AgentCore Gateway Server, enabling secure communication and task execution for cost optimization, resource management, and automated FinOps operations.",
  },
];

export default function AgentBillsPage() {
  return (
    <main className="">
      <Hero
        logoSrc="/agentbill.svg"
        logoAlt="Agent Bill logo"
        brandName="Agent Bill"
        title="Agent Bill is your AWS CFM Agent"
        description="Working alongside FinOps Center, Agent Bill brings automation, intelligence, and simplicity to Cloud Financial Management—so your teams can do more, without navigating AWS complexity."
        cta={
          <div className="flex flex-col md:flex-row gap-5 md:items-center">
            <button className="btn btn--white btn-lg hover-white-raise">
              Schedule a Demo
            </button>
            <button className="btn btn--primary btn-lg hover-primary-raise">
              Buy Now
            </button>
            <button className="btn btn-lg btn--black hover-black-raise">
              <span>Intro Video</span>
              <Play size={16} />
            </button>
          </div>
        }
      />
      <Why
        title="Be your own Cloud Engineer"
        description="FinOps Center provides your CFM processes to drive business accountability and reduce costs. In the era of Agentic AI, Agent Bill provides the CFM Agent, which works with the FinOps Centre and other Finance and ITSM systems, to remove even more complexity and cost from managing your AWS environment."
      />
      <WhatAgentBillDoes />
      <HowAgentBillWorks />
      <FAQ
        title="Agent Bill further Simplifies AWS Cloud Financial Management"
        items={faqData}
      />
      <WhyAgentBill />
      <BetterTogether />
      <CTA />
    </main>
  );
}
