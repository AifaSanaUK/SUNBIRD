import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SUNBIRD Power Solutions",
  description: "Learn about Sunbird's mission, values, and commitment to sustainable solar energy solutions.",
};

export default function AboutPage() {
  const values = [
    { icon: "🌱", title: "Sustainability", desc: "Every system we install contributes to a cleaner, greener planet for future generations." },
    { icon: "🔬", title: "Innovation", desc: "We integrate the latest hybrid inverter technology and smart monitoring into every project." },
    { icon: "🤝", title: "Customer First", desc: "Your energy goals are our blueprint. We tailor every solution to your exact needs." },
    { icon: "🛡️", title: "Reliability", desc: "Our systems are built to perform with 99.8% uptime backed by a 25-year warranty." },
  ];

  const milestones = [
    { year: "2015", event: "Sunbird Power Solutions founded" },
    { year: "2017", event: "First 100 residential installations completed" },
    { year: "2019", event: "Launched hybrid inverter product line" },
    { year: "2021", event: "Expanded to commercial & industrial sector" },
    { year: "2023", event: "500+ successful installations achieved" },
    { year: "2025", event: "Smart monitoring app launched" },
  ];

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>Our Story</span>
          <h1 style={{ marginTop: 12, marginBottom: 16 }}>Powering a Sustainable Future</h1>
          <p style={{ maxWidth: 560 }}>
            Since 2015, Sunbird has been at the forefront of renewable energy — delivering smart, reliable, and cost-effective solar power systems across the region.
          </p>
        </div>
      </div>

      {/* Mission + System Diagram */}
      <section className="section">
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Smart Energy for Everyone</h2>
              <div className="divider" />
              <p style={{ color: "var(--gray-500)", lineHeight: 1.9, marginBottom: 20 }}>
                At Sunbird, we believe that energy should be clean, affordable, and always available. Our hybrid solar systems bridge the gap between traditional power grids and a fully renewable future.
              </p>
              <p style={{ color: "var(--gray-500)", lineHeight: 1.9, marginBottom: 32 }}>
                We don't just install panels — we design intelligent energy ecosystems that combine PV arrays, lithium-ion battery storage, hybrid inverters, and real-time smart monitoring into one seamless system.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {["Customized designs for every building type", "End-to-end installation and after-sales support", "Real-time monitoring via RS485 and mobile app", "25-year performance warranty on all systems"].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--primary-light)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                    <span style={{ color: "var(--gray-600)", fontSize: "0.95rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Flow diagram visual */}
            <div>
              <div style={{ background: "var(--gray-50)", borderRadius: 24, padding: 36 }}>
                <div style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", color: "var(--primary)", textAlign: "center", marginBottom: 24 }}>ENERGY FLOW ARCHITECTURE</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
                  {/* Top row */}
                  <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
                    {[{ icon: "🔆", label: "SOLAR" }, { icon: "🔌", label: "GRID" }].map((n) => (
                      <div key={n.label} style={{ background: "var(--primary)", borderRadius: 14, padding: "16px 20px", textAlign: "center", color: "white", minWidth: 90 }}>
                        <div style={{ fontSize: "1.8rem" }}>{n.icon}</div>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, marginTop: 4 }}>{n.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Arrows down */}
                  <div style={{ fontSize: "1.5rem", color: "var(--primary)" }}>↓</div>
                  {/* Inverter */}
                  <div style={{ background: "var(--gray-900)", borderRadius: 14, padding: "18px 32px", textAlign: "center", color: "white" }}>
                    <div style={{ fontSize: "1.5rem" }}>⚡</div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, marginTop: 4 }}>HYBRID INVERTER</div>
                  </div>
                  <div style={{ fontSize: "1.5rem", color: "var(--primary)" }}>↓</div>
                  {/* House */}
                  <div style={{ background: "var(--primary)", borderRadius: 14, padding: "16px 32px", textAlign: "center", color: "white" }}>
                    <div style={{ fontSize: "1.8rem" }}>🏠</div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, marginTop: 4 }}>HOME / BUSINESS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Our Core Values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
            {values.map((v) => (
              <div key={v.title} className="card" style={{ padding: 32, textAlign: "center" }}>
                <div style={{ fontSize: "2.8rem", marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: 12, fontSize: "1.05rem" }}>{v.title}</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "0.875rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Standard Section (New) */}
      <section className="section">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Our Standard</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Professional Identity</h2>
            <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
              We represent the Sunbird brand with pride, from our field equipment to our professional consultations.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <img src="/shirt.webp" alt="Sunbird Staff Shirt" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
              <div style={{ padding: 24, textAlign: "center" }}>
                <h3 style={{ fontWeight: 800, fontSize: "1.1rem" }}>Official Team Apparel</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "0.85rem", marginTop: 8 }}>Our engineers and technicians are easily identifiable in official Sunbird gear.</p>
              </div>
            </div>
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <img src="/cap.png" alt="Sunbird Cap" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
              <div style={{ padding: 24, textAlign: "center" }}>
                <h3 style={{ fontWeight: 800, fontSize: "1.1rem" }}>Branded Equipment</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "0.85rem", marginTop: 8 }}>Attention to detail in every aspect of our professional appearance.</p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32, marginTop: 32 }}>
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <img src="/visitcard.webp" alt="Sunbird Business Card Front" style={{ width: "100%", height: "240px", objectFit: "contain", background: "#f8fafc" }} />
              <div style={{ padding: 24, textAlign: "center" }}>
                <h3 style={{ fontWeight: 800, fontSize: "1.1rem" }}>Professional Consultation</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "0.85rem", marginTop: 8 }}>Connect with our experts for personalized energy planning.</p>
              </div>
            </div>
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <img src="/visitcard1.webp" alt="Sunbird Business Card Back" style={{ width: "100%", height: "240px", objectFit: "contain", background: "#f8fafc" }} />
              <div style={{ padding: 24, textAlign: "center" }}>
                <h3 style={{ fontWeight: 800, fontSize: "1.1rem" }}>Seamless Communication</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "0.85rem", marginTop: 8 }}>Always accessible for support and smart monitoring guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Our Journey</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Milestones</h2>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "var(--gray-200)", transform: "translateX(-50%)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {milestones.map((m, i) => (
                <div key={m.year} style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", position: "relative" }}>
                  <div style={{
                    width: "45%",
                    background: "white",
                    border: "1px solid var(--gray-200)",
                    borderRadius: 16,
                    padding: "20px 28px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  }}>
                    <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--primary)", marginBottom: 6 }}>{m.year}</div>
                    <div style={{ color: "var(--gray-700)", fontSize: "0.9rem" }}>{m.event}</div>
                  </div>
                  <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 14, height: 14, borderRadius: "50%", background: "var(--primary)", border: "3px solid white", boxShadow: "0 0 0 3px var(--primary-light)", zIndex: 1 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, #004f80 100%)", padding: "80px 0" }}>
        <div className="container-custom" style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", fontSize: "2.2rem", fontWeight: 800, marginBottom: 16 }}>Join the Solar Revolution</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 36 }}>Let's design the perfect energy system for your home or business.</p>
          <Link href="/contact" className="btn btn-white">Get a Free Consultation →</Link>
        </div>
      </section>
    </>
  );
}
