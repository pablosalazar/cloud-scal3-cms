import { RotateCcw } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const benefitsData = [
  {
    id: "automation",
    icon: "blue",
    title: "Automate Critical FinOps Tasks",
    description:
      "Execute high-impact actions—like buying savings plans or managing approvals—without touching the AWS Console. Agent Bill takes care of the manual steps so teams can focus on decisions, not operations.",
  },
  {
    id: "ownership",
    icon: "green",
    title: "Shift Ownership to the Business",
    description:
      "Empower finance and product owners to act on spending without generating tickets or needing technical expertise. Agent Bill enables non-technical teams to handle their own cloud financial responsibilities.",
  },
  {
    id: "complexity",
    icon: "cream",
    title: "Reduce Cost and Complexity",
    description:
      "Lower soft costs by removing the friction between business teams and cloud engineers. Agent Bill simplifies FinOps processes and shortens the time to take action.",
  },
];

export function WhyAgentBill() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          title="WHY AGENT BILL"
          className="justify-center opacity-60"
        />

        {/* Main Title */}
        <h2 className="text-center font-bold text-5xl tracking-[-1.0906px] mb-6">
          Remove Complexity. Empower Your Teams.
        </h2>

        {/* Description */}
        <p className="text-center text-xl opacity-60 leading-relaxed max-w-4xl mx-auto mb-16">
          Agent Bill is built to automate the most time-consuming, manual tasks
          of AWS Cloud Financial Management. Whether it&apos;s handling
          approvals, surfacing cost-saving recommendations, or executing buying
          decisions—Agent Bill works quietly in the background to support your
          team&apos;s FinOps workflows.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white border border-gray-200 rounded-4xl p-8"
            >
              {/* Benefit Icon */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  benefit.icon === "blue"
                    ? "bg-blue-100"
                    : benefit.icon === "green"
                    ? "bg-green-100"
                    : "bg-orange-100"
                }`}
              >
                <RotateCcw
                  size={28}
                  className={
                    benefit.icon === "blue"
                      ? "text-blue-600"
                      : benefit.icon === "green"
                      ? "text-green-600"
                      : "text-orange-600"
                  }
                />
              </div>

              {/* Benefit Title */}
              <h4 className="font-semibold text-2xl text-black mb-4 leading-tight">
                {benefit.title}
              </h4>

              {/* Benefit Description */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
