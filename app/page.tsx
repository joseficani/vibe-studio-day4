import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WorkGrid from "../components/WorkGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <WorkGrid />
      <Footer />
    </main>
  );
}