"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Sun,
  Battery,
  Zap,
  Smartphone,
  Leaf,
  Award,
  Users,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

// --- COUNT UP COMPONENT ---
function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
}

// Data
const team = [
  { name: "James Harrington", role: "Founder & CEO", dept: "Leadership", avatar: "👨‍💼" },
  { name: "Priya Nair", role: "Chief Technical Officer", dept: "Engineering", avatar: "👩‍💻" },
  { name: "Robert Chen", role: "Head of Operations", dept: "Operations", avatar: "👨‍🔧" },
  { name: "Amira Hassan", role: "Sales Director", dept: "Sales", avatar: "👩‍💼" },
  { name: "Lucas Fernandez", role: "Lead Solar Engineer", dept: "Engineering", avatar: "👨‍🔬" },
  { name: "Sarah Okonkwo", role: "Customer Success Manager", dept: "Support", avatar: "👩‍🦱" },
];

const posts = [
  {
    slug: "hybrid-vs-on-grid",
    category: "Technology",
    title: "Hybrid vs On-Grid Solar: Which is Right?",
    excerpt: "Choosing between hybrid and on-grid depends on your energy needs.",
    emoji: <Zap size={32} />,
    color: "#0089D3",
  },
  {
    slug: "battery-storage-guide",
    category: "Storage",
    title: "Guide to Solar Battery Storage",
    excerpt: "Li-Ion batteries are the future of home energy storage.",
    emoji: <Battery size={32} />,
    color: "#7b1fa2",
  },
  {
    slug: "rs485-smart-monitoring",
    category: "Smart Tech",
    title: "RS485 & Smart Monitoring",
    excerpt: "Modern hybrid inverters use RS485 for real-time visibility.",
    emoji: <Smartphone size={32} />,
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
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const mapLink = "https://www.google.com/maps/search/AKN+Arcade+Golf+Link+Road+Chevayur+Calicut";
  const embedUrl = "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=AKN%20Arcade,%20Golf%20Link%20Road%20Chevayur,%20Calicut,%20India+(Sunbird%20Power%20Solutions)&t=&z=14&ie=UTF8&iwloc=B&output=embed";

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO SECTION ───────────────────────────────────── */}
      <section id="home" className="hero-section" style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffffff 0%, #e8f6ff 50%, #d0ecff 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        paddingTop: "120px" // More gap from navbar on Laptop
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

              <h2 className="hero-title-mobile" style={{ fontSize: "clamp(2.5rem, 8vw, 3.8rem)", fontWeight: 900, color: "var(--gray-900)", lineHeight: 1.1, marginBottom: 24 }}>
                Smart Energy.<br />
                Reliable Power.<br />
                <span style={{ color: "var(--primary)" }}>Always On.</span>
              </h2>
              <p className="hero-desc-mobile" style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "var(--gray-500)", lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
                Experience the future of energy with Sunbird Hybrid Solar Systems. Maximize solar use, store energy, and ensure uninterrupted power.
              </p>
              <div className="hero-btns-mobile" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                <Link href="#services" className="btn btn-primary">Explore Systems</Link>
                <Link href="#about" className="btn btn-outline">Our Story</Link>
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

            <div style={{ display: "flex", justifyContent: "center" }} className="animate-float hero-image-block">
              <div style={{
                background: "white", borderRadius: 32, padding: "clamp(24px, 5vw, 40px)",
                boxShadow: "0 30px 80px rgba(0,137,211,0.12)", width: "100%", maxWidth: 460
              }}>
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                  <img src="/panel.webp" alt="Solar Panel" style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "16px", marginBottom: "16px" }} />
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--gray-900)", letterSpacing: "0.5px" }}>HYBRID SOLAR SYSTEM</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    { icon: <Sun size={24} color="var(--primary)" />, label: "PV Array" },
                    { icon: <Battery size={24} color="var(--primary)" />, label: "Battery" },
                    { icon: <Zap size={24} color="var(--primary)" />, label: "Inverter" },
                    { icon: <Smartphone size={24} color="var(--primary)" />, label: "Monitor" }
                  ].map((item) => (
                    <div key={item.label} style={{ background: "var(--gray-50)", borderRadius: 12, padding: "12px 8px", textAlign: "center", border: "1px solid var(--gray-100)" }}>
                      <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>{item.icon}</div>
                      <div style={{ fontWeight: 700, fontSize: "0.75rem" }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ───────────────────────────────────── */}
      <section id="about" className="section">
        <div className="container-custom">
          {/* Main Story */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 60,
            alignItems: "center",
            marginBottom: 80
          }}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Powering a Sustainable Future</h2>
              <div className="divider" />
              <p style={{ color: "var(--gray-500)", lineHeight: 1.8, marginBottom: 20 }}>
                Since 2015, Sunbird has been delivering smart, reliable, and cost-effective solar systems. We design intelligent energy ecosystems that combine PV arrays, battery storage, and smart monitoring.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
                {[
                  { icon: <Leaf size={18} color="var(--primary)" />, label: "Green Tech" },
                  { icon: <Zap size={18} color="var(--primary)" />, label: "Innovation" },
                  { icon: <Users size={18} color="var(--primary)" />, label: "Expert Team" },
                  { icon: <ShieldCheck size={18} color="var(--primary)" />, label: "Reliability" }
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {item.icon}
                    <span style={{ fontWeight: 700, fontSize: "0.85rem" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "var(--gray-50)", borderRadius: 32, padding: "8px", border: "1px solid var(--gray-100)" }}>
              <img src="/solarexp.webp" alt="Solar Experience" style={{ width: "100%", height: "auto", borderRadius: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }} />
            </div>
          </div>

          {/* Why Choose Us */}
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span className="section-label">Our Edge</span>
            <h2 className="section-title">Why Choose Sunbird?</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            alignItems: "center"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { title: "Smart Technology", desc: "We use advanced RS485 monitoring for real-time control.", icon: <Smartphone size={24} color="white" /> },
                { title: "Premium Quality", desc: "Only Tier-1 solar panels and hybrid inverters used.", icon: <Award size={24} color="white" /> },
                { title: "24/7 Support", desc: "Dedicated local support for all your energy needs.", icon: <ShieldCheck size={24} color="white" /> },
              ].map((item) => (
                <div key={item.title} className="card" style={{ padding: 24, display: "flex", gap: 20, alignItems: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: 4 }}>{item.title}</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--gray-500)", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderRadius: 32, overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}>
              <img src="/hybrid.webp" alt="Hybrid Solar Technology" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ────────────────────────────────── */}
      <section id="services" className="section">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Solar Solutions</span>
            <h2 className="section-title">Choose Your System</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24
          }}>
            {[
              { icon: <Sun size={32} color="var(--primary)" />, label: "On-Grid", desc: "Connect to the utility grid and reduce bills." },
              { icon: <Battery size={32} color="var(--primary)" />, label: "Off-Grid", desc: "Total energy independence with storage." },
              { icon: <Zap size={32} color="var(--primary)" />, label: "Hybrid", desc: "The best of both worlds — solar + battery + grid.", featured: true },
            ].map((s) => (
              <div key={s.label} className="card" style={{ padding: 32, border: s.featured ? "2px solid var(--primary)" : "1px solid var(--gray-100)" }}>
                <div style={{ marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 8 }}>{s.label} Solar</h3>
                <p style={{ color: "var(--gray-500)", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION ────────────────────────────────────── */}
      <section id="team" className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Our Experts</span>
            <h2 className="section-title">Meet the Team</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20
          }}>
            {team.map((member) => (
              <div key={member.name} className="card" style={{ padding: 24, textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--gray-100)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <CircleUser size={24} color="var(--primary)" />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: "1rem" }}>{member.name}</h3>
                <div style={{ color: "var(--primary)", fontSize: "0.8rem", fontWeight: 600, marginTop: 4 }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG SECTION ────────────────────────────────────── */}
      <section id="blog" className="section">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Knowledge Hub</span>
            <h2 className="section-title">Solar Insights</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24
          }}>
            {posts.map((post) => (
              <article key={post.slug} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ height: 140, background: post.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                  {post.emoji}
                </div>
                <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", marginBottom: 8 }}>{post.category}</div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: 12, lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ color: "var(--gray-500)", fontSize: "0.85rem", marginBottom: 20, flex: 1 }}>{post.excerpt}</p>
                  <Link href={`#`} style={{ color: "var(--gray-900)", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                    Read Full Article <ChevronRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION SECTION ─────────────────────────────── */}
      <section id="location" style={{ background: "#f8f9fa", padding: "64px 0" }}>
        <div className="container-custom">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
            alignItems: "stretch"
          }}>
            {/* Map Column */}
            <div style={{ position: "relative", minHeight: 400, borderRadius: 24, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info Cards Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  icon: <MapPin size={20} color="var(--primary)" />, label: "Address",
                  value: "AKN Arcade, Golf Link Road Chevayur, Calicut",
                  link: mapLink
                },
                {
                  icon: <Phone size={20} color="var(--primary)" />, label: "Call Us",
                  value: "081368 88101",
                  link: "tel:08136888101"
                },
                {
                  icon: <Mail size={20} color="var(--primary)" />, label: "Email Us",
                  value: "sunbirdpowersolution@gmail.com",
                  link: "mailto:sunbirdpowersolution@gmail.com"
                }
              ].map((item) => (
                <div key={item.label} className="card" style={{ padding: "20px 24px", display: "flex", gap: 20, alignItems: "center" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: "var(--primary-light)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--gray-500)", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontWeight: 600, color: "var(--gray-900)", fontSize: "0.9rem", lineHeight: 1.4 }}>
                      <a href={item.link} style={{ textDecoration: "none", color: "inherit" }}>{item.value}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ─────────────────────────────────── */}
      <section id="contact" className="section">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-label">Inquiry Form</span>
            <h2 className="section-title">Send a Message</h2>
          </div>
          <div className="card" style={{ padding: "clamp(24px, 5vw, 48px)", maxWidth: 900, margin: "0 auto" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20
              }}>
                <input type="text" name="name" placeholder="Full Name" required className="form-input" value={form.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email Address" required className="form-input" value={form.email} onChange={handleChange} />
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20
              }}>
                <input type="text" name="phone" placeholder="Phone Number" className="form-input" value={form.phone} onChange={handleChange} />
                <input type="text" name="subject" placeholder="Subject" className="form-input" value={form.subject} onChange={handleChange} />
              </div>
              <textarea name="message" placeholder="How can we help you?" rows={4} required className="form-input" value={form.message} onChange={handleChange} style={{ padding: 16 }} />
              <button type="submit" disabled={status !== "idle"} className="btn btn-primary" style={{ height: 56, fontSize: "1rem" }}>
                {status === "idle" ? "Send Inquiry Now" : status === "sending" ? "Sending..." : "Message Sent! ✓"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .hero-stats-glass-compact {
          display: flex;
          gap: 40px;
          padding: 12px 35px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.7);
          border-radius: 14px;
          width: fit-content;
          box-shadow: 0 8px 32px rgba(0, 137, 211, 0.08), inset 0 0 10px rgba(255,255,255,0.2);
          margin-top: 15px;
          align-items: center;
        }

        .compact-stat-item {
          text-align: left;
        }

        .compact-stat-number {
          font-family: 'Eras Demi ITC', 'Inter', sans-serif;
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--primary);
          line-height: 1;
        }

        .compact-stat-label {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          color: var(--gray-600);
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        @media (max-width: 768px) {
          .hero-section { min-height: 200vh !important; }
          .hero-grid { display: block !important; }
          .hero-content-block { 
            min-height: 80vh !important; 
            display: flex !important; 
            flex-direction: column !important; 
            justify-content: center !important; 
            padding: 24px !important;
            padding-top: 60px !important;
          }
          .hero-title-mobile { font-size: 2.1rem !important; margin-bottom: 12px !important; line-height: 1.1 !important; }
          .hero-desc-mobile { font-size: 0.95rem !important; margin-bottom: 24px !important; line-height: 1.4 !important; }
          .hero-btns-mobile { margin-bottom: 24px !important; gap: 12px !important; }
          .hero-btns-mobile .btn { padding: 10px 22px !important; font-size: 0.85rem !important; }
          
          .hero-image-block { 
            height: 100vh !important; 
            display: flex !important; 
            flex-direction: column !important;
            justify-content: center !important;
            padding: 24px !important;
          }
          .hero-stats-glass-compact {
            gap: 10px;
            padding: 10px 15px;
            justify-content: space-around;
            width: 100% !important;
            border-radius: 12px !important;
          }
          .compact-stat-number { font-size: 1.2rem !important; }
          .compact-stat-label { font-size: 0.55rem !important; line-height: 1 !important; }
        }
      `}</style>
    </div>
  );
}

const CircleUser = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
