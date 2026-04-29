"use client";

export default function TeamSection() {
  const team = [
    { name: "Saneesh K", role: "MD & Technical Lead", img: "/saneesh.webp" },
    { name: "Prabin K", role: "Operation Head", img: "/prabin.webp" },
    { name: "Sreejesh K", role: "Technical Head", img: "/sreejesh.webp" },
  ];

  return (
    <section id="team" className="section" style={{ background: "white", scrollMarginTop: "100px" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-label">Our Experts</span>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2rem)" }}>Meet the Team</h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20
        }}>
          {team.map((member) => (
            <div key={member.name} className="card" style={{ textAlign: "center", padding: 24 }}>
              <div style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "var(--primary-light)",
                margin: "0 auto 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}>
                {member.img ? (
                  <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <CircleUser size={48} color="var(--primary)" />
                )}
              </div>
              <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: 4 }}>{member.name}</h3>
              <div style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 600 }}>{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CircleUser = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
