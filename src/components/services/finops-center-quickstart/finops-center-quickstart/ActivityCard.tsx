import { ArrowDownLeft, ArrowRight, Asterisk } from "lucide-react";
import { Activity } from "./constants";
import { cn } from "@/lib/utils";

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const IconComponent =
    activity.icon === "arrow-down"
      ? ArrowDownLeft
      : activity.icon === "asterisk"
      ? Asterisk
      : ArrowRight;

  return (
    <div
      className={cn(
        "bg-white rounded-4xl p-6 min-h-[302px] flex flex-col border-2 border-black/5 transition-transform duration-300 hover:-translate-y-1",
        activity.variant === "alt" && "bg-[#FCF8F8]"
      )}
    >
      <div className="flex justify-between items-center mb-6">
        <span className="text-2xl font-bold text-[#333333]">
          {activity.id.toString().padStart(2, "0")}
        </span>
        <IconComponent size={22} className={cn("text-dark")} />
      </div>
      <p className="text-xl text-[#636363] leading-[1.4] flex-1">
        {activity.description}
      </p>
    </div>
  );
}
