import SettingScreen from "@/assets/img/settings-screen.png";
import StatsSceen from "@/assets/img/stats-screen.png";
import HubScreen from "@/assets/img/stats-screen.png";


export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect to your MiFi",
      desc: "Join the same Wi-Fi network as your ZTE MiFi router. The app detects it automatically.",
      image: HubScreen,
    },
    {
      number: "02",
      title: "Login securely",
      desc: "Enter your router admin password once. SHA-256 challenge auth — same security as the web portal.",
      image: SettingScreen,
    },
    {
      number: "03",
      title: "Take full control",
      desc: "Monitor signal, manage devices, read SMS, check data balance — all from one clean dashboard.",
      image: StatsSceen,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full py-24"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col gap-4 mb-16">
          <p
            className="font-body font-semibold text-sm uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            How it works
          </p>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--c1)" }}
          >
            Three steps to full control
          </h2>
          <p
            className="font-body text-base leading-relaxed"
            style={{ color: "var(--c3)", maxWidth: "480px" }}
          >
            No complicated setup. No browser tabs. Just connect, login and
            manage everything from your phone.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col lg:flex-row items-center gap-12 py-16 border-t ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              style={{ borderColor: "var(--b1)" }}
            >
              {/* Text side */}
              <div className="flex-1 flex flex-col gap-6">
                <span
                  className="font-display font-bold"
                  style={{
                    fontSize: "clamp(64px, 8vw, 100px)",
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>
                <h3
                  className="font-display font-bold"
                  style={{
                    fontSize: "clamp(24px, 3vw, 36px)",
                    color: "var(--c1)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: "var(--c3)", maxWidth: "400px" }}
                >
                  {step.desc}
                </p>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                  <div
                    className="absolute rounded-full blur-3xl"
                    style={{
                      width: "300px",
                      height: "300px",
                      background: "var(--accent-d)",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <img
                    src={step.image}
                    alt={step.title}
                    style={{ width: "min(260px, 70vw)", height: "auto" }}
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
