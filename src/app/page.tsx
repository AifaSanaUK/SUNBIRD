"use client";
import Link from "next/link";
import { useState } from "react";

// Data
const team = [
  { name: "James Harrington", role: "Founder & CEO", dept: "Leadership", bio: "15+ years in renewable energy. James founded Sunbird with a vision to make smart solar accessible to every home.", avatar: "👨‍💼", color: "#0089D3" },
  { name: "Priya Nair", role: "Chief Technical Officer", dept: "Engineering", bio: "Expert in hybrid inverter design and smart grid integration. Leads all R&D and technical operations.", avatar: "👩‍💻", color: "#7b1fa2" },
  { name: "Robert Chen", role: "Head of Operations", dept: "Operations", bio: "Ensures flawless project delivery from site survey to final commissioning across every installation.", avatar: "👨‍🔧", color: "#e65100" },
  { name: "Amira Hassan", role: "Sales Director", dept: "Sales", bio: "Passionate about connecting clients with the right energy solutions. Manages the national sales team.", avatar: "👩‍💼", color: "#00897b" },
  { name: "Lucas Fernandez", role: "Lead Solar Engineer", dept: "Engineering", bio: "Designs custom PV systems, structural plans, and energy yield assessments for every project.", avatar: "👨‍🔬", color: "#1565c0" },
  { name: "Sarah Okonkwo", role: "Customer Success Manager", dept: "Support", bio: "Dedicated to ensuring every Sunbird customer is fully satisfied with their solar journey.", avatar: "👩‍🦱", color: "#c62828" },
];

const posts = [
  {
    slug: "hybrid-vs-on-grid",
    category: "Technology",
    date: "April 20, 2026",
    readTime: "5 min read",
    title: "Hybrid vs On-Grid Solar: Which System Is Right for You?",
    excerpt: "Choosing between a hybrid and on-grid solar system depends on your energy needs, budget, and backup requirements.",
    emoji: "⚡",
    color: "#0089D3",
  },
  {
    slug: "battery-storage-guide",
    category: "Energy Storage",
    date: "April 14, 2026",
    readTime: "7 min read",
    title: "The Complete Guide to Solar Battery Storage",
    excerpt: "Li-Ion batteries are the future of home energy storage. Learn about capacity, lifespan, and sizing a battery bank.",
    emoji: "🔋",
    color: "#7b1fa2",
  },
  {
    slug: "rs485-smart-monitoring",
    category: "Smart Tech",
    date: "April 8, 2026",
    readTime: "4 min read",
    title: "RS485 & Smart Monitoring: Your System's Brain",
    excerpt: "Modern hybrid inverters use RS485 communication to connect with smart monitoring apps for real-time visibility.",
    emoji: "📱",
    color: "#00897b",
  },
];

