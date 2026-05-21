import Navbar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import DownloadCTA from "@/components/sections/DownloadCTA";

export default function App() {
  return (
    <main className="relative min-h-screen">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
      />
      <Navbar />
      <div className="relative mx-auto">
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <FAQ />
        <DownloadCTA />
        <Footer />
      </div>
    </main>
  );
}
