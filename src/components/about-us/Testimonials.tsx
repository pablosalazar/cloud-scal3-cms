import Image from "next/image";

export function Testimonials() {
  return (
    <section className="bg-app py-20 px-5">
      <div className="container mx-auto flex items-center justify-between gap-10">
        {/* Testimonial Text */}
        <div className="flex-1">
          <blockquote className="font-medium text-3xl leading-[1.2] text-[#DDDDDD] mb-16 tracking-[-0.79px] not-italic">
            &ldquo;My experience with this platform so far has been great.
            Everything is easy, from creating visualization, tracking &
            more...&rdquo;
          </blockquote>
          <div>
            <h3 className="font-bold text-2xl mb-1">Bettie Porter</h3>
            <p className="font-normal text-xl text-white/60">
              Senior Marketing Manager
            </p>
          </div>
        </div>

        {/* Testimonial Image */}
        <div className="flex-shrink-0">
          <div className="w-[500px] h-[500px] bg-[#424242] rounded-4xl flex items-center justify-center p-2.5">
            <Image
              src="/aws-logo.svg"
              alt="Bettie Porter"
              className="w-[160px] h-[160px] object-cover rounded-full"
              width={160}
              height={160}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
