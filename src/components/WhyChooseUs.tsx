"use client";
import { Cpu, Battery, Zap, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section" style={{ background: "var(--gray-50)", scrollMarginTop: "100px" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-label">The Sunbird Edge</span>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2rem)" }}>Why Choose Sunbird?</h2>
        </div>

        <div className="features-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          marginBottom: 80
        }}>
          {[
            { title: "Smart Technology", desc: "AI-driven monitoring for peak performance.", icon: <Cpu size={32} /> },
            { title: "Premium Equipment", desc: "Tier-1 solar panels and industrial inverters.", icon: <Battery size={32} /> },
            { title: "24/7 Power Security", desc: "Uninterrupted energy with smart hybrid storage.", icon: <Zap size={32} /> },
            { title: "Certified Expertise", desc: "MNRE approved installers with 10+ years experience.", icon: <ShieldCheck size={32} /> },
            { title: "Cost Efficiency", desc: "Drastically reduce electricity bills and maximize ROI.", icon: <Zap size={32} color="var(--primary)" /> },
            { title: "Expert Support", desc: "Dedicated 24/7 maintenance and technical assistance.", icon: <ShieldCheck size={32} color="var(--primary)" /> },
          ].map((item) => (
            <div key={item.title} className="card animate-fadeup" style={{ textAlign: "center" }}>
              <div style={{ color: "var(--primary)", marginBottom: 20, display: "flex", justifyContent: "center" }}>{item.icon}</div>
              <h4 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: 12 }}>{item.title}</h4>
              <p style={{ color: "var(--gray-500)", fontSize: "0.85rem" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* BRAND ASSET GALLERY */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-label">Our Standard</span>
          <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2rem)" }}>The Sunbird Professionalism</h2>
          <div className="divider" style={{ margin: "24px auto" }} />
        </div>

        <div className="professional-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20
        }}>
          {[
            { title: "Expert Gear", desc: "Branded Cap", img: "/cap.webp" },
            { title: "Team Uniform", desc: "Professional Shirt", img: "/shirt.webp" },
            { title: "Premium Panels", desc: "Tier-1 Quality", img: "/panel.webp" },
            { title: "Visit Card", desc: "Corporate Identity", img: "/visitcard1.webp" }
          ].map((item) => (
            <div key={item.title} className="card animate-fadeup" style={{ padding: 16, textAlign: "center", display: "flex", flexDirection: "column" }}>
              <div style={{
                borderRadius: 16,
                overflow: "hidden",
                marginBottom: 20,
                height: 180,
                background: "#f8f9fa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20
              }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    transition: "transform 0.4s ease"
                  }}
                  className="hover-zoom"
                />
              </div>
              <h4 style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: 6 }}>{item.title}</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--gray-500)", marginBottom: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
