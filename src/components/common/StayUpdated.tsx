import { SectionHeader } from "@/components/ui/section-header";
import Link from "next/link";
import Image from "next/image";

export const resources = [
  {
    title: "Navigating AWS Marketplace Pricing Models: SaaS vs. AMI",
    tag: "Analytics",
    date: "Feb 23",
    readTime: "4 min read",
    image: "/analytics.svg",
  },
  {
    title: "AWS Partner Programs: Maximizing Your MAP Benefits",
    tag: "Marketing",
    date: "Apr 3",
    readTime: "7 min read",
    image: "/marketing.svg",
  },
  {
    title: "AWS Marketplace Success: From Idea to $1M ARR in 18 Months",
    tag: "Business",
    date: "May 13",
    readTime: "5 min read",
    image: "/business.svg",
  },
];

export function StayUpdated() {
  return (
    <section className="py-20">
      <div className="mx-4 md:container md:mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <SectionHeader title="stay updated with our resources & insights" />

          <Link href={"/"} className="btn btn--primary mb-10">
            Learn More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-30">
          {/* Featured Resource */}
          <div>
            <div className="bg-gradient-to-r from-[#EDDDB6] via-[#C9FFE6] to-[#A5C7FA] rounded-3xl p-[2px]">
              <div className="bg-app h-full rounded-3xl p-8">
                <div className="mb-6">
                  <Image
                    src="/labtop.svg"
                    alt="Technical Packaging"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Technical Packaging for AWS Marketplace
                </h3>
                <p className="text-white/60 text-lg mb-6 line-clamp-3">
                  A case study of how one ISV leveraged AWS Marketplace to scale
                  their SaaS solution rapidly. Lorem Ipsum is simply dummy text
                  that has been used since the 1500s
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white">
                    Analytics
                  </span>
                  <span className="text-white/60">Jun 24 · 8 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resource List */}
          <div className="flex flex-col gap-6 py-5 md:py-0">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex md:gap-20 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="flex-1">
                  <h4 className="text-xl font-medium text-white mb-4 group-hover:text-[#97F4BA] transition-colors">
                    {resource.title}
                  </h4>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="px-4 py-2 bg-white/10 rounded-full text-white">
                      {resource.tag}
                    </span>
                    <span className="text-white/60">
                      {resource.date} · {resource.readTime}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    width={100}
                    height={100}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
