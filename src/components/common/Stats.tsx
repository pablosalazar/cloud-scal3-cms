import { Card, CardContent } from "../ui/card";

const statsData = [
  {
    id: "hours-saved",
    value: "$100,000s",
    label: "DIY Development & Maintenance",
  },
  {
    id: "cost-savings",
    value: "$10ks Monthly",
    label: "Cost Optimization Tooling Savings",
  },
  {
    id: "soft-cost-savings",
    value: "60%",
    label: "Soft-cost Savings",
  },
];

export function Stats() {
  return (
    <div className="flex flex-col md:flex-row gap-12">
      {statsData.map((stat) => (
        <Card
          key={stat.id}
          className="card-featured flex-1 py-[41px] px-10 rounded-[50px] text-center border-0 shadow-none"
        >
          <CardContent className="p-0">
            <h3 className="text-4xl font-bold leading-none mb-4">
              {stat.value}
            </h3>
            <p className="text-2xl leading-none">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
