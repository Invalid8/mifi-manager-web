export default function Footer() {
  return (
    <footer
      className="w-full py-12 border-t"
      style={{ background: "var(--bg-2)", borderColor: "var(--b1)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="MiFi Manager"
              className="w-7 h-7 rounded-full"
            />
            <span
              className="font-display font-bold text-base"
              style={{ color: "var(--c1)" }}
            >
              MiFi Manager
            </span>
          </div>
          <p className="font-body text-xs" style={{ color: "var(--c4)" }}>
            Take control of your portable hotspot
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {["Features", "How It Works", "Download"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-body text-sm transition-colors duration-200 hover:text-accent"
              style={{ color: "var(--c3)" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-body text-xs" style={{ color: "var(--c4)" }}>
          © 2025 MiFi Manager. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
