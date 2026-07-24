"use client";

export default function TeamSection() {
  const team = [
    { 
      name: "ABHIRAM EK", 
      role: "PURCHASE MANAGER", 
      img: "/purchasemanager.webp"
    },
    { 
      name: "SUDHI KR", 
      role: "SALES HEAD", 
      img: "/saleshead.webp"
    },
    { 
      name: "SAFEER NA", 
      role: "OPERATION HEAD", 
      img: "/operationhead.webp"
    },
    { 
      name: "MOHAMMED INAM A", 
      role: "TECHNICAL LEAD", 
      img: "/technicallead.webp"
    },
  ];

  return (
    <section id="team" className="section" style={{ background: "white", scrollMarginTop: "100px" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="section-label">Our Experts</span>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.2rem)" }}>Meet the Team</h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 28
        }}>
          {team.map((member) => (
            <div 
              key={member.name} 
              className="card" 
              style={{ 
                textAlign: "center", 
                padding: "36px 20px", 
                borderRadius: 24,
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                border: "1px solid #f1f5f9",
                transition: "all 0.3s ease"
              }}
            >
              {/* Circle image container without border or shadow */}
              <div style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "#ffffff",
                margin: "0 auto 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain",
                    borderRadius: "50%"
                  }} 
                />
              </div>

              <h3 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: 6, color: "#0f172a", letterSpacing: "0.02em" }}>{member.name}</h3>
              <div style={{ fontSize: "0.85rem", color: "var(--primary, #0089D3)", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
