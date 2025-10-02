import { SectionHeader } from "@/components/ui/section-header";
import { AgenticArchitecture } from "./AgenticArchitecture";

export const Process = () => {
  return (
    <section className="bg-app pt-20 px-26 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <SectionHeader title="our process" className="justify-center" />

        {/* Content */}
        <div>
          <h2 className="text-5xl font-bold leading-[1.2] tracking-[-1.091px] mb-8 text-white">
            Agentic Application Architecture
          </h2>
          <p className="text-xl text-white/60 leading-[1.6] max-w-3xl mx-auto">
            To fully leverage the power of Agentic Applications we need to move
            away from deterministic business logic leveraging Amazon Bedrock
            Core foundational services.
          </p>
        </div>
      </div>
      <AgenticArchitecture />
    </section>
  );
};
