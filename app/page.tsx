import Hero from "./ui_comp/Hero";
import Gallery from "./ui_comp/Gallery";
import Mask from "./ui_comp/Mask";
import { TabsDemo } from "./ui_comp/TabsDrawer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AboutSection } from "./ui_comp/About";
import { About } from "./ui_comp/AboutSection";
import { ArtisanGlimpse } from "./ui_comp/Artisan-Glimpse";
import { Members } from "./ui_comp/Members";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="flex flex-col items-center justify-center h-screen ">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-2xl text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Scroll Down
          </button>
        </div>
        <BackgroundBeams />
      </div>
      <Mask />
      <ArtisanGlimpse />
      <section className="w-full">
        <div className="container flex flex-col items-center justify-center mt-0 rounded-tr-3xl">
          <Hero />
        </div>
      </section>
      <TabsDemo />
      <About />
      <AboutSection />
      <div className="mt-14">
        <Members />
      </div>
    </>
  );
}
