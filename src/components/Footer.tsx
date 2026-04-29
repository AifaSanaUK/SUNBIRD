"use client";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

// Custom SVG Icons to replace missing Lucide brand icons
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FacebookIcon size={18} />, href: "#", label: "Facebook" },
    { icon: <InstagramIcon size={18} />, href: "#", label: "Instagram" },
    { icon: <YoutubeIcon size={18} />, href: "#", label: "YouTube" },
    { icon: <LinkedinIcon size={18} />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer style={{ background: "var(--gray-900)", color: "white", paddingTop: 80, paddingBottom: 40 }}>
      <div className="container-custom">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 48,
          marginBottom: 64
        }}>
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <div style={{ marginBottom: 24, display: "flex", alignItems: "center" }}>
              <img src="/footer.webp" alt="Sunbird Logo" style={{ height: 40, width: "auto" }} />
            </div>
            <p style={{ color: "var(--gray-500)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: 32, maxWidth: 300 }}>
              Empowering homes and businesses with smart, reliable hybrid solar solutions since 2015. Leading the transition to sustainable energy.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gray-500)",
                    transition: "all 0.3s ease",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--primary)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "var(--gray-500)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 24 }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Home", "About", "Services", "Team", "Blog", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: "var(--gray-500)",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--gray-500)"}
                >
                  <ArrowRight size={12} /> {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 24 }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ color: "var(--primary)", marginTop: 2 }}><MapPin size={18} /></div>
                <p style={{ color: "var(--gray-500)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                  AKN Arcade, Golf Link Road<br />
                  Chevayur, Calicut, India
                </p>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ color: "var(--primary)" }}><Phone size={18} /></div>
                <a href="tel:08136888101" style={{ color: "var(--gray-500)", fontSize: "0.85rem", textDecoration: "none" }}>081368 88101</a>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ color: "var(--primary)" }}><Mail size={18} /></div>
                <a href="mailto:sunbirdpowersolution@gmail.com" style={{ color: "var(--gray-500)", fontSize: "0.85rem", textDecoration: "none" }}>sunbirdpowersolution@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: 40,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}>
          <p style={{ color: "var(--gray-700)", fontSize: "0.75rem" }}>
            © {currentYear} Sunbird Power Solutions. All rights reserved.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
            <Link href="#" style={{ color: "var(--gray-700)", fontSize: "0.75rem", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="#" style={{ color: "var(--gray-700)", fontSize: "0.75rem", textDecoration: "none" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
