import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="my-20">
      <div className="container mx-auto">
        <div className="card-featured ">
          <div className="grid grid-cols-2 gap-10 p-[60px]">
            {/* CTA Text */}
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-4xl leading-tight">
                Ready to Join the Agentic AI Revolution?
              </h2>
              <p className="font-normal text-xl leading-relaxed max-w-4xl mx-auto">
                Let&apos;s discuss how Cloud Scal3 can help transform your
                business with AWS-native AI solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button className="btn btn-lg btn--white hover-white-raise">
                Book A Demo Today
              </button>
              <button className="btn btn-lg btn--black hover-primary-raise">
                Get Started Now
                <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
