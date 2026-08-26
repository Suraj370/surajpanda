import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#e4f1de]/55">
        <Hero />
        <Skills />
        <Projects />
        {/* <Achievements /> */}
        <Contact />
      </main>
    </>
  );
}
