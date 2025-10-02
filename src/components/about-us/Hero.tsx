import Image from "next/image";

export function Hero() {
  return (
    <>
      <section className="pt-[100px] pb-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-10">
            {/* Hero Text */}
            <div className="flex-1">
              <h1 className="font-normal text-4xl leading-[1.2]">
                We develop AWS Agentic solutions that help business teams carry
                out complex tasks.
              </h1>
            </div>

            {/* Hero Description */}
            <div className="flex-1">
              <p className="font-normal text-2xl leading-[1.6] text-white/60 mb-5">
                As a Technology Partner, we make our solution available via the
                AWS Marketplace and are Powered by native AWS Services.
              </p>
              <p className="font-normal text-2xl leading-[1.6] text-white/60">
                As a Consulting Partner, we are able to leverage programs from
                AWS to Integrate our solutions into customers&apos; AWS Cloud
                Estates
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="h-[350px] overflow-hidden relative">
          <Image
            src="/hero-about-us.png"
            alt="About Us Hero"
            className="w-full h-full object-cover object-[center_-150px]"
            width={100}
            height={100}
          />
        </div>
      </section>
    </>
  );
}
