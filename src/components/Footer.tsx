"use client";
import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#" },
  ],
  Services: [
    { label: "On-Grid Solar", href: "#services" },
    { label: "Off-Grid Solar", href: "#services" },
    { label: "Hybrid Systems", href: "#services" },
    { label: "Smart Monitoring", href: "#services" },
  ],
  Support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQ", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#000000", color: "white", paddingTop: 60, paddingBottom: 20 }}>
      <div className="container-custom">
        {/* Top Grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            alignItems: "start",
          }}
        >
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Link
              href="#home"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <img 
                src="/footer.png" 
                alt="SUNBIRD Logo" 
                style={{ 
                  width: "240px", 
                  height: "auto", 
                  objectFit: "contain",
                  display: "block"
                }} 
              />
            </Link>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                maxWidth: 320,
              }}
            >
              Empowering homes and businesses with smart, reliable, and
              sustainable hybrid solar energy solutions.
            </p>
            {/* Contact info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginTop: 12,
              }}
            >
              {[
                { icon: "📍", text: "123 Solar Street, Energy City" },
                { icon: "📞", text: "+1 (234) 567-890" },
                { icon: "✉️", text: "info@sunbirdpower.com" },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.95rem",
                  }}
                >
                  <span style={{ fontSize: "1.2rem", width: "24px", textAlign: "center" }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  marginBottom: 28,
                  letterSpacing: "0.05em",
                }}
              >
                {category}
              </h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
            &copy; {new Date().getFullYear()} <span className="brand-font">SUNBIRD</span> <span className="solutions-font">Power Solutions</span>. All
            rights reserved.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {["Smart Energy", "Reliable Power", "Always On"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(0,137,211,0.08)",
                  border: "1px solid rgba(0,137,211,0.2)",
                  color: "var(--primary)",
                  fontSize: "0.8rem",
                  padding: "6px 14px",
                  borderRadius: 100,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.2s ease;
        }
        .footer-link:hover {
          color: var(--primary);
          padding-left: 4px;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
