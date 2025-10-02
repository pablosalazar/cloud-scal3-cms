import { Building2, Users, BarChart3 } from "lucide-react";
import { MissionCard } from "./MissionCard";
import type { MissionItem } from "./types";
import { SectionHeader } from "@/components/ui/section-header";

const missionItems: MissionItem[] = [
  {
    id: "build-market",
    title: "Build & Market Solutions",
    description:
      "FinOps Center and Agent Bill make Cloud Financial Management Simple",
    icon: Building2,
  },
  {
    id: "customer-ai",
    title: "Customer AI Products",
    description:
      "We bring the know-how of how to build AI Agent Products to Customers",
    icon: Users,
  },
  {
    id: "aws-marketplace",
    title: "Deploy AI to AWS Marketplace",
    description:
      "We help ISVs build their AWS AI Agent Products to the AWS Marketplace",
    icon: BarChart3,
  },
];

export default function MissionSection() {
  return (
    <div className="mx-4 md:container md:mx-auto py-10">
      <section className="card-featured text-center">
        <SectionHeader title="OUR MISSION" className="justify-center" />

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-[-1.09px] mb-6">
          The Agentic AI Revolution
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-5xl mx-auto mb-5">
          AI Agents will transform the capabilities of roles within
          organizations. Tasks that were once thought to require deep domain
          expertise or be technically challenging can now be handled by a larger
          number of team members within the organization.
        </p>

        {/* Mission Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-5 md:gap-10">
          {missionItems.map((item) => (
            <MissionCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export { MissionSection };
