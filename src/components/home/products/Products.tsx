import { ProductCard } from "./ProductCard";
import type { Product } from "./types";
import { SectionHeader } from "@/components/ui/section-header";

const products: Product[] = [
  {
    id: "finops",
    title: "FinOps Center",
    subtitle: "FinOps Center makes Cloud Financial Management simple",
    description:
      "CFM is too hard. We need everybody to take ownership but working in AWS Console requires special expertise and technical know-how.",
    features: [
      { text: "Spend Governance & Approvals" },
      { text: "Schedule & Approve Budgets" },
      { text: "Allocate Cost and Credits" },
      { text: "CFM as a Business Application" },
    ],
    href: "/finops-center",
    imagePath: "/finopscenter.svg",
    iconBg: "bg-[#222222]",
  },
  {
    id: "agent-bill",
    title: "Agent Bill",
    subtitle: "Agent Bill is your AWS CFM Agent",
    description:
      "Working with FinOps Center, Agent Bill is bringing extraordinary simplicity and automation to your CFM Management.",
    features: [
      { text: "Savings Automation" },
      { text: "Buying Automation" },
      { text: "ITSM Task Integration" },
      { text: "Program Management" },
    ],
    href: "/agent-bills",
    imagePath: "/agentbill.svg",
    iconBg: "bg-[#434343]/24",
  },
];

export function Products() {
  return (
    <section className="py-10 mx-auto">
      <SectionHeader title="OUR PRODUCTS" className="justify-center" />

      <div className="px-4 md:max-w-5xl md:px-0 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
