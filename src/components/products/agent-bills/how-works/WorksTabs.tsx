"use client";

import { WorksTabsProps } from "./types";

export function WorksTabs({ tabs, activeTab, onTabChange }: WorksTabsProps) {
  return (
    <div className="flex justify-between gap-2 mb-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            py-2 bg-none font-semibold text-medium cursor-pointer 
            transition-all duration-300 ease-out relative whitespace-nowrap
            ${
              activeTab === tab.id
                ? "text-white"
                : "text-[#82808a] hover:text-white/70"
            }
          `}
        >
          {tab.label}
          {activeTab === tab.id && (
            <div className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-green max-w-[20px]" />
          )}
        </button>
      ))}
    </div>
  );
}
