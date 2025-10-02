import { Stats } from "@/components/common/Stats";
import { SectionHeader } from "@/components/ui/section-header";
import { Plus } from "lucide-react";
import Image from "next/image";

export function BetterTogether() {
  return (
    <section className="bg-surface-2 py-20 text-center">
      <div className="container mx-auto">
        {/* Section Header */}
        <SectionHeader title="BETTER TOGETHER" className="justify-center" />

        <div className="flex items-center justify-center gap-10 mb-10">
          {/* AWS Logo */}

          <div className="w-[100px] h-[100px]">
            <div className="w-full h-full bg-black rounded-4xl flex items-center justify-center p-5">
              <Image src="/aws-logo.svg" alt="AWS" width={80} height={68} />
            </div>
          </div>

          {/* Connector */}
          <Plus size={40} className="opacity-60" />

          <div className="w-[100px] h-[100px]">
            <div className="w-full h-full bg-black rounded-4xl flex items-center justify-center p-5">
              <Image src="/logo.svg" alt="AWS" width={80} height={68} />
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-2xl text-white leading-[1.51] max-w-[866px] mx-auto mb-20"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Cloud Scal3 products run 100% on AWS Native Services and are Deployed
          with CloudFormation via the AWS Marketplace
        </p>

        <Stats />
      </div>
    </section>
  );
}
