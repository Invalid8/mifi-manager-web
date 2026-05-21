import heroImage from "@/assets/img/stats-screen.png";
import { Button } from "@/components/ui/button";

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="w-full py-24 relative overflow-hidden"
      style={{ background: "var(--accent)" }}
    >
      {/* Background glow */}
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          background: "rgba(255,255,255,0.15)",
          top: "-100px",
          right: "-100px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left — text */}
        <div className="flex flex-col gap-6 flex-1">
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", color: "var(--c2)" }}
          >
            Take control of <br /> your hotspot today
          </h2>
          <p
            className="font-body text-base leading-relaxed"
            style={{ color: "var(--c2)", opacity: 0.75, maxWidth: "400px" }}
          >
            Free on Android. No account needed — just connect to your MiFi and
            go.
          </p>

          <div className="flex flex-col gap-2">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="w-fit px-8! py-5! rounded-full font-display font-bold text-sm uppercase tracking-wide"
                style={{
                  background: "var(--c2)",
                  color: "var(--accent)",
                }}
              >
                Download on Google Play
              </Button>
            </a>
            <p
              className="font-body text-xs"
              style={{ color: "var(--c2)", opacity: 0.6 }}
            >
              Free to download · Android only · No account needed
            </p>
          </div>
        </div>

        {/* Right — phone */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={heroImage}
            alt="MiFi Manager app"
            style={{ width: "min(260px, 70vw)", height: "auto" }}
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
