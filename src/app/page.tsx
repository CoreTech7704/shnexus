import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";
import { Hero } from "@/src/components/sections/hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
       <Hero />
      </main>

      <Footer />
    </>
  );
}
