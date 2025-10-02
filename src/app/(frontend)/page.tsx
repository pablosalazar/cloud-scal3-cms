import { CTA } from "@/components/common/CTA";
import { Hero } from "@/components/common/Hero";
import { StayUpdated } from "@/components/common/StayUpdated";
import ExpertiseSection from "@/components/home/expertise/ExpertiseSection";
import MissionSection from "@/components/home/mission/MissionSection";
import { Products } from "@/components/home/products/Products";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero
        bgImg="/hero-bg.webp"
        title="We build AWS Agentic AI Products that help make the complex simple."
      />

      <Products />
      <MissionSection />
      <ExpertiseSection />
      <WhyChooseUs />

      <StayUpdated />
      <CTA />
    </>
  );
}
