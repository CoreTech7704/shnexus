import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/navbar";
import { Hero } from "../components/sections/hero";
import { Services } from "../components/sections/services";
import { WhyUs } from "../components/sections/why-us";
import { Process } from "@/src/components/sections/process";
import { Projects } from "@/src/components/sections/projects";
import { TechStack } from "@/src/components/sections/tech-stack";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <TechStack />
      </main>

      <Footer />
    </>
  );
}
