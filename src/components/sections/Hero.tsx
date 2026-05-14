export default function Hero() {
  return (
    <section
      className="w-full relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 96px)" }}
    >
      <div className="relative w-full h-full max-w-7xl mx-auto px-6 py-16 flex gap-20">
        <div className="flex flex-col justify-center flex-1 max-w-xl">
          <h1
            className="font-display leading-none tracking-tight"
            style={{ color: "var(--c1)" }}
          >
            <span
              className="block font-bold"
              style={{ fontSize: "clamp(52px, 6vw, 78px)" }}
            >
              Wifi Manager
            </span>

            <span
              className="block font-normal whitespace-nowrap"
              style={{ fontSize: "clamp(42px, 5vw, 62px)" }}
            >
              Smart Management
            </span>

            <span
              className="block font-normal"
              style={{ fontSize: "clamp(42px, 5vw, 62px)" }}
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
      </div>
    </section>
  );
}
