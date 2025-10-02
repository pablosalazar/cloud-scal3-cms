import { SectionHeader } from "@/components/ui/section-header";
import { PersonaTabs } from "./PersonaTabs";
import { personaData, personaTabs } from "./constants";
import { useState } from "react";
import { PersonaContent } from "./PersonaContent";

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("financial-admins");

  const currentPersona = personaData[activeTab as keyof typeof personaData];

  return (
    <section className="bg-[#151515] pb-10">
      <div className="container mx-auto">
        <div className="card-featured">
          <div className="text-center mb-10 text-dark">
            <SectionHeader title="FEATURES" className="justify-center" />

            <h2 className="text-center font-bold text-4xl tracking-[-1.0906px] mb-5">
              FinOps Center Personas
            </h2>

            <p className="text-xl leading-[1.56]">
              FinOps Center provides easy to understand and navigate screens and
              integration for your various Team Role
            </p>
          </div>

          <PersonaTabs
            tabs={personaTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <PersonaContent persona={currentPersona} />
        </div>
      </div>
    </section>
  );
}
