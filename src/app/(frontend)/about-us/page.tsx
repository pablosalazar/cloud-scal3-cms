import { Hero } from "@/components/about-us/Hero";
import { Testimonials } from "@/components/about-us/Testimonials";
import { CTA } from "@/components/common/CTA";
import { StayUpdated } from "@/components/common/StayUpdated";

export default function AboutUs() {
  return (
    <>
      <Hero />
      <Testimonials />
      <StayUpdated />
      <CTA />
    </>
  );
}
