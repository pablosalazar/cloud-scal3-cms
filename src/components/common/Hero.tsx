import Image from "next/image";
import { Cpu } from "lucide-react";

interface HeroProps {
  bgImg?: string;
  // Branding (now optional)
  logoSrc?: string;
  logoAlt?: string;
  brandName?: string;

  // Content
  title: string;
  description?: string;

  // CTA section (optional) - accepts any React nodes/JSX
  cta?: React.ReactNode;

  // Styling options
  height?: number;
  logoSize?: number;
}

export function Hero({
  bgImg,
  logoSrc,
  logoAlt,
  brandName,
  title,
  description = "",
  cta,
  height = 500,
  logoSize = 50,
}: HeroProps) {
  return (
    <header
      className={`bg-cover ${bgImg ? "" : "hero-bg"} py-10 md:py-0`}
      style={{
        background: bgImg
          ? `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${bgImg}) lightgray 0px -328.144px / 100% 183.93% no-repeat`
          : undefined,
      }}
    >
      <div className="px-4 md:max-w-5xl md:px-0 mx-auto">
        <div
          style={{ minHeight: `${height}px` }}
          className="flex flex-col justify-center gap-4 "
        >
          <div className="flex items-center gap-5">
            {/* Conditional logo rendering */}
            {logoSrc && logoAlt ? (
              <div
                style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
                className="bg-[#292929] rounded-full flex items-center justify-center p-2"
              >
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-[60px] h-[60px] bg-[#151515] rounded-[25px] flex items-center justify-center">
                <Cpu size={27} className="w-[27px] h-[27px] text-white" />
              </div>
            )}

            {brandName && (
              <span className="font-onest font-semibold text-[28px] text-white/60">
                {brandName}
              </span>
            )}
          </div>

          <h1 className="font-medium text-4xl text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] max-w-3xl">
            {title}
          </h1>

          <p className="text-lg md:text-xl leading-[1.33] opacity-70 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            {description}
          </p>

          {cta}
        </div>
      </div>
    </header>
  );
}
