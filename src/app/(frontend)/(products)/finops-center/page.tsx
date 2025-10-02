"use client";

import { CTA } from "@/components/common/CTA";
import { Hero } from "@/components/common/Hero";
import { Why } from "@/components/common/Why";
import { BetterTogether } from "@/components/products/finops-center/BetterTogether";
import { FeaturesSection } from "@/components/products/finops-center/features/FeaturesSection";
import { Pricing } from "@/components/products/finops-center/pricing/Pricing";
import { WhatSimplifies } from "@/components/products/finops-center/what-simplifies/WhatSimplifies";
import { ArrowUpRight, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function FinOpsCenterPage() {
  return (
    <main className="">
      <Hero
        logoSrc="/finopscenter.svg"
        logoAlt="FinOps Center logo"
        brandName="FinOps Center"
        title="Drive Savings & Accountability by Removing Complexity"
        description="Cloud Financial Management is typically the domain of a few Cloud Engineers, FinOps SMEs, and Finance team members, although it's the whole organization's responsibility because it's too complex. Removing complexity will enable the entire organization to be accountable for its AWS spending, driving savings and reducing overall Management costs."
        cta={
          <>
            <div className="flex gap-5 items-center">
              <button className="btn btn--white btn-lg hover-white-raise">
                Schedule a Demo
              </button>
              <Link
                href="https://aws.amazon.com/marketplace/pp/prodview-ofii5etdguebi?sr=0-1&ref_=beagle&applicationId=AWSMPContessa"
                target="_blank"
                className="btn btn--primary btn-lg hover-primary-raise"
              >
                Buy Now <ArrowUpRight />
              </Link>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="btn btn-lg btn--black hover-black-raise">
                    <span>Intro Video</span>
                    <Play size={16} />
                  </button>
                </DialogTrigger>
                <DialogContent className="!max-w-4xl p-0">
                  <DialogTitle className="sr-only">
                    FinOps Center Introduction Video
                  </DialogTitle>
                  <div className="relative aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/9vZeKb5f_7Q?si=6KDGRGQe_3kCRtZt&autoplay=1&rel=0"
                      title="FinOps Center Intro Video"
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <Link
                href="https://aws.amazon.com/marketplace/pp/prodview-ofii5etdguebi?sr=0-1&ref_=beagle&applicationId=AWSMPContessa"
                className="btn btn--primary btn-lg hover-primary-raise"
                target="_blank"
              >
                Try Free with AWS <ArrowUpRight />
              </Link>
            </div>
          </>
        }
      />
      <Why
        title="Managing AWS Spending needs to be Simple"
        description={`
          <p>
            AWS Cloud Financial Management is just too hard even if you are a trained FinOps SME or experienced 
            Cloud Engineer. As spending on AWS becomes a larger component of customers' IT budgets, there needs 
            to be accountability for this spending among the product teams and within management. The challenge 
            is that it's hard to drive accountability when there is so much complexity in understanding the AWS 
            Bill.
          </p>
          <p>
            The FinOps Center simplifies complexity of AWS Cloud Financial Management enabling business 
            accountability for spending to drive down cost.
          </p>
        `}
      />
      <WhatSimplifies />
      <FeaturesSection />
      <BetterTogether />
      <Pricing />
      <CTA />
    </main>
  );
}
