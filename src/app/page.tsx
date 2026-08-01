import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        id="home"
        className="flex min-h-screen items-center justify-center bg-[#09090B]"
      >
        <h1 className="font-heading text-5xl font-bold text-white">sh Nexus</h1>
      </main>

      <Footer />
    </>
  );
}
