import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MediaTabsSection from "../../components/MediaTabsSection";

export default function MediaPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <MediaTabsSection />

      <Footer />
    </main>
  );
}