"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
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
    <div id="contact" style={{ scrollMarginTop: "100px" }}>
      {/* ── LOCATION SECTION ── */}
      <section className="section" style={{ background: "white" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40, alignItems: "center" }}>
            <div className="animate-fadeup">
              <span className="section-label">Visit Us</span>
              <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2rem)" }}>Contact Us</h2>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: 32 }}>
                Visit our experience center to see our hybrid solar technology in action and discuss your energy needs with our experts.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { icon: <MapPin />, label: "Address", value: "AKN Arcade, Chevayur, Calicut, India", link: mapLink },
                  { icon: <Phone />, label: "Phone", value: "081368 88101", link: "tel:08136888101" },
                  { icon: <Mail />, label: "Email", value: "sunbirdpowersolution@gmail.com", link: "mailto:sunbirdpowersolution@gmail.com" },
                  { icon: <Clock />, label: "Business Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM", link: "#" }
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 16 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, background: "var(--primary-light)", color: "var(--primary)",
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
            <div className="card" style={{ padding: 0, height: 400, overflow: "hidden", borderRadius: 24 }}>
              <iframe src={embedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT INQUIRY SECTION ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-label">Inquiry Form</span>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2rem)" }}>Send a Message</h2>
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
    </div>
  );
}
