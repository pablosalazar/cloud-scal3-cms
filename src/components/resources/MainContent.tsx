import { useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Settings,
} from "lucide-react";
import {
  featuredResources,
  filterCategories,
  resourceCards,
} from "@/components/resources/constants";
import Image from "next/image";

const ResourcesMainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredResources =
    activeFilter === "all"
      ? featuredResources
      : featuredResources.filter(
          (resource) => resource.category === activeFilter
        );

  const handlePrev = () => {
    setCurrentSlide((current) =>
      current > 0 ? current - 1 : filteredResources.length - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((current) =>
      current < filteredResources.length - 1 ? current + 1 : 0
    );
  };

  const currentResource = filteredResources[currentSlide];

  return (
    <main className="container mx-auto pt-10">
      {/* Page Title */}
      <section className="text-center">
        <h1 className="text-4xl font-normal text-white leading-none mb-10">
          Stay updated with our resources & insights
        </h1>
      </section>

      {/* AWS Marketplace Video */}
      <section className="mt-6 h-[600px] relative overflow-hidden mb-20 rounded-4xl">
        <div className="relative w-full h-full">
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/aws-marketplace-video.svg')",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
              <button className="cursor-pointer transition-transform hover:scale-110">
                <Play className="w-9 h-9" />
              </button>
              <div className="text-2xl">2m 36s</div>
            </div>
          </div>
          <div className="absolute bottom-10 left-8 text-5xl">
            AWS Marketplace
          </div>
        </div>
      </section>

      {/* Featured Resource Carousel */}
      <section className="mb-20">
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative h-[500px] overflow-hidden mb-10">
            <div className="bg-surface-2 rounded-4xl p-8 border-3 border-white/20 absolute top-0 left-0 w-full h-full flex items-center">
              <div className="flex items-center gap-8">
                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-6">
                  <h2 className="text-3xl font-semibold leading-tight tracking-[-0.6706px]">
                    {currentResource.title}
                  </h2>
                  <p className="text-lg text-white/60 leading-relaxed">
                    {currentResource.description}
                  </p>
                  <button className="btn btn--primary w-fit">
                    <span>View</span>
                    <ArrowUpRight />
                  </button>
                </div>

                {/* Image */}
                <div className="flex-1 h-[400px] rounded-4xl overflow-hidden">
                  <Image
                    src={currentResource.image}
                    alt={currentResource.title}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center gap-6">
            {/* Filter Tabs */}
            <div className="flex gap-5 items-center flex-wrap justify-center">
              {filterCategories.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setCurrentSlide(0);
                  }}
                  className={`px-5 py-2 rounded-full text-lg font-medium transition-all flex items-center gap-2.5 ${
                    activeFilter === filter.id
                      ? "bg-[#97F4BA] text-[#151515]"
                      : "bg-white/10 text-white hover:bg-[#97F4BA] hover:text-[#151515]"
                  }`}
                >
                  {filter.icon && <Settings />}
                  {!filter.icon && <span>{filter.label}</span>}
                </button>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-5">
              <button
                onClick={handlePrev}
                className="transition-transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={filteredResources.length === 0}
              >
                <ChevronLeft size={36} />
              </button>

              <div className="text-md text-white px-4 py-2 rounded-[20px] transition-all hover:bg-white/10">
                Page {currentSlide + 1} of {filteredResources.length}
              </div>

              <button
                onClick={handleNext}
                className="transition-transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={filteredResources.length === 0}
              >
                <ChevronRight size={36} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="mb-20">
        <div className="flex gap-12 justify-between">
          {resourceCards.map((card, index) => (
            <div
              key={index}
              className="flex-1 bg-white/10 rounded-4xl p-[21px] border-3 border-white/10 transition-transform hover:-translate-y-1"
            >
              <div className="relative w-full h-[220px] rounded-4xl overflow-hidden mb-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
                {card.isVideo && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110">
                    <Play size={40} />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold  tracking-[-0.5029px]">
                  {card.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold tracking-[1.1429px] uppercase ${card.tagColor}`}
                  >
                    {card.tag}
                  </span>
                  <span className="text-sm text-white/60">{card.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ResourcesMainContent;
