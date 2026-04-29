import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | SUNBIRD Power Solutions",
  description: "Explore Sunbird's On-Grid, Off-Grid, and Hybrid solar power solutions for homes and businesses.",
};

const services = [
  {
    icon: "🔆",
    badge: "ON-GRID",
    badgeColor: "#0089D3",
    title: "On-Grid Solar System",
    desc: "Connect your solar panels directly to the utility grid. Generate clean energy during daylight hours and export any surplus back to the grid — reducing your electricity bills significantly.",
    features: ["Net metering support", "Lower installation cost", "Ideal for stable-grid areas", "Real-time energy export monitoring", "ROI in 3–5 years"],
    featured: false,
  },
  {
    icon: "🏝️",
    badge: "OFF-GRID",
    badgeColor: "#e65100",
    title: "Off-Grid Solar System",
    desc: "Achieve complete energy independence with our high-capacity battery storage solutions. Designed for remote areas or those who want zero dependence on the utility grid.",
    features: ["Complete grid independence", "High-capacity Li-Ion batteries", "Perfect for rural & remote areas", "Zero electricity bills", "Backup for extended outages"],
    featured: false,
  },
  {
    icon: "⚡",
    badge: "HYBRID ⭐",
    badgeColor: "#7b1fa2",
    title: "Hybrid Solar System",
    desc: "The ultimate smart energy solution. Combines PV solar, lithium-ion battery storage, and grid connection — all managed by an intelligent hybrid inverter with RS485 smart monitoring.",
    features: ["Solar + Battery + Grid combined", "Uninterrupted power supply", "Smart RS485 / App monitoring", "Automatic source switching", "Grid export & import support", "Critical load backup during outage"],
    featured: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>Solar Solutions</span>
          <h1 style={{ marginTop: 12, marginBottom: 16 }}>Our Solar Systems</h1>
          <p style={{ maxWidth: 520 }}>Tailored energy systems for every home, business, and scale — backed by smart monitoring and a 25-year warranty.</p>
        </div>
      </div>

      {/* Service Cards */}
      <section className="section">
        <div className="container-custom">
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {services.map((s, i) => (
              <div key={s.title} className="card" style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                overflow: "visible",
                border: s.featured ? "2px solid var(--primary)" : "1px solid var(--gray-100)",
              }}>
                {/* Content */}
                <div style={{ padding: "48px 48px", order: i % 2 === 0 ? 0 : 1 }}>
                  <span style={{
                    display: "inline-block",
                    background: s.featured ? "var(--primary-light)" : "var(--gray-100)",
                    color: s.featured ? "var(--primary)" : "var(--gray-500)",
                    fontSize: "0.75rem", fontWeight: 700,
                    padding: "5px 14px", borderRadius: 100, marginBottom: 20,
                    letterSpacing: "0.1em",
                  }}>{s.badge}</span>
                  <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16 }}>{s.title}</h2>
                  <p style={{ color: "var(--gray-500)", lineHeight: 1.8, marginBottom: 28, fontSize: "0.95rem" }}>{s.desc}</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                    {s.features.map((f) => (
                      <li key={f} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: "0.9rem" }}>
                        <span style={{ color: "var(--primary)", fontWeight: 700 }}>✦</span>
                        <span style={{ color: "var(--gray-600)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={s.featured ? "btn btn-primary" : "btn btn-outline"}>
                    Get a Quote →
                  </Link>
                </div>
                {/* Visual */}
                <div style={{
                  background: s.featured ? "linear-gradient(135deg, var(--primary) 0%, #004f80 100%)" : "var(--gray-50)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: 48, order: i % 2 === 0 ? 1 : 0,
                  minHeight: 360,
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "5rem", marginBottom: 20 }}>{s.icon}</div>
                    <div style={{ fontWeight: 800, fontSize: "1.2rem", color: s.featured ? "white" : "var(--gray-900)", marginBottom: 8 }}>{s.title}</div>
                    {/* Mini flow for hybrid */}
                    {s.featured && (
                      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
                        {["☀️ Solar", "🔋 Battery", "🔌 Grid"].map((item) => (
                          <div key={item} style={{ background: "rgba(255,255,255,0.15)", color: "white", padding: "8px 14px", borderRadius: 10, fontSize: "0.8rem", fontWeight: 600 }}>{item}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--primary)", padding: "64px 0" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, textAlign: "center" }}>
            {[["500+", "Installations"], ["99.8%", "System Uptime"], ["25yr", "Panel Warranty"], ["40%", "Avg Bill Reduction"]].map(([num, label]) => (
              <div key={label} style={{ color: "white" }}>
                <div style={{ fontSize: "2.8rem", fontWeight: 900 }}>{num}</div>
                <div style={{ fontSize: "0.9rem", opacity: 0.75, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Process</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>How We Work</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28 }}>
            {[
              { step: "01", icon: "📋", title: "Consultation", desc: "We assess your energy needs and site conditions." },
              { step: "02", icon: "📐", title: "Custom Design", desc: "Our engineers design a tailored solar system for you." },
              { step: "03", icon: "🔧", title: "Installation", desc: "Professional installation with minimal disruption." },
              { step: "04", icon: "📱", title: "Monitoring", desc: "Real-time monitoring and 24/7 after-sales support." },
            ].map((p) => (
              <div key={p.step} className="card" style={{ padding: 32, textAlign: "center", position: "relative" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--primary)", letterSpacing: "0.1em", marginBottom: 12 }}>STEP {p.step}</div>
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "0.875rem", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--gray-900)", padding: "80px 0" }}>
        <div className="container-custom" style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", fontSize: "2.2rem", fontWeight: 800, marginBottom: 16 }}>Not Sure Which System Is Right for You?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36 }}>Talk to our solar experts and we'll guide you to the perfect solution.</p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "16px 36px", fontSize: "1rem" }}>Book a Free Consultation →</Link>
        </div>
      </section>
    </>
  );
}
