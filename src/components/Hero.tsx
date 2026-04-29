"use client";
import CountUp from "react-countup";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="hero-section" style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ffffff 0%, #e8f6ff 50%, #d0ecff 100%)",
      position: "relative",
      display: "flex",
      alignItems: "center",
      paddingTop: "120px",
      scrollMarginTop: "100px"
    }}>
      <div style={{ position: "absolute", top: "-120px", right: "-120px", width: 600, height: 600, background: "rgba(0,137,211,0.06)", borderRadius: "50%", pointerEvents: "none" }} />
      <div className="container-custom" style={{ width: "100%" }}>
        <div className="hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 48,
          alignItems: "center"
        }}>
          <div className="animate-fadeup hero-content-block" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <h2 className="hero-title-mobile" style={{ fontSize: "clamp(2.5rem, 8vw, 3rem)", fontWeight: 900, color: "var(--gray-900)", lineHeight: 1.1, marginBottom: 24 }}>
              Smart Energy.<br />
              Reliable Power.<br />
              <span style={{ color: "var(--primary)" }}>Always On.</span>
            </h2>
            <p className="hero-desc-mobile" style={{ fontSize: "clamp(0.85rem, 2vw, 0.50rem)", color: "var(--gray-500)", lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
              Experience the future of energy with Sunbird Hybrid Solar Systems. Maximize solar use, store energy, and ensure uninterrupted power.
            </p>
            <div className="hero-btns-mobile" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              <Link href="#contact" className="btn btn-primary">Get Started</Link>
              <Link href="#about" className="btn btn-outline">About Us</Link>
            </div>

            {/* REFINED MICRO-GLASS STATS BAR */}
            <div className="hero-stats-glass-compact">
              {[
                { val: 10, lab: "Years experience", suf: "+" },
                { val: 500, lab: "Projects done", suf: "+" },
                { val: 100, lab: "Happy clients", suf: "%" }
              ].map((s) => (
                <div key={s.lab} className="compact-stat-item">
                  <div className="compact-stat-number">
                    <CountUp end={s.val} suffix={s.suf} />
                  </div>
                  <div className="compact-stat-label">{s.lab}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image-block" />
        </div>
      </div>
    </section>
  );
}
