import Image from "next/image";
import { SuperpowerAccordion } from "./SuperpowerAccordion";
import type { SuperpowerItem } from "./types";
import { SectionHeader } from "@/components/ui/section-header";

const superpowerItems: SuperpowerItem[] = [
  {
    id: "aws-marketplace-advisory",
    title: "AWS Marketplace Advisory",
    description:
      'We work "backward" with customers from what type of AWS Marketplace product works best for their business model and solution thru developing their Market and Ecosystem',
    iconName: "cpu",
    bgColor: "bg-[#EDDDB6]",
  },
  {
    id: "native-aws-products",
    title: "Native AWS Agentic Products",
    description:
      'Native AWS Agentic Products We work "backward" with customers from what type of AWS Marketplace product works best for their business model and solution thru developing their Market and Ecosystem',
    iconName: "bot",
    bgColor: "bg-[#D7F1D3]",
  },
  {
    id: "quickstart-adoption",
    title: "Product QuickStart Adoption",
    description:
      'Product QuickStart Adoption We work "backward" with customers from what type of AWS Marketplace product works best for their business model and solution thru developing their Market and Ecosystem',
    iconName: "zap",
    bgColor: "bg-[#BAE7EF]",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-10 px-0 md:px-[100px]">
      <div className="container mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row md:gap-12 items-start">
          {/* Left side - Image */}

          <SectionHeader
            title="Cloud Scal3 Superpowers"
            className="opacity-60 block md:hidden"
          />
          <div className="w-full md:w-1/2 mb-6">
            <Image
              src="/our-expertisei-mage.svg"
              alt="Cloud Scal3 Expertise Visualization"
              width={890}
              height={880}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 flex flex-col md:gap-6">
            <SectionHeader
              title="Cloud Scal3 Superpowers"
              className="opacity-60 hidden md:flex"
            />

            {/* Main Description */}
            <p className="text-lg md:text-xl leading-tight">
              We advise and build AWS Agentic solutions that are deployed to the
              AWS Marketplace. Additionally, we design GTM Strategies to develop
              Ecosystems and Consulting Offerings that maximize customers
              benefits from Agentic Solutions.
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#7c7c7c] to-transparent mt-3 mb-3 md:mb-0" />

            {/* Superpowers Accordion */}
            <div className="space-y-5">
              <SuperpowerAccordion items={superpowerItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ExpertiseSection };
