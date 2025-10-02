import { Check } from "lucide-react";
import { Feature, Plan } from "./constants";

interface PricingCardProps {
  title: string;
  subtitle: string;
  plan: Plan;
  buttonText: string;
  estimate: string;
  features: Feature[];
}

export function PricingCard({
  title,
  subtitle,
  plan,
  buttonText,
  estimate,
  features,
}: PricingCardProps) {
  return (
    <div
      className={`bg-white rounded-4xl p-[45px] flex-1 flex flex-col gap-6 `}
    >
      {/* Card Header */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl text-gray font-bold">{title}</h3>
        <p className="text-[#2d2f31] leading-[1.62]">{subtitle}</p>
      </div>

      {/* Price */}
      <div className="flex items-center justify-center gap-3">
        <span className="font-bold text-5xl text-[#2d2f31] tracking-[-0.9474px]">
          {plan.amount}
        </span>
        <span className="font-semibold text-3xl text-[#82808a]">
          {plan.label}
        </span>
      </div>

      {/* CTA Button */}
      <button className="btn btn--primary btn-lg justify-center font-semibold hover-white-raise">
        {buttonText}
      </button>

      {/* Estimate */}
      <p className="text-[#82808a] text-sm text-center tracking-[0.2211px]">
        {estimate}
      </p>

      {/* Divider */}
      <div className="h-[1.421px] bg-[#e0dfe5] w-full" />

      {/* Features */}
      <div className="flex flex-col gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <Check className="text-green-600" />
            <span className="text-xl text-[#2d2f31] tracking-[0.2526px]">
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