export default function HomePage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <>
      {/* ── HERO SECTION ───────────────────────────────────── */}
      <section id="home" style={{
        minHeight: "100vh",
        paddingTop: 100,
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffffff 0%, #e8f6ff 50%, #d0ecff 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-120px", right: "-120px", width: 600, height: 600, background: "rgba(0,137,211,0.06)", borderRadius: "50%", pointerEvents: "none" }} />
        <div className="container-custom" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", width: "100%" }}>
          <div>
            <span className="section-label">🌞 Hybrid Solar Systems</span>
            <h1 style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)", fontWeight: 900, color: "var(--gray-900)", lineHeight: 1.1, marginBottom: 24 }}>
              Smart Energy.<br />
              Reliable Power.<br />
              <span style={{ color: "var(--primary)" }}>Always On.</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--gray-500)", lineHeight: 1.8, marginBottom: 40, maxWidth: 480 }}>
              Experience the future of energy with Sunbird Hybrid Solar Systems. Maximize solar use, store energy, and ensure uninterrupted power.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <Link href="#services" className="btn btn-primary">Explore Systems →</Link>
              <Link href="#about" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="animate-float" style={{ background: "white", borderRadius: 32, padding: 48, boxShadow: "0 30px 80px rgba(0,137,211,0.15)", width: "100%", maxWidth: 460 }}>
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <img src="/panel.webp" alt="Solar Panel" style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "16px", marginBottom: "16px" }} />
                <div style={{ fontSize: "1rem", fontWeight: 700 }}>HYBRID SOLAR SYSTEM</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[{ icon: "🔆", label: "PV Array" }, { icon: "🔋", label: "Li-Ion Battery" }, { icon: "⚡", label: "Hybrid Inverter" }, { icon: "📱", label: "Smart Monitor" }].map((item) => (
                  <div key={item.label} style={{ background: "var(--gray-50)", borderRadius: 14, padding: "14px 12px", textAlign: "center", border: "1px solid var(--gray-100)" }}>
                    <div style={{ fontSize: "1.8rem" }}>{item.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: "0.8rem" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ───────────────────────────────────── */}
      <section id="about" className="section">
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Powering a Sustainable Future</h2>
              <div className="divider" />
              <p style={{ color: "var(--gray-500)", lineHeight: 1.9, marginBottom: 20 }}>
                Since 2015, Sunbird has been delivering smart, reliable, and cost-effective solar systems. We design intelligent energy ecosystems that combine PV arrays, battery storage, and smart monitoring.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 32 }}>
                {[["🌱", "Sustainability"], ["🔬", "Innovation"], ["🤝", "Customer First"], ["🛡️", "Reliability"]].map(([icon, label]) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: "1.5rem" }}>{icon}</span>
                    <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "var(--gray-50)", borderRadius: 24, padding: 48 }}>
               <img src="/shirt.webp" alt="Team Gear" style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: 16, marginBottom: 20 }} />
               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                 <img src="/cap.png" alt="Branded Cap" style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: 12 }} />
                 <img src="/visitcard.webp" alt="Business Card" style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: 12 }} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ────────────────────────────────── */}
      <section id="services" className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Solar Solutions</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Choose Your System</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
            {[
              { icon: "🔆", label: "On-Grid", desc: "Connect to the utility grid and reduce bills.", badge: "Grid-Tied" },
              { icon: "🏝️", label: "Off-Grid", desc: "Total energy independence with storage.", badge: "Independent" },
              { icon: "⚡", label: "Hybrid", desc: "The best of both worlds — solar + battery + grid.", badge: "Most Popular", featured: true },
            ].map((s) => (
              <div key={s.label} className="card" style={{ padding: 36, border: s.featured ? "2px solid var(--primary)" : "none" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12 }}>{s.label} Solar</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION ────────────────────────────────────── */}
      <section id="team" className="section">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Our Experts</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Meet the Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 32 }}>
            {team.map((member) => (
              <div key={member.name} className="card" style={{ padding: 32, textAlign: "center" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--gray-100)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem", margin: "0 auto 20px" }}>
                  {member.avatar}
                </div>
                <h3 style={{ fontWeight: 800, fontSize: "1.1rem" }}>{member.name}</h3>
                <div style={{ color: "var(--primary)", fontSize: "0.85rem", fontWeight: 600, marginTop: 4 }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG SECTION ────────────────────────────────────── */}
      <section id="blog" className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Knowledge Hub</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Solar Insights</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
            {posts.map((post) => (
              <article key={post.slug} className="card" style={{ overflow: "hidden" }}>
                <div style={{ height: 160, background: post.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem" }}>{post.emoji}</div>
                <div style={{ padding: 28 }}>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 12 }}>{post.title}</h3>
                  <p style={{ color: "var(--gray-500)", fontSize: "0.85rem", marginBottom: 16 }}>{post.excerpt}</p>
                  <Link href={`#`} style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}>Read more →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ─────────────────────────────────── */}
      <section id="contact" className="section">
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 72, alignItems: "start" }}>
            <div>
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title">Ready to Go Solar?</h2>
              <p style={{ color: "var(--gray-500)", marginBottom: 40 }}>Fill out the form and our engineers will get back to you within 24 hours.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[["📍", "123 Solar Street, Energy City"], ["📞", "+1 (234) 567-890"], ["✉️", "info@sunbirdpower.com"]].map(([icon, text]) => (
                  <div key={text} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--primary-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>{icon}</div>
                    <div style={{ fontWeight: 500, fontSize: "0.95rem" }}>{text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: 48 }}>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <input type="text" name="name" placeholder="Name" required className="form-input" value={form.name} onChange={handleChange} />
                  <input type="email" name="email" placeholder="Email" required className="form-input" value={form.email} onChange={handleChange} />
                </div>
                <input type="text" name="subject" placeholder="Subject" className="form-input" value={form.subject} onChange={handleChange} />
                <textarea name="message" placeholder="Your Message" rows={4} required className="form-input" value={form.message} onChange={handleChange} style={{ padding: 16 }} />
                <button type="submit" disabled={status !== "idle"} className="btn btn-primary" style={{ padding: "16px" }}>
                  {status === "idle" ? "Send Message" : status === "sending" ? "Sending..." : "Message Sent! ✓"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
