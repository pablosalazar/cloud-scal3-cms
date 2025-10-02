"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { VideoCard } from "./VideoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { videoPlaylist } from "./constants";

export function WhatSimplifies() {
  return (
    <section className="py-[100px] bg-app">
      <div className="container mx-auto">
        <SectionHeader
          title="WHAT FINOPS CENTER SIMPLIFIES"
          className="opacity-60"
        />

        <Carousel>
          <CarouselContent>
            {videoPlaylist.map((item, index) => (
              <CarouselItem
                key={`${item.id}-${index}`}
                className="md:basis-1/3"
              >
                <VideoCard videoData={item} key={`${item.id}-${index}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
