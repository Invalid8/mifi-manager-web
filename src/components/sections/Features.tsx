import hub1 from "@/assets/img/stats-screen.png";
import settings from "@/assets/img/settings-screen.png";

const features = [
  {
    tag: "Dashboard",
    title: "Everything at a glance",
    desc: "Your connection status, battery level, signal strength, live speeds and monthly data usage — all on one screen. No digging through menus.",
    bullets: [
      "Connection status & network type (4G/3G/2G)",
      "Battery percentage with charging indicator",
      "Live download & upload speeds",
      "Monthly Rx/Tx data with progress bar",
    ],
    image: hub1,
    reverse: false,
  },
  {
    tag: "Devices & Control",
    title: "Know who's on your network",
    desc: "See every device connected to your MiFi — their hostname, IP and MAC address. Rename them, block them, or kick them off instantly.",
    bullets: [
      "Live device list with auto-refresh every 15s",
      "Block or unblock by MAC address",
      "Assign custom names to devices",
      "Device type icons — phones, laptops, tablets",
    ],
    image: settings,
    reverse: true,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4">
          <p
            className="font-body font-semibold text-lg uppercase tracking-widest flex items-center gap-2"
            style={{ color: "var(--accent)" }}
          >
            <div className="bg-accent! w-4 h-0.5" />
            Features
          </p>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--c1)" }}
          >
            Built for real control
          </h2>
          <p
            className="font-body text-base leading-relaxed"
            style={{ color: "var(--c3)", maxWidth: "480px" }}
          >
            Everything your router's web portal does — done better, faster and
            natively on your phone.
          </p>
        </div>
        <div className="flex flex-col gap-24">
          {features.map((feature) => (
            <div
              key={feature.tag}
              className={`flex flex-col gap-12 items-center ${
                feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="flex-1 flex flex-col gap-6">
                <span
                  className="inline-block font-body font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full w-fit"
                  style={{
                    // background: "var(--accent-d)",
                    color: "var(--accent)",
                    // border: "1px solid var(--accent)",
                  }}
                >
                  {feature.tag}
                </span>
                <h3
                  className="font-display font-bold leading-tight"
                  style={{
                    fontSize: "clamp(26px, 3vw, 40px)",
                    color: "var(--c1)",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: "var(--c3)", maxWidth: "440px" }}
                >
                  {feature.desc}
                </p>
                <ul className="flex flex-col gap-3 mt-2">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: "var(--accent)" }}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="#111"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        className="font-body text-sm leading-relaxed"
                        style={{ color: "var(--c3)" }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                  <div
                    className="absolute rounded-full blur-3xl"
                    style={{
                      width: "320px",
                      height: "320px",
                      background: "var(--accent-d)",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{ width: "min(280px, 75vw)", height: "auto" }}
                    className="object-contain drop-shadow-2xl relative z-10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
