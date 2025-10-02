"use client";
import { CTA } from "@/components/common/CTA";
import MainContent from "@/components/resources/MainContent";

export default function Resources() {
  const bgImg = "/resource-bg.png";
  return (
    <>
      <header
        className={`bg-cover bg-center hero-bg h-[400px]`}
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></header>
      <MainContent />
      <CTA />
    </>
  );
}
