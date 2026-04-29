"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const mapLink = "https://www.google.com/maps/search/AKN+Arcade+Golf+Link+Road+Chevayur+Calicut";

  return (
    <div style={{ paddingTop: 100 }}>
      {/* Page Hero */}
      <div className="page-hero" style={{ background: "var(--gray-900)", color: "white", padding: "80px 0" }}>
        <div className="container-custom">
          <span className="section-label" style={{ background: "rgba(255,255,255,0.1)", color: "white" }}>Reach Out</span>
          <h1 style={{ marginTop: 12, marginBottom: 16 }}>Contact Sunbird</h1>
          <p style={{ maxWidth: 520, opacity: 0.8 }}>
            Have questions about our solar solutions? Our team is ready to help you design the perfect energy system.
          </p>
        </div>
      </div>

      {/* Info Bar */}
      <div style={{ background: "var(--gray-50)", borderBottom: "1px solid var(--gray-200)" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
            {[
              { icon: <MapPin size={24} />, label: "Visit Us", value: "AKN Arcade, Calicut", link: mapLink },
              { icon: <Phone size={24} />, label: "Call Us", value: "081368 88101", link: "tel:08136888101" },
              { icon: <Mail size={24} />, label: "Email Us", value: "sunbirdpowersolution@gmail.com", link: "mailto:sunbirdpowersolution@gmail.com" },
            ].map((item, i) => (
              <div key={i} style={{ 
                display: "flex", alignItems: "center", gap: 16, padding: "28px 32px", 
                borderRight: i < 2 ? "1px solid var(--gray-200)" : "none" 
              }}>
                <div style={{ 
                  width: 48, height: 48, borderRadius: 12, background: "var(--primary-light)", 
                  display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" 
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--gray-500)", textTransform: "uppercase" }}>{item.label}</div>
                  <a href={item.link} style={{ fontWeight: 600, color: "var(--gray-900)", fontSize: "0.9rem", textDecoration: "none" }}>{item.value}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="section">
        <div className="container-custom">
          <div className="card" style={{ padding: 60, maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ marginBottom: 32, textAlign: "center" }}>Send an Inquiry</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <input type="text" name="name" placeholder="Full Name" required className="form-input" value={form.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email Address" required className="form-input" value={form.email} onChange={handleChange} />
              </div>
              <textarea name="message" placeholder="How can we help you?" rows={5} required className="form-input" value={form.message} onChange={handleChange} />
              <button type="submit" disabled={status !== "idle"} className="btn btn-primary" style={{ height: 60 }}>
                {status === "idle" ? "Send Message" : status === "sending" ? "Sending..." : "Message Sent! ✓"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
