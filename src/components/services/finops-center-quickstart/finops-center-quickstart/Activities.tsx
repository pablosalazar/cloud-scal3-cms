import { SectionHeader } from "@/components/ui/section-header";
import { ACTIVITIES } from "./constants";
import { ActivityCard } from "./ActivityCard";

export function Activities() {
  return (
    <section className="card-featured px-[100px] mx-5 ">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionHeader
            title="FinOps Center Quickstart"
            className="justify-center"
          />

          <h2 className="text-5xl font-bold text-[var(--text-dark)] mb-8 tracking-[-1.0906px] leading-[1.2]">
            FinOps Center Quickstart
          </h2>

          <p className="text-xl text-[var(--text-dark)] max-w-4xl mx-auto leading-[1.3]">
            Simplifying AWS Cloud Financial Management can’t wait. Our team or
            one of our partners will have you saving costs by the end of the
            first Day.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {ACTIVITIES.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
