import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { Stats } from "../common/Stats";

export function WhyChooseUs() {
  return (
    <section className="bg-surface-2 py-20">
      <div className="md:container mx-4 md:mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
          {/* Left Side - Partner Logo & Title */}
          <div className="flex-1">
            <div className="flex mb-3">
              <div className="w-28 h-28 mb-6">
                <Image
                  src="/aws-qualified-software.png"
                  alt="AWS Partner Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-100 h-28 mb-6">
                <Image
                  src="/aws-partner.png"
                  alt="AWS Partner Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium md:leading-[40px] leading-[50px] max-w-lg tracking-[-0.96px] text-white">
              Cloud Scal3 is a trusted AWS Technology & Consulting Partner
            </h2>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px h-[300px] bg-[#7c7c7c] mx-10" />

          {/* Right Side - Why Choose Us Content */}
          <div className="flex-1 flex flex-col ">
            <SectionHeader title="AWS PARTNERSHIP" />

            {/* Content Text */}
            <div className="space-y-10">
              <p className="text-xl md:text-2xl text-white/60 leading-[35px]">
                As an AWS Technology Partner, Cloud Scal3’s products makes it
                easier for customers to manage and optimize their AWS
                investments. By delivering our solutions through the AWS
                Marketplace and building on native AWS services, we help
                organizations deploy directly into their own cloud estate with
                confidence, speed, and security—reducing overhead while
                increasing visibility and control.
              </p>
              <p className="text-xl md:text-2xl text-white/60 leading-[35px]">
                As an AWS Consulting Partner, we bring hands-on expertise in
                building and scaling AWS agentic products. This means our
                customers gain more than technology—they gain a partner who
                accelerates innovation, simplifies adoption, and ensures their
                teams can unlock the full value of the AWS Cloud.
              </p>
            </div>
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
}
