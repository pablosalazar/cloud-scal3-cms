export interface WorksTab {
  id: string;
  label: string;
}

export interface WorksDataBase {
  id: string;
  type: "image" | "text-image";
  image: string;
  alt: string;
}

export interface WorksDataImage extends WorksDataBase {
  type: "image";
}

export interface WorksDataTextImage extends WorksDataBase {
  type: "text-image";
  title: string;
  description: string;
  features: string[];
}

export type WorksData = WorksDataImage | WorksDataTextImage;

export interface WorksTabsProps {
  tabs: WorksTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export interface WorksContentProps {
  worksData: WorksData;
}

export type WorksDataRecord = Record<string, WorksData>;
