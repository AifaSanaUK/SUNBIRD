import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | SUNBIRD Power Solutions",
  description: "Meet the expert team driving Sunbird's solar energy mission.",
};

const team = [
  { name: "James Harrington", role: "Founder & CEO", dept: "Leadership", bio: "15+ years in renewable energy. James founded Sunbird with a vision to make smart solar accessible to every home.", avatar: "👨‍💼", color: "#0089D3" },
  { name: "Priya Nair", role: "Chief Technical Officer", dept: "Engineering", bio: "Expert in hybrid inverter design and smart grid integration. Leads all R&D and technical operations.", avatar: "👩‍💻", color: "#7b1fa2" },
  { name: "Robert Chen", role: "Head of Operations", dept: "Operations", bio: "Ensures flawless project delivery from site survey to final commissioning across every installation.", avatar: "👨‍🔧", color: "#e65100" },
  { name: "Amira Hassan", role: "Sales Director", dept: "Sales", bio: "Passionate about connecting clients with the right energy solutions. Manages the national sales team.", avatar: "👩‍💼", color: "#00897b" },
  { name: "Lucas Fernandez", role: "Lead Solar Engineer", dept: "Engineering", bio: "Designs custom PV systems, structural plans, and energy yield assessments for every project.", avatar: "👨‍🔬", color: "#1565c0" },
  { name: "Sarah Okonkwo", role: "Customer Success Manager", dept: "Support", bio: "Dedicated to ensuring every Sunbird customer is fully satisfied with their solar journey.", avatar: "👩‍🦱", color: "#c62828" },
];

const departments = [...new Set(team.map((t) => t.dept))];

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

          {/* Leadership card */}
          <div style={{
            background: "linear-gradient(135deg, var(--primary) 0%, #004f80 100%)",
            borderRadius: 28,
            padding: "52px 64px",
            display: "flex",
            alignItems: "center",
            gap: 48,
            marginBottom: 52,
            color: "white",
          }}>
            <div style={{
              width: 130, height: 130,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "4rem",
              flexShrink: 0,
              border: "4px solid rgba(255,255,255,0.3)",
            }}>
              {team[0].avatar}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", opacity: 0.7, marginBottom: 8 }}>FOUNDER & CHIEF EXECUTIVE</div>
              <h2 style={{ color: "white", fontSize: "2rem", marginBottom: 8 }}>{team[0].name}</h2>
              <p style={{ opacity: 0.8, maxWidth: 560, lineHeight: 1.8 }}>{team[0].bio}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 900 }}>15+</div>
              <div style={{ opacity: 0.7, fontSize: "0.85rem" }}>Years Experience</div>
            </div>
          </div>

          {/* Team Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 32 }}>
            {team.slice(1).map((member) => (
              <div key={member.name} className="card" style={{ padding: 36 }}>
                <div style={{
                  width: 80, height: 80,
                  borderRadius: "50%",
                  background: `${member.color}18`,
                  border: `3px solid ${member.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2.5rem",
                  marginBottom: 20,
                }}>
                  {member.avatar}
                </div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: member.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>{member.dept}</div>
                <h3 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: 4 }}>{member.name}</h3>
                <div style={{ color: "var(--gray-500)", fontSize: "0.85rem", fontWeight: 500, marginBottom: 14 }}>{member.role}</div>
                <p style={{ color: "var(--gray-500)", fontSize: "0.875rem", lineHeight: 1.7 }}>{member.bio}</p>
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
