import Image from "next/image";
import { WorksContentProps } from "./types";
import { Check } from "lucide-react";

export function WorksContent({ worksData }: WorksContentProps) {
  return (
    <div className="min-h-[400px]">
      {worksData.type === "image" && (
        <div className="flex justify-center">
          <Image
            src={worksData.image}
            alt={worksData.alt}
            width={800}
            height={400}
            className="rounded-2xl border border-white/40"
          />
        </div>
      )}

      {worksData.type === "text-image" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-bold text-3xl text-white">{worksData.title}</h3>
            <p className="text-lg text-white/60 leading-[1.5]">
              {worksData.description}
            </p>
            <ul className="space-y-3">
              {worksData.features?.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-white/80"
                >
                  <Check className="text-[var(--green)] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src={worksData.image}
              alt={worksData.alt}
              width={500}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
