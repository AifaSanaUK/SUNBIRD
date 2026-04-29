"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.98)" : "white",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.08)" : "0 1px 0 rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
        {/* Logo */}
        <Link href="#home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img 
            src="/logo.webp" 
            alt="SUNBIRD Logo" 
            style={{ 
              height: "65px", 
              width: "auto", 
              objectFit: "contain",
              display: "block"
            }} 
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="hide-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--gray-800)",
                textDecoration: "none",
                padding: "8px 0",
                transition: "all 0.2s ease",
                borderBottom: "3px solid transparent",
              }}
              onMouseEnter={(e: any) => e.target.style.color = "var(--primary)"}
              onMouseLeave={(e: any) => e.target.style.color = "var(--gray-800)"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hide-mobile">
          <Link href="#contact" className="btn btn-primary" style={{ padding: "12px 32px", fontSize: "0.95rem" }}>
            Get a Quote →
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 8,
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <span style={{ width: 24, height: 2, background: menuOpen ? "var(--primary)" : "var(--gray-700)", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none", display: "block" }} />
          <span style={{ width: 24, height: 2, background: "var(--primary)", borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: "all 0.3s", display: "block" }} />
          <span style={{ width: 24, height: 2, background: menuOpen ? "var(--primary)" : "var(--gray-700)", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none", display: "block" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "white",
          borderTop: "1px solid var(--gray-100)",
          padding: "20px 24px",
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontWeight: 500,
                fontSize: "1.1rem",
                color: "var(--gray-700)",
                textDecoration: "none",
                padding: "8px 0",
                borderBottom: "1px solid var(--gray-100)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: 8, textAlign: "center", justifyContent: "center" }}>
            Get a Quote →
          </Link>
        </div>
      )}

      <style>{`
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
