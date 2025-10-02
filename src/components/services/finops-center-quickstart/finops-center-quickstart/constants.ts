export interface Activity {
  id: number;
  description: string;
  icon: "arrow" | "arrow-down" | "asterisk";
  variant: "default" | "alt";
}

export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    description:
      "Validate the Pre-Requisite AWS Environment components are configured correctly",
    icon: "arrow",
    variant: "default",
  },
  {
    id: 2,
    description:
      "Cost and Usage Report/Cost Optimization Hub is replicated Workshop with customer FinOps Center Business Requirements",
    icon: "arrow",
    variant: "alt",
  },
  {
    id: 3,
    description: "Install FinOps Center from Business Requirements",
    icon: "arrow",
    variant: "default",
  },
  {
    id: 4,
    description: "Create the Annual Budgets via Web UI or File Upload",
    icon: "arrow-down",
    variant: "alt",
  },
  {
    id: 5,
    description:
      "Validate that AWS Accounts are loading with Spending and Cost Optimization",
    icon: "arrow",
    variant: "alt",
  },
  {
    id: 6,
    description: "Demonstrate how to Allocated 1st AWS Account",
    icon: "arrow",
    variant: "default",
  },
  {
    id: 7,
    description: "Demonstrate how to Add Users",
    icon: "arrow",
    variant: "alt",
  },
  {
    id: 8,
    description: "Customize Email Invite",
    icon: "arrow-down",
    variant: "default",
  },
  {
    id: 9,
    description: "Create the first Workload and Estimate",
    icon: "arrow",
    variant: "default",
  },
  {
    id: 10,
    description: "Demonstrate how to Set and Update Budgets",
    icon: "arrow",
    variant: "alt",
  },
  {
    id: 11,
    description: "Demonstrate how to Allocate Credits",
    icon: "arrow",
    variant: "default",
  },
  {
    id: 12,
    description:
      "Demonstrate how to add first Amazon QuickSight Dashboard and Agent Bill",
    icon: "arrow-down",
    variant: "alt",
  },
  {
    id: 13,
    description: "Demonstrate how to Set and Update Budgets",
    icon: "arrow",
    variant: "alt",
  },
  {
    id: 14,
    description: "Create the first Workload and Estimate",
    icon: "arrow",
    variant: "default",
  },
  {
    id: 15,
    description:
      "Demonstrate how to add first Amazon QuickSight Dashboard and Agent Bill Ama",
    icon: "arrow",
    variant: "alt",
  },
  {
    id: 16,
    description: "Demonstrate how to Allocate Credits",
    icon: "asterisk",
    variant: "default",
  },
];
