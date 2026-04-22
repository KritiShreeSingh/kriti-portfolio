import { motion } from "framer-motion";
import { personal } from "../data";

const CONTACTS = [
  {
    icon:  "fi fi-rr-envelope",
    label: "Email",
    value: personal.email,
    href:  `mailto:${personal.email}`,
  },
  {
    icon:  "fi fi-rr-phone-call",
    label: "Phone",
    value: personal.phone,
    href:  `tel:${personal.phone}`,
  },
  {
    icon:  "fi fi-brands-github",
    label: "GitHub",
    value: "KritiShreeSingh",
    href:  personal.github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-wrap" style={{ textAlign: "center" }}>

      <p className="fade-in" style={{
        fontFamily: "'Fira Code', monospace",
        color: "var(--teal)",
        fontSize: 13,
        letterSpacing: "1px",
        marginBottom: 16,
      }}>
        &gt; lets_work_together.sh
      </p>

      <motion.h2
        className="fade-in"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "clamp(36px, 5vw, 66px)",
          fontWeight: 800,
          letterSpacing: "-2px",
          lineHeight: 1.1,
          marginBottom: 20,
        }}
      >
        Ready to build<br />
        <span style={{ color: "var(--teal)" }}>something great?</span>
      </motion.h2>

      <p className="fade-in" style={{
        color: "var(--muted)",
        fontSize: 15,
        lineHeight: 1.8,
        maxWidth: 520,
        margin: "0 auto 50px",
      }}>
        I am actively looking for my first frontend role. I am enthusiastic,
        quick to learn, and ready to co