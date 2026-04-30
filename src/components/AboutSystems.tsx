"use client";
import { CheckCircle2 } from "lucide-react";

export default function AboutSystems() {
  return (
    <section id="about" className="section" style={{ background: "white", scrollMarginTop: "100px" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-label">Engineering Excellence</span>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2rem)" }}>About Our Systems</h2>
          <p style={{ color: "var(--gray-500)", maxWidth: 700, margin: "16px auto 0" }}>
            We specialize in state-of-the-art solar configurations designed for maximum efficiency and long-term reliability.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
          {/* ON-GRID SYSTEM */}
          <div className="card animate-fadeup" style={{ padding: 0, overflow: "hidden", borderRadius: 24 }}>
            <div style={{ height: 240, background: "white", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--gray-100)" }}>
              <img src="/ongrid.webp" alt="On-Grid Solar System Diagram" style={{ width: "100%", height: "100%", objectFit: "contain", padding: 16 }} />
            </div>
            <div style={{ padding: 32 }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 16, color: "var(--gray-900)" }}>On-Grid Solar System</h3>
              <p style={{ color: "var(--gray-600)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 24 }}>
                The most cost-effective solution for urban environments. Sync directly with the utility grid to reduce bills and export excess energy via net-metering.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Zero Battery Maintenance", "Highest ROI", "Smart Grid Integration"].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontSize: "0.9rem", fontWeight: 600 }}>
                    <CheckCircle2 size={18} color="var(--primary)" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* HYBRID SYSTEM */}
          <div className="card animate-fadeup" style={{ padding: 0, overflow: "hidden", border: "2px solid var(--primary-light)", borderRadius: 24 }}>
            <div style={{ height: 240, background: "white", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--gray-100)" }}>
              <img src="/hybrid.webp" alt="Hybrid Solar System Diagram" style={{ width: "100%", height: "100%", objectFit: "contain", padding: 16 }} />
            </div>
            <div style={{ padding: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--gray-900)" }}>Hybrid Solar System</h3>
                <span style={{ background: "var(--primary)", color: "white", fontSize: "0.7rem", fontWeight: 800, padding: "4px 10px", borderRadius: 20, textTransform: "uppercase" }}>Recommended</span>
              </div>
              <p style={{ color: "var(--gray-600)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 24 }}>
                The ultimate in energy independence. Combine grid connectivity with smart battery storage to ensure your power stays on even during grid failures.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["24/7 Power Security", "Smart Load Management", "Export & Backup Control"].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontSize: "0.9rem", fontWeight: 600 }}>
                    <CheckCircle2 size={18} color="var(--primary)" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
