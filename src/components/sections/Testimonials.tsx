const testimonials = [
  {
    quote:
      "Finally I can see who's on my network and kick them off without opening a browser. This app is exactly what I needed.",
    name: "Chidi A.",
    location: "Lagos",
    rating: 5,
  },
  {
    quote:
      "The SMS inbox alone is worth it. I catch my data bundle expiry before it runs out every time now.",
    name: "Amaka O.",
    location: "Abuja",
    rating: 5,
  },
  {
    quote:
      "Clean app, works perfectly on my MTN MiFi. Battery and signal always visible. No complaints.",
    name: "Tunde B.",
    location: "Port Harcourt",
    rating: 4,
  },
];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "var(--accent)" : "none"}
    stroke="var(--accent)"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-24"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col gap-4 mb-16">
          <p
            className="font-body font-semibold text-lg uppercase tracking-widest flex items-center gap-2"
            style={{ color: "var(--accent)" }}
          >
            <div className="bg-accent! w-4 h-0.5" />
            Testimonials
          </p>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--c1)" }}
          >
            What users are saying
          </h2>
          <p
            className="font-body text-base leading-relaxed"
            style={{ color: "var(--c3)", maxWidth: "440px" }}
          >
            Real feedback from people managing their hotspot daily.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 p-8 rounded-2xl"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--b1)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
            >
              {/* Quote mark */}
              <span
                className="font-display font-bold"
                style={{
                  fontSize: "64px",
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                "
              </span>

              {/* Quote */}
              <p
                className="font-body text-base leading-relaxed flex-1"
                style={{ color: "var(--c1)", marginTop: "-24px" }}
              >
                {t.quote}
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} filled={j < t.rating} />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0"
                  style={{
                    background: "var(--accent)",
                    color: "var(--c2)",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="font-display font-semibold text-sm"
                    style={{ color: "var(--c1)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-body text-xs"
                    style={{ color: "var(--c4)" }}
                  >
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
