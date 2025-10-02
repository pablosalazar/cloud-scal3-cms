import { Stats } from "@/components/common/Stats";
import { SectionHeader } from "@/components/ui/section-header";
import { Plus } from "lucide-react";
import Image from "next/image";

export function BetterTogether() {
  return (
    <section className="bg-surface-2 py-[100px] text-center">
      <div className="container mx-auto">
        {/* Section Header */}
        <SectionHeader title="BETTER TOGETHER" className="justify-center" />

        <div className="flex items-center justify-center gap-10 mb-10">
          {/* AWS Logo */}

          <div className="flex items-center gap-4">
            <div className="w-[100px] h-[100px]">
              <div className="w-full h-full bg-black rounded-4xl flex items-center justify-center p-5">
                <Image
                  src="/finopscenter.svg"
                  alt="AWS"
                  width={80}
                  height={68}
                />
              </div>
            </div>
            <h4 className="font-medium">FinOps Center</h4>
          </div>

          {/* Connector */}
          <Plus size={40} className="opacity-60" />

          <div className="flex items-center gap-4">
            <div className="w-[100px] h-[100px]">
              <div className="w-full h-full bg-black rounded-4xl flex items-center justify-center p-5">
                <Image src="/agentbill.svg" alt="AWS" width={80} height={68} />
              </div>
            </div>
            <h4 className="font-medium">Agent Bill</h4>
          </div>
        </div>

        {/* Description */}
        <p className="text-2xl text-white leading-[1.51] max-w-3xl mx-auto mb-20">
          FinOps Center gives teams visibility and control. Agent Bill turns
          insights into action. Together, they simplify cloud financial
          management across the business—without adding complexity
        </p>

        <Stats />
      </div>
    </section>
  );
}
