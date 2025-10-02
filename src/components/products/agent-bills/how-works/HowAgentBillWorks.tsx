"use client";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { WorksTabs } from "./WorksTabs";
import { WorksContent } from "./WorksContent";
import { worksTabs, worksData } from "./constants";

export function HowAgentBillWorks() {
  const [activeTab, setActiveTab] = useState(worksTabs[0].id);

  const currentWorksData = worksData[activeTab as keyof typeof worksData];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="mb-6">
          <SectionHeader title="HOW AGENT BILL WORKS" className="opacity-60" />

          <h2 className="font-bold text-3xl tracking-[-1.0906px] mb-5">
            Embedded Intelligence, Integrated Action
          </h2>

          <p className="text-xl text-white/60 leading-[1.56]">
            Agent Bill is built to automate the most time-consuming, manual
            tasks of AWS Cloud Financial Management. Initially is providings
            Embedding Q&A and with Amazon Q in QuickSight to enable to users to
            ask any question about their AWS Spending. Soon it will include
            handling approvals, surfacing cost-saving recommendations, or
            executing buying decisions with Amazon Bedrock AgentCore—Agent Bill
            works quietly in the background to support your team&apos;s FinOps
            workflows.
          </p>
        </div>

        {/* Tabbed Interface */}
        <div className="">
          <WorksTabs
            tabs={worksTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <WorksContent worksData={currentWorksData} />
        </div>
      </div>
    </section>
  );
}
