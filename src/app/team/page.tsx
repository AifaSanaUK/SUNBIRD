import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | SUNBIRD Power Solutions",
  description: "Meet the expert team driving Sunbird's solar energy mission.",
};

const team = [
  { name: "ABHIRAM EK", role: "PURCHASE MANAGER", dept: "Procurement", img: "/purchasemanager.webp", color: "#0089D3" },
  { name: "SUDHI KR", role: "SALES HEAD", dept: "Sales", img: "/saleshead.webp", color: "#00897b" },
  { name: "SAFEER NA", role: "OPERATION HEAD", dept: "Operations", img: "/operationhead.webp", color: "#e65100" },
  { name: "MOHAMMED INAM A", role: "TECHNICAL LEAD", dept: "Engineering", img: "/technicallead.webp", color: "#7b1fa2" },
];

export default function TeamPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>The People</span>
          <h3 style={{ marginTop: 12, marginBottom: 16 }}>Meet Our Team</h3>
          <p style={{ maxWidth: 520 }}>The experts, engineers, and visionaries behind every Sunbird solar system.</p>
        </div>
      </div>

      {/* Leadership Highlight */}
      <section className="section">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Leadership</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>The Team Driving the Solar Revolution</h2>
          </div>

          {/* Team Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 28 }}>
            {team.map((member) => (
              <div key={member.name} className="card" style={{ padding: "36px 20px", textAlign: "center", borderRadius: 24 }}>
                <div style={{
                  width: 200, 
                  height: 200,
                  borderRadius: "50%",
                  margin: "0 auto 24px",
                  overflow: "hidden",
                  background: "#ffffff"
                }}>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "contain",
                      borderRadius: "50%"
                    }} 
                  />
                </div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: member.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>{member.dept}</div>
                <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: 4, color: "#0f172a" }}>{member.name}</h3>
                <div style={{ color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Row */}
      <section style={{ background: "var(--gray-50)", padding: "60px 0" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
            {[
              { icon: "🎓", label: "Expert Engineers", desc: "Our team holds certifications in solar PV, electrical engineering, and smart grid systems." },
              { icon: "🤝", label: "Customer Obsessed", desc: "We treat every project with the same care and attention as if it were our own home." },
              { icon: "🌍", label: "Impact Driven", desc: "Every installation moves us closer to a cleaner, greener energy future for everyone." },
            ].map((v) => (
              <div key={v.label} style={{ textAlign: "center", padding: "36px 24px" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: 10 }}>{v.label}</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "0.9rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, #004f80 100%)", padding: "80px 0" }}>
        <div className="container-custom" style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", fontSize: "2.2rem", fontWeight: 800, marginBottom: 16 }}>Ready to Work With Our Team?</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 36 }}>Our experts are ready to design the perfect solar solution for you.</p>
          <Link href="/contact" className="btn btn-white">Contact Us Today →</Link>
        </div>
      </section>
    </>
  );
}
