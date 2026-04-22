import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personal } from "../data";

const TECH_ICONS = [
  { cls: "fi fi-brands-html-5",  label: "HTML5"      },
  { cls: "fi fi-brands-css-3",   label: "CSS3"       },
  { cls: "fi fi-brands-js",      label: "JavaScript" },
  { cls: "fi fi-brands-react",   label: "React.js"   },
  { cls: "fi fi-brands-git",     label: "Git"        },
  { cls: "fi fi-brands-node-js", label: "Node.js"    },
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const FULL = personal.shortName + ".";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < FULL.length) { setTyped(FULL.slice(0, i + 1)); i++; }
      else clearInterval(t);
    }, 100);
    return () => clearInterval(t);
  }, [FULL]);

  return (
    <section id="about" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "120px 60px 80px",
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: 70,
        maxWidth: 1080,
        margin: "0 auto",
        width: "100%",
      }}>

        <motion.div
          style={{ position: "relative", width: 320, height: 340 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: 288, height: 288,
            border: "2px solid var(--teal)",
            animation: "frameFloat 4s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", top: 14, left: 14,
            width: 260, height: 260,
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <i className="fi fi-sr-user-pen" style={{ fontSize: 88, color: "var(--teal)" }} />
          </div>
          <div style={{
            position: "absolute", bottom: 12, right: 8,
            fontFamily: "'Fira Code', monospace",
            color: "var(--teal)",
            fontSize: 32,
            animation: "tagPulse 2.5s ease-in-out infinite",
          }}>
            &lt;/&gt;
          </div>
          <style>{`
            @keyframes frameFloat {
              0%,100% { transform: translate(0,0); }
              50% { transform: translate(7px,-7px); }
            }
            @keyframes tagPulse {
              0%,100% { opacity:1; }
              50% { opacity:.3; }
            }
          `}</style>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <p style={{
            fontFamily: "'Fira Code', monospace",
            color: "var(--teal)",
            fontSize: 13,
            marginBottom: 14,
            letterSpacing: "0.8px",
          }}>
            <i className="fi fi-rr-terminal" style={{ marginRight: 8, verticalAlign: "middle" }} />
            &gt; Hello, World!
          </p>

          <h1 style={{
            fontSize: "clamp(38px, 5vw, 62px)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-1.5px",
          }}>
            Hi, I am{" "}
            <span style={{ color: "var(--teal)" }}>{typed}</span>
            <span className="blink" style={{
              display: "inline-block",
              width: 4,
              height: "0.85em",
              background: "var(--teal)",
              marginLeft: 5,
              verticalAlign: "middle",
            }} />
          </h1>

          <p style={{
            fontSize: "clamp(26px, 3.8vw, 44px)",
            fontWeight: 700,
            color: "var(--muted)",
            marginTop: 6,
            letterSpacing: "-0.5px",
          }}>
            Frontend{" "}
            <span style={{ color: "var(--teal)", opacity: 0.4 }}>Dev</span>
          </p>

          <p style={{
            fontFamily: "'Fira Code', monospace",
            color: "var(--muted)",
            fontSize: 13,
            marginTop: 14,
            lineHeight: 1.7,
          }}>
            // {personal.tagline}
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
            {TECH_ICONS.map(({ cls, label }) => (
              <div key={label} title={label} data-hover style={{
                width: 40, height: 40,
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                color: "var(--white)",
                transition: "border-color .3s, color .3s, transform .3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--teal)";
                e.currentTarget.style.color = "var(--teal)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--white)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              >
                <i className={cls} />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
            <a href="#projects" data-hover style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--teal)",
              color: "#0b0f17",
              padding: "13px 28px",
              borderRadius: 5,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              transition: "transform .25s, box-shadow .3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 10px 28px var(--teal-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <i className="fi fi-rr-folder-open" />
              View Projects
            </a>

            <a href="#contact" data-hover style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "var(--white)",
              padding: "13px 28px",
              border: "1.5px solid var(--border)",
              borderRadius: 5,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              transition: "border-color .3s, color .3s, transform .25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--teal)";
              e.currentTarget.style.color = "var(--teal)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--white)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            >
              <i className="fi fi-rr-paper-plane" />
              Hire Me
            </a>
          </div>

          <p style={{
            fontFamily: "'Fira Code', monospace",
            color: "var(--muted)",
            fontSize: 12,
            marginTop: 24,
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
          }}>
            <span>
              <i className="fi fi-rr-marker" style={{ marginRight: 5 }} />
              {personal.location}
            </span>
            <span>
              <i className="fi fi-rr-graduation-cap" style={{ marginRight: 5 }} />
              {personal.graduation}
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}