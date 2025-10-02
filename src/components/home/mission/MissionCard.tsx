import type { MissionItem } from "./types";

interface MissionCardProps {
  item: MissionItem;
}

export function MissionCard({ item }: MissionCardProps) {
  const IconComponent = item.icon;

  return (
    <article className="flex flex-col items-center text-center p-3 md:p-10">
      <div className="bg-white p-6 rounded-4xl flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] mb-4">
        <IconComponent />
      </div>

      <h3 className="text-lg md:text-xl font-bold leading-tight mb-2">
        {item.title}
      </h3>

      <p className="md:text-lg max-w-sm">{item.description}</p>
    </article>
  );
}
