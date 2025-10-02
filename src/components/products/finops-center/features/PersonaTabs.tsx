"use client";

interface PersonaTab {
  id: string;
  label: string;
}

interface PersonaTabsProps {
  tabs: PersonaTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function PersonaTabs({
  tabs,
  activeTab,
  onTabChange,
}: PersonaTabsProps) {
  return (
    <div className="flex justify-center gap-2 mb-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            px-4 py-2 bg-none font-semibold text-medium cursor-pointer 
            transition-all duration-300 ease-out relative whitespace-nowrap
            ${
              activeTab === tab.id
                ? "text-black"
                : "text-[#82808a] hover:text-black/70"
            }
          `}
        >
          {tab.label}
          {activeTab === tab.id && (
            <div className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-black" />
          )}
        </button>
      ))}
    </div>
  );
}
