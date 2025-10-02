import { CTA } from "@/components/common/CTA";
import { FAQ, FAQItem } from "@/components/common/FAQ";
import { Hero } from "@/components/common/Hero";
import { StayUpdated } from "@/components/common/StayUpdated";
import { Why } from "@/components/common/Why";
import { Services } from "@/components/services/aws-marketplace-advisory/Services";
import { ArrowUpRight } from "lucide-react";

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What's the difference between AMI and SaaS Marketplace models?",
    answer:
      "AMI is typically for customer-deployed software, while SaaS offers a more scalable, subscription-based model hosted by you. We help you decide what's best.",
  },
  {
    id: "2",
    question: "Can you help us qualify for AWS funding programs?",
    answer:
      "AMI is typically for customer-deployed software, while SaaS offers a more scalable, subscription-based model hosted by you. We help you decide what's best.",
  },
  {
    id: "3",
    question: "Do you support post-launch operations?",
    answer:
      "AMI is typically for customer-deployed software, while SaaS offers a more scalable, subscription-based model hosted by you. We help you decide what's best.",
  },
];

export default function AWSMarketplace() {
  return (
    <>
      <Hero
        bgImg="/bg-hero-1.png"
        brandName="AWS Marketplace Product Advisory"
        title="Launch faster. Scale smarter. Win with AWS."
        description="From product strategy to go-to-market alignment, we help you build, launch, and scale your AWS Marketplace product with confidence."
        cta={
          <div className="flex gap-5 items-center">
            <button className="btn btn--primary btn-lg hover-primary-raise">
              Get Started Now <ArrowUpRight />
            </button>
          </div>
        }
      />
      <Why
        title="Build the right Product Type for your Solution and Business Model"
        description="As builders and marketers of products on the AWS Marketplace, we have come to understand and develop unique expertise in product packaging, pricing, and deployment models that best fit ISVs' offerings to be both valuable to their customers and the AWS Ecosystem.  With products onboarded to the AWS Marketplace, we work to build “Flywheel” momentum with AWS and joint Customers."
      />
      <Services />
      <FAQ title="Got Questions? We’ve Got Answers." items={faqData} />
      <CTA />
      <StayUpdated />
    </>
  );
}
