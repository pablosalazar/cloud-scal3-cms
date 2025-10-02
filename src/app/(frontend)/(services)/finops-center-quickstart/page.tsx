import { CTA } from "@/components/common/CTA";
import { Hero } from "@/components/common/Hero";
import { StayUpdated } from "@/components/common/StayUpdated";
import { Why } from "@/components/common/Why";
import { Activities } from "@/components/services/finops-center-quickstart/finops-center-quickstart/Activities";

export default function QuickStart() {
  return (
    <>
      <Hero
        bgImg="/quickstart-bg.webp"
        logoSrc="/finopscenter.svg"
        logoAlt="FinOps Center Quickstart logo"
        brandName="FinOps Center Quickstart"
        title="The QuickStart is designed to simplify AWS Cloud Financial Management in a single day."
      />
      <Why
        title="Maximize the Business Benefit of FinOps Center"
        description="To fully realize the value of FinOps Center, the Quickstart works with your team to quickly understand your organization's structure and roles to align with during installation and setup. Upon validating that your environment is operating as expected, we will then start to onboard your financial budgets and team to start removing the complexity of AWS Cloud Financial Management to drive accountability and savings."
      />
      <Activities />
      <StayUpdated />
      <CTA />
    </>
  );
}
