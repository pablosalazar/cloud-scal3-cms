"use client";

import { Cpu, Bot, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { SuperpowerItem } from "./types";

const iconMap = {
  cpu: Cpu,
  bot: Bot,
  zap: Zap,
};

interface SuperpowerAccordionProps {
  items: SuperpowerItem[];
}

export function SuperpowerAccordion({ items }: SuperpowerAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="space-y-5"
      defaultValue={items[0]?.id}
    >
      {items.map((item) => {
        const IconComponent = iconMap[item.iconName];

        return (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border-b border-[#7c7c7c]/30 pb-5"
          >
            <AccordionTrigger className="hover:no-underline p-0">
              <div className="flex items-center gap-4 w-full">
                <div
                  className={`p-4 rounded-full flex items-center justify-center ${item.bgColor}`}
                >
                  <IconComponent className="text-[#2D2F31]" size={22} />
                </div>

                <h3 className="text-lg font-semibold text-white flex-1 text-left">
                  {item.title}
                </h3>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <p className="text-lg text-white/60  pl-[66px]">
                {item.description}
              </p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
