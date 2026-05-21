import Navbar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";

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
      </div>
    </main>
  );
}
