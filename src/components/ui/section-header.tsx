import { ArrowDown } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <header className={`flex items-center gap-5 mb-10 ${className}`}>
      <h2 className="font-medium text-2xl tracking-[1.33px] uppercase">
        {title}
      </h2>
      <ArrowDown size={26} />
    </header>
  );
}
