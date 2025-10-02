import { SectionHeader } from "@/components/ui/section-header";
import { Cpu } from "lucide-react";

interface WhyProps {
  title: string;
  description: string;
}

export function Why({ title, description }: WhyProps) {
  return (
    <section className="py-10 px-[100px] bg-app">
      <div className="container mx-auto">
        <div className="flex items-start justify-between gap-10">
          {/* Left Side */}
          <div className="text-start min-w-[400px]">
            <div className={`bg-white p-3 w-fit rounded-2xl mb-4`}>
              <Cpu size={28} color="black" />
            </div>

            <h2 className="font-medium text-3xl leading-[1.47] tracking-[-0.963px]">
              {title}
            </h2>
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-white/20 self-stretch min-h-[330px]" />

          {/* Right Side */}
          <div className="">
            <SectionHeader title="WHY DID WE BUILD?" />

            <div
              className="text-xl text-white/60 leading-[1.42] space-y-6"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
