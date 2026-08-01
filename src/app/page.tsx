import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/navbar";
import { Hero } from "../components/sections/hero";
import { Services } from "../components/sections/services";
import { WhyUs } from "../components/sections/why-us";  

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyUs />
      </main>

      <Footer />
    </>
  );
}
