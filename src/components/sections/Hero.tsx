import HeroFooter from "@/components/ui/hero/HeroFooter";
import heroImage from "@/assets/img/stats-screen.png";

export default function Hero() {
  return (
    <section
      className="w-full relative overflow-hidden flex flex-col min-h-screen mt-5"
      style={{ minHeight: "calc(100vh - 98px)" }}
    >
      <div className="w-full h-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-20 flex-1">
        <div className="flex flex-col justify-center flex-1 max-w-xl">
          <h1
            className="font-display tracking-tight leading-none"
            style={{ color: "var(--c1)" }}
          >
            <span
              className="block font-bold text-transparent bg-clip-text bg-linear-to-r from-(--accent-lt) to-accent-foreground"
              style={{ fontSize: "clamp(40px, 6vw, 78px)" }}
            >
              Mifi Manager
            </span>

            <span
              className="block font-normal"
              style={{ fontSize: "clamp(30px, 5vw, 62px)" }}
            >
              Smart MiFi Control
            </span>

            <span
              className="block font-normal"
              style={{ fontSize: "clamp(30px, 5vw, 62px)" }}
            >
              in your hands
            </span>
          </h1>

          <p className="mt-8 text-base leading-7 max-w-lg text-(--c3)">
            Manage your ZTE MiFi router directly from your phone with a smooth
            and easy-to-use experience. No browser tabs, no complicated web
            portals — just fast access, smart controls, and full management of
            your hotspot in one clean app.
          </p>
        </div>
        <div className="relative flex items-center justify-center flex-1">
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "min(680px, 100%)",
              height: "min(680px, 100%)",
              background: "var(--accent-d)",
            }}
          />

          <img
            src={heroImage}
            alt="mifi manager app preview"
            style={{ width: "min(320px, 80%)", height: "auto" }}
            className="object-contain drop-shadow-2xl relative z-10"
          />
        </div>
      </div>
      <div className="mt-auto w-full">
        <HeroFooter />
      </div>
    </section>
  );
}
