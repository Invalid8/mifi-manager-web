import { useState } from "react";

const faqs = [
  {
    question: "Which routers does MiFi Manager support?",
    answer:
      "MiFi Manager supports ZTE MF-series portable routers, which are commonly sold by MTN and Airtel Nigeria. The app communicates directly with the router's built-in admin protocol.",
  },
  {
    question: "Is my router password stored securely?",
    answer:
      "Yes. Your credentials are encrypted using Android's SecureStore — they never leave your device and are never sent to any server.",
  },
  {
    question: "Does it work without internet?",
    answer:
      "Yes. The app communicates entirely over your local Wi-Fi network. No internet connection is required — just connect your phone to the MiFi's Wi-Fi and the app handles the rest.",
  },
  {
    question: "Which carriers are supported?",
    answer:
      "MTN Nigeria and Airtel Nigeria are fully supported, with intelligent SMS parsing for balance checks, data expiry, top-up confirmations and low data warnings. More carriers can be added via the plugin system.",
  },
  {
    question: "Is it free to download?",
    answer:
      "Yes. MiFi Manager is completely free to download and use. No subscription, no account, no hidden fees.",
  },
  {
    question: "What permissions does the app need?",
    answer:
      "The app requires ACCESS_FINE_LOCATION to read your Wi-Fi network name, POST_NOTIFICATIONS for SMS and battery alerts, and RECEIVE_BOOT_COMPLETED to resume background polling after a restart.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "var(--b1)" }}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <p
          className="font-display font-semibold text-base"
          style={{ color: "var(--c1)" }}
        >
          {question}
        </p>
        <span
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            background: isOpen ? "var(--accent)" : "var(--bg-3)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? "var(--c2)" : "var(--c3)"}
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </div>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <p
          className="font-body text-sm leading-relaxed pb-5"
          style={{ color: "var(--c3)" }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full py-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
        {/* Left — header */}
        <div className="flex flex-col gap-4 lg:w-80 shrink-0">
          <p
            className="font-body font-semibold text-lg uppercase tracking-widest flex items-center gap-2"
            style={{ color: "var(--accent)" }}
          >
            <div className="bg-accent! w-4 h-0.5" />
            FAQ
          </p>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--c1)" }}
          >
            Answers to your questions
          </h2>
          <p
            className="font-body text-base leading-relaxed"
            style={{ color: "var(--c3)" }}
          >
            Can't find what you're looking for? Reach out on the Play Store
            review section.
          </p>
        </div>

        {/* Right — accordion */}
        <div className="flex-1 w-full">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
