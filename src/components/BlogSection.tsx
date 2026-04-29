"use client";
import Link from "next/link";

const posts = [
  {
    slug: "5-reasons-switch-solar-2026",
    category: "Trends",
    date: "Apr 28",
    title: "5 Reasons to Switch to Solar in 2026",
    excerpt: "Discover why 2026 is the pivotal year for renewable energy adoption and how technology has peaked.",
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop",
    link: "https://www.forbes.com/home-improvement/solar/reasons-to-go-solar/",
  },
  {
    slug: "solar-savings-calculator",
    category: "Savings",
    date: "Apr 20",
    title: "How Much Can You Save with Solar Panels?",
    excerpt: "A deep dive into the ROI of solar installations and how to calculate your monthly electricity savings.",
    img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000&auto=format&fit=crop",
    link: "https://www.energysage.com/solar/cost-benefit/solar-roi-and-payback-period/",
  },
  {
    slug: "maintenance-guide-performance",
    category: "Maintenance",
    date: "Apr 15",
    title: "Solar Panel Maintenance Guide for Performance",
    excerpt: "Keep your system at peak efficiency with these simple seasonal maintenance tips from our experts.",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop",
    link: "https://www.solarreviews.com/blog/solar-panel-maintenance-guide",
  },
  {
    slug: "govt-subsidies-india",
    category: "Policy",
    date: "Apr 10",
    title: "Government Solar Subsidies You Should Know",
    excerpt: "Understanding the latest PM-Surya Ghar and other state incentives for solar installation in India.",
    img: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://economictimes.indiatimes.com/topic/solar-subsidy",
  },
  {
    slug: "residential-vs-commercial-solar",
    category: "Planning",
    date: "Apr 05",
    title: "Residential vs Commercial Solar Systems",
    excerpt: "Which scale is right for you? We compare the capacity, costs, and installation time for both.",
    img: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1000&auto=format&fit=crop",
    link: "https://www.solarreviews.com/blog/residential-vs-commercial-solar-panels",
  },
  {
    slug: "battery-storage-independence",
    category: "Storage",
    date: "Apr 01",
    title: "The Future of 24/7 Battery Storage",
    excerpt: "How lithium-ion technology is enabling total grid independence for smart homes and businesses.",
    img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1000&auto=format&fit=crop",
    link: "https://www.energy.gov/eere/solar/solar-plus-storage",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section" style={{ background: "white", scrollMarginTop: "100px" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-label">Latest Insights</span>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2rem)" }}>Solar Learning Center</h2>
        </div>

        <div className="blog-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24
        }}>
          {posts.map((item) => (
            <div key={item.slug} className="blog-card card animate-fadeup" style={{ padding: 0, overflow: "hidden", borderRadius: 24 }}>
              <div style={{ height: 180, overflow: "hidden" }}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} 
                  className="hover-zoom"
                />
              </div>
              <div style={{ padding: "20px 20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "var(--primary)", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
                    {item.category}
                  </span>
                  <span style={{ color: "var(--gray-500)", fontSize: "0.75rem", fontWeight: 500 }}>
                    {item.date}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--gray-900)", marginBottom: 12, lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--gray-500)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 0 }}>
                  {item.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
