"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Gallery from "../ui_comp/Gallery";
import { ProductsListings } from "./Products";

export default function page() {
  const words = [
    {
      text: "Ready",
      className: "text-white dark:text-white",
    },
    {
      text: "For",
      className: "text-white dark:text-white",
    },
    {
      text: "The",
      className: "text-white dark:text-white",
    },
    {
      text: "Expierence",
      className: "text-white dark:text-white",
    },
    {
      text: "In",
      className: "text-white dark:text-white",
    },
    {
      text: "Artisan Glimpse.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="flex flex-col items-center justify-center h-screen  ">
          <TypewriterEffectSmooth words={words} />
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-2xl text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Scroll Down
          </button>
        </div>
        <BackgroundBeams />
      </div>
      <Gallery />
      <ProductsListings />
    </>
  );
}
