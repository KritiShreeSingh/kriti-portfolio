import { motion } from "framer-motion";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">

      <h2 className="section-title fade-in">
        Projects<span>.</span>
      </h2>

      <p className="fade-in" style={{
        color: "var(--muted)",
        fontFamily: "'Fira Code', monospace",
        fontSize: 13,
        marginTop: -38,
        marginBottom: 48,
      }}>
        // Real projects. Real code. All on GitHub.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
        gap: 24,
      }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
          >
            <div
              data-hover
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: "30px 26px",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                transition: "border-color .4s, transform .3s",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--teal)";
                e.currentTarget.style.transform = "translateY(-7px)";
                e.currentTarget.querySelector(".topbar").style.transform = "scaleX(1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.querySelector(".topbar").style.transform = "scaleX(0)";
              }}
            >
              <div
                className="topbar"
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: 2,
                  background: "var(--teal)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform .4s ease",
                }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <span style={{
                  fontFamily: "'Fira Code', monospace",
                  color: "var(--teal)",
                  fontSize: 12,
                  opacity: 0.65,
                }}>
                  {p.number}
                </span>
                <span style={{
                  fontFamily: "'Fira Code', monospace",
                  color: "var(--muted)",
                  fontSize: 12,
                }}>
                  / {p.category}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <i className={p.icon} style={{ fontSize: 22, color: "var(--teal)" }} />
                <h3 style={{ fontSize: 20, fontWeight: 700 }}>{p.name}</h3>
              </div>

              <p style={{
                color: "var(--muted)",
                fontSize: 13,
                lineHeight: 1.75,
                marginBottom: 14,
                flex: 1,
              }}>
                {p.description}
              </p>

              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                background: "var(--teal-dim)",
                border: "1px solid rgba(45,226,194,.15)",
                borderRadius: 6,
                padding: "8px 12px",
                marginBottom: 18,
              }}>
                <i className="fi fi-rr-lightbulb" style={{ color: "var(--teal)", fontSize: 13, marginTop: 2 }} />
                <p style={{
                  fontFamily: "'Fira Code', monospace",
                  color: "var(--teal)",
                  fontSize: 11,
                  lineHeight: 1.6,
                }}>
                  {p.impact}
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
                {p.tech.map((t) => (
                  <span key={t} style={{
                    background: "#141d2e",
                    color: "var(--teal)",
                    border: "1px solid rgba(45,226,194,.25)",
                    borderRadius: 4,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontFamily: "'Fira Code', monospace",
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              
                href={p.github}
                target="_blank"
                rel="noreferrer"
                data-hover
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  color: "var(--muted)",
                  fontSize: 12,
                  fontFamily: "'Fira Code', monospace",
                  textDecoration: "none",
                  transition: "color .3s",
                  marginTop: "auto",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                <i className="fi fi-brands-github" style={{ fontSize: 14 }} />
                View on GitHub
                <i className="fi fi-rr-arrow-up-right" style={{ fontSize: 11 }} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}