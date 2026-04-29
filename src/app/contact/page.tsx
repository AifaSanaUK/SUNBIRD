"use client";
import { useState } from "react";
import type { Metadata } from "next";

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
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setStatus("idle");
    }, 4000);
  };

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
            Reach Out
          </span>
          <h1 style={{ marginTop: 12, marginBottom: 16 }}>Get In Touch</h1>
          <p style={{ maxWidth: 520 }}>
            Have questions about our solar solutions? Our team is ready to help you design the perfect energy system.
          </p>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div style={{ background: "var(--gray-50)", borderBottom: "1px solid var(--gray-200)" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", padding: "0" }}>
            {[
              { icon: "📍", label: "Visit Us", value: "123 Solar Street, Energy City, EC 45678" },
              { icon: "📞", label: "Call Us", value: "+1 (234) 567-890" },
              { icon: "✉️", label: "Email Us", value: "info@sunbirdpower.com" },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "28px 32px",
                  borderRight: i < 2 ? "1px solid var(--gray-200)" : "none",
                }}
              >
                <div style={{
                  width: 48, height: 48,
                  borderRadius: 12,
                  background: "var(--primary-light)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem", flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--gray-500)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 500, color: "var(--gray-900)", fontSize: "0.9rem" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map + Form Section */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 620 }}>
        {/* LEFT: Google Map */}
        <div style={{ position: "relative", minHeight: 500 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647423223126!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: "none", display: "block", minHeight: 620, filter: "saturate(0.85)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sunbird Office Location"
          />
          {/* Map overlay badge */}
          <div style={{
            position: "absolute", bottom: 32, left: 32,
            background: "white",
            borderRadius: 16,
            padding: "16px 20px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>📍</div>
            <div>
              <div className="brand-font" style={{ fontWeight: 700, fontSize: "0.9rem" }}>SUNBIRD HQ</div>
              <div style={{ fontSize: "0.75rem", color: "var(--gray-500)" }}>Mon–Sat · 9am–6pm</div>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div style={{
          padding: "64px 56px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderLeft: "1px solid var(--gray-100)",
        }}>
          <span className="section-label" style={{ marginBottom: 12 }}>Send a Message</span>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 8 }}>We'd Love to Hear From You</h2>
          <p style={{ color: "var(--gray-500)", fontSize: "0.9rem", marginBottom: 36 }}>
            Fill in the form below and our team will get back to you within 24 hours.
          </p>

          {status === "sent" ? (
            <div style={{
              background: "#e8f5e9",
              border: "2px solid #4caf50",
              borderRadius: 16,
              padding: "40px 32px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>✅</div>
              <h3 style={{ color: "#2e7d32", marginBottom: 8 }}>Message Sent!</h3>
              <p style={{ color: "#388e3c" }}>Thank you for reaching out. We'll respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {/* Name + Email row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input
                    id="name" name="name" type="text"
                    className="form-input"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    id="email" name="email" type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone + Subject row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone" name="phone" type="tel"
                    className="form-input"
                    placeholder="+1 234 567 890"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="subject">Subject *</label>
                  <select
                    id="subject" name="subject"
                    className="form-input"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    style={{ cursor: "pointer" }}
                  >
                    <option value="">Select a topic…</option>
                    <option value="quote">Get a Quote</option>
                    <option value="hybrid">Hybrid Systems</option>
                    <option value="ongrid">On-Grid Solar</option>
                    <option value="offgrid">Off-Grid Solar</option>
                    <option value="support">After-Sales Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-group" style={{ marginBottom: 24 }}>
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea
                  id="message" name="message"
                  className="form-input"
                  placeholder="Tell us about your energy needs, property size, or any questions…"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "1rem",
                  padding: "15px",
                  opacity: status === "sending" ? 0.8 : 1,
                  cursor: status === "sending" ? "wait" : "pointer",
                }}
              >
                {status === "sending" ? "Sending…" : "Send Message →"}
              </button>

              <p style={{ textAlign: "center", marginTop: 14, fontSize: "0.8rem", color: "var(--gray-400)" }}>
                🔒 Your information is kept private and never shared.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Bottom Info Cards */}
      <section style={{ background: "var(--gray-50)", padding: "60px 0" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              { icon: "🕐", title: "Business Hours", lines: ["Monday – Friday: 9am – 6pm", "Saturday: 9am – 2pm", "Sunday: Closed"] },
              { icon: "⚡", title: "Emergency Support", lines: ["24/7 support for all", "installed system customers", "Call our hotline anytime"] },
              { icon: "📍", title: "Service Regions", lines: ["Residential & Commercial", "Urban, Suburban & Rural", "Remote Off-Grid Locations"] },
            ].map((card) => (
              <div key={card.title} className="card" style={{ padding: "32px 28px" }}>
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{card.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: 12, fontSize: "1rem" }}>{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} style={{ color: "var(--gray-500)", fontSize: "0.875rem", lineHeight: 1.7 }}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
