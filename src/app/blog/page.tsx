"use client";
import Link from "next/link";

const posts = [
  {
    slug: "hybrid-vs-on-grid",
    category: "Technology",
    date: "April 20, 2026",
    readTime: "5 min read",
    title: "Hybrid vs On-Grid Solar: Which System Is Right for You?",
    excerpt: "Choosing between a hybrid and on-grid solar system depends on your energy needs, budget, and backup requirements. We break down everything you need to know.",
    emoji: "⚡",
    color: "#0089D3",
  },
  {
    slug: "battery-storage-guide",
    category: "Energy Storage",
    date: "April 14, 2026",
    readTime: "7 min read",
    title: "The Complete Guide to Lithium-Ion Solar Battery Storage",
    excerpt: "Li-Ion batteries are the future of home energy storage. Learn about capacity, lifespan, DoD, and how to size a battery bank for your solar system.",
    emoji: "🔋",
    color: "#7b1fa2",
  },
  {
    slug: "rs485-smart-monitoring",
    category: "Smart Tech",
    date: "April 8, 2026",
    readTime: "4 min read",
    title: "RS485 & Smart Monitoring: Your Solar System's Brain",
    excerpt: "Modern hybrid inverters use RS485 communication to connect with smart monitoring apps, giving you real-time visibility into your energy generation and consumption.",
    emoji: "📱",
    color: "#00897b",
  },
  {
    slug: "solar-roi-calculator",
    category: "Finance",
    date: "April 2, 2026",
    readTime: "6 min read",
    title: "How to Calculate Your Solar ROI in 2026",
    excerpt: "With rising electricity costs, solar ROI has never been better. Here's a step-by-step guide to calculating your payback period and long-term savings.",
    emoji: "💰",
    color: "#e65100",
  },
  {
    slug: "net-metering-explained",
    category: "Policy",
    date: "March 24, 2026",
    readTime: "5 min read",
    title: "Net Metering Explained: Earning from Your Solar Panels",
    excerpt: "Net metering allows you to export excess solar energy back to the grid and earn credits on your electricity bill. Here's how it works in practice.",
    emoji: "🔌",
    color: "#1565c0",
  },
  {
    slug: "off-grid-remote-living",
    category: "Off-Grid",
    date: "March 18, 2026",
    readTime: "8 min read",
    title: "Off-Grid Solar for Remote Homes: A Complete Setup Guide",
    excerpt: "Living off the grid is more accessible than ever. Our engineers share everything you need to design a reliable off-grid solar system for any location.",
    emoji: "🏝️",
    color: "#c62828",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>Knowledge Hub</span>
          <h1 style={{ marginTop: 12, marginBottom: 16 }}>Solar Energy Blog</h1>
          <p style={{ maxWidth: 520 }}>Insights, guides, and news from the Sunbird team to help you make smarter energy decisions.</p>
        </div>
      </div>

      <section className="section">
        <div className="container-custom">

          {/* Featured Post */}
          <div className="card" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginBottom: 60,
            overflow: "hidden",
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${featured.color} 0%, #004080 100%)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              minHeight: 340,
            }}>
              <div style={{ textAlign: "center", color: "white" }}>
                <div style={{ fontSize: "6rem" }}>{featured.emoji}</div>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, opacity: 0.8, marginTop: 12, letterSpacing: "0.1em" }}>FEATURED POST</div>
              </div>
            </div>
            <div style={{ padding: "52px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
                <span style={{ background: `${featured.color}18`, color: featured.color, fontSize: "0.75rem", fontWeight: 700, padding: "4px 12px", borderRadius: 100 }}>{featured.category}</span>
                <span style={{ color: "var(--gray-500)", fontSize: "0.8rem" }}>{featured.date} · {featured.readTime}</span>
              </div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, lineHeight: 1.3 }}>{featured.title}</h2>
              <p style={{ color: "var(--gray-500)", lineHeight: 1.8, marginBottom: 28 }}>{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                Read Article →
              </Link>
            </div>
          </div>

          {/* Blog Grid */}
          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 32, color: "var(--gray-500)", letterSpacing: "0.05em" }}>More Articles</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 32 }}>
            {rest.map((post) => (
              <article key={post.slug} className="card" style={{ overflow: "hidden" }}>
                <div style={{
                  height: 160,
                  background: `linear-gradient(135deg, ${post.color} 0%, ${post.color}aa 100%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "4rem",
                }}>
                  {post.emoji}
                </div>
                <div style={{ padding: "28px 28px" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
                    <span style={{ background: `${post.color}18`, color: post.color, fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", borderRadius: 100 }}>{post.category}</span>
                    <span style={{ color: "var(--gray-500)", fontSize: "0.75rem" }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 10, lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ color: "var(--gray-500)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: 20 }}>{post.excerpt}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "var(--gray-400)", fontSize: "0.75rem" }}>{post.date}</span>
                    <Link href={`/blog/${post.slug}`} style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}>
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: "var(--gray-50)", padding: "80px 0" }}>
        <div className="container-custom" style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <span className="section-label" style={{ margin: "0 auto 16px", display: "inline-flex" }}>Stay Updated</span>
          <h2 className="section-title" style={{ textAlign: "center" }}>Subscribe to Our Newsletter</h2>
          <p style={{ color: "var(--gray-500)", marginBottom: 32 }}>Get the latest solar insights, tips, and product news delivered to your inbox.</p>
          <form style={{ display: "flex", gap: 12, maxWidth: 480, margin: "0 auto" }} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input"
              style={{ flex: 1, borderRadius: 8 }}
            />
            <button type="submit" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
