import { Button } from "../button";
import SignalIcon from "../../svg/signalicon";
import DevicesIcon from "../../svg/devicesicon";
import SmsIcon from "../../svg/smsicon";

export default function HeroFooter() {
  return (
    <div className="relative inline-flex w-full">
      {/* CTA block */}
      <div
        className="flex items-center justify-center px-8 py-8 rounded-tr-2xl shrink-0"
        style={{ background: "var(--bg-3)", width: "280px" }}
      >
        <Button className="px-9! py-7! rounded-full bg-primary! text-white uppercase tracking-widest font-bold text-sm">
          Download App
        </Button>
      </div>
      <div
        className="flex items-center gap-4 px-6 py-8 flex-1 border-l rounded-t-2xl"
        style={{ background: "var(--bg-3)", borderColor: "var(--b1)" }}
      >
        <div
          className="flex items-center justify-center rounded-lg shrink-0"
          style={{
            width: "42px",
            height: "42px",
            background: "var(--accent)",
            color: "white",
          }}
        >
          <SignalIcon />
        </div>
        <div>
          <p
            className="font-display font-bold text-sm uppercase tracking-wide"
            style={{ color: "var(--c1)" }}
          >
            Signal Monitoring →
          </p>
          <p className="font-body text-xs mt-1" style={{ color: "var(--c3)" }}>
            Live dBm & RSRP values at a glance.
          </p>
        </div>
      </div>
      <div
        className="flex items-center gap-4 px-6 py-8 flex-1 border-l rounded-t-2xl"
        style={{ background: "var(--bg-3)", borderColor: "var(--b1)" }}
      >
        <div
          className="flex items-center justify-center rounded-lg shrink-0"
          style={{
            width: "42px",
            height: "42px",
            background: "var(--accent)",
            color: "white",
          }}
        >
          <DevicesIcon />
        </div>
        <div>
          <p
            className="font-display font-bold text-sm uppercase tracking-wide"
            style={{ color: "var(--c1)" }}
          >
            Device Control →
          </p>
          <p className="font-body text-xs mt-1" style={{ color: "var(--c3)" }}>
            Block, rename & track every connection.
          </p>
        </div>
      </div>
      <div
        className="flex items-center gap-4 px-6 py-8 flex-1 border-l rounded-tl-2xl"
        style={{ background: "var(--bg-3)", borderColor: "var(--b1)" }}
      >
        <div
          className="flex items-center justify-center rounded-lg shrink-0"
          style={{
            width: "42px",
            height: "42px",
            background: "var(--accent)",
            color: "white",
          }}
        >
          <SmsIcon />
        </div>
        <div>
          <p
            className="font-display font-bold text-sm uppercase tracking-wide"
            style={{ color: "var(--c1)" }}
          >
            SMS Inbox →
          </p>
          <p className="font-body text-xs mt-1" style={{ color: "var(--c3)" }}>
            Read & send messages from the router.
          </p>
        </div>
      </div>
    </div>
  );
}
