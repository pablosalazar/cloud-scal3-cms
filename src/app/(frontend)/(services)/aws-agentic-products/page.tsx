import { CTA } from "@/components/common/CTA";
import { Hero } from "@/components/common/Hero";
import { StayUpdated } from "@/components/common/StayUpdated";
import { Why } from "@/components/common/Why";
import { Process } from "@/components/services/aws-agentic-products/Process";
import { ArrowUpRight } from "lucide-react";

export default function AIProducts() {
  return (
    <>
      <Hero
        bgImg="/aws-agentic-bg.webp"
        brandName="Agent Framework Design"
        title="We know how to build AWS-based AI Agent Products"
        description="Understanding how existing application architecture components can be leveraged and updated for AI Agents."
        cta={
          <div className="flex gap-5 items-center">
            <button className="btn btn--primary btn-lg hover-primary-raise">
              Get Started Now <ArrowUpRight />
            </button>
          </div>
        }
      />
      <Why
        title="We do for you what we do for ourselves"
        description="We are experts in leveraging the right AWS Services for use cases within your Agentic Products. Our team also has decades of experience in integrating new product technologies to best leverage customers' legacy assets, which is key know-how for how customers will fully realize the opportunity of AWS Agentic technologies. "
      />
      <Process />
      <StayUpdated />
      <CTA />
    </>
  );
}
