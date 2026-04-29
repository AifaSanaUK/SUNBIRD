"use client";
import CountUp from "react-countup";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="hero-section" style={{
      minHeight: "100vh",
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/banner.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      position: "relative",
      display: "flex",
      alignItems: "center",
      paddingTop: "120px",
      scrollMarginTop: "100px",
      color: "white"
    }}>
      <div className="container-custom" style={{ width: "100%", position: "relative", zIndex: 2 }}>
        <div className="hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 48,
          alignItems: "center"
        }}>
          <div className="animate-fadeup hero-content-block" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <h3 className="hero-title-mobile" style={{
              fontSize: "clamp(1.6rem, 5vw, 2.6rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: 24,
              textShadow: "0 2px 10px rgba(0,0,0,0.3)"
            }}>
              Smart Energy.<br />
              Reliable Power.<br />
              <span style={{ color: "var(--primary)" }}>Always On.</span>
            </h3>
            <p className="hero-desc-mobile" style={{
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 520,
              textShadow: "0 1px 5px rgba(0,0,0,0.2)"
            }}>
              Experience the future of energy with Sunbird Hybrid Solar Systems. Maximize solar use, store energy, and ensure uninterrupted power.
            </p>
            <div className="hero-btns-mobile" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
              <Link href="#contact" className="btn btn-primary" style={{ minWidth: 180 }}>Get Started</Link>
              <Link href="#about" className="btn btn-outline" style={{ minWidth: 180, borderColor: "white", color: "white" }}>About Us</Link>
            </div>

            {/* REFINED MICRO-GLASS STATS BAR */}
            <div className="hero-stats-glass-compact" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              {[
                { val: 10, lab: "Years", suf: "+" },
                { val: 500, lab: "Projects", suf: "+" },
                { val: 100, lab: "Clients", suf: "%" }
              ].map((s) => (
                <div key={s.lab} className="compact-stat-item">
                  <div className="compact-stat-number" style={{ color: "white" }}>
                    <CountUp end={s.val} suffix={s.suf} />
                  </div>
                  <div className="compact-stat-label" style={{ color: "rgba(255,255,255,0.8)" }}>{s.lab}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image-block hide-mobile" />
        </div>
      </div>
    </section>
  );
}
