"use client";
import { Cpu, Battery, Zap, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { 
      title: "Premium Equipment", 
      desc: "Tier-1 solar panels and industrial inverters. Tier-1 panels with 25-year warranty. Industrial grade hybrid inverters. High-cycle battery storage systems. Built to withstand extreme weather.", 
      icon: <Battery size={32} />,
      img: "/panel.webp"
    },
    { 
      title: "24/7 Power Security", 
      desc: "Uninterrupted energy with smart hybrid storage. Automatic transition to battery power. Keep essential appliances running. Protect sensitive electronics from surges. Peace of mind during any outage.", 
      icon: <Zap size={32} />,
      img: "/banner.webp"
    },
    { 
      title: "Cost Efficiency", 
      desc: "Drastically reduce electricity bills and maximize ROI. Slash your grid dependency by 80%. Protect yourself from rising tariffs. Short payback period for investment. Tax benefits and govt subsidies available.", 
      icon: <Zap size={32} color="var(--primary)" />,
      img: "/costefeicnly.jpg"
    },
    { 
      title: "Expert Support", 
      desc: "Dedicated 24/7 maintenance and technical assistance. Remote diagnostic capabilities. Regular preventive maintenance checks. On-site support within 24 hours. Dedicated relationship managers for you.", 
      icon: <ShieldCheck size={32} color="var(--primary)" />,
      img: "/24house.webp"
    },
  ];

  return (
    <section id="why-choose-us" className="section" style={{ background: "var(--gray-50)", scrollMarginTop: "100px" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-label">The Sunbird Edge</span>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2rem)" }}>Why Choose Sunbird?</h2>
        </div>

        <div className="features-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24
        }}>
          {features.map((item) => (
            <div 
              key={item.title} 
              className="card animate-fadeup" 
              style={{ 
                padding: 0, 
                overflow: "hidden", 
                position: "relative",
                minHeight: "340px", // Overridden by CSS on mobile to 220px
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Changed from flex-end to center
                border: "none",
                borderRadius: 24
              }}
            >
              {/* Background Image with Overlay */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)) , url('${item.img}')`, // Darker overlay for centering
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1,
                transition: "transform 0.5s ease"
              }} className="hover-zoom" />

              {/* Content Overlay */}
              <div style={{ 
                position: "relative", 
                zIndex: 2, 
                padding: "clamp(12px, 3vw, 24px)", // Scaled padding for mobile 2-col
                color: "white",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
                <div style={{ 
                  color: "var(--primary)", 
                  marginBottom: 12, 
                  background: "white", 
                  width: "clamp(40px, 8vw, 50px)", 
                  height: "clamp(40px, 8vw, 50px)", 
                  borderRadius: "50%", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
                }}>
                  {item.icon}
                </div>
                <h4 style={{ fontWeight: 800, fontSize: "clamp(0.85rem, 3vw, 1.05rem)", marginBottom: 8 }}>{item.title}</h4>
                <p style={{ 
                  color: "rgba(255,255,255,0.9)", 
                  fontSize: "clamp(0.65rem, 2.5vw, 0.75rem)", 
                  lineHeight: 1.4,
                  margin: 0,
                  maxWidth: "100%"
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
