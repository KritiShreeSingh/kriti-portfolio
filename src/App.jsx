import { useEffect } from "react";

import Cursor         from "./components/Cursor";
import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import Ticker         from "./components/Ticker";
import About          from "./components/About";
import Skills         from "./components/Skills";
import Projects       from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact        from "./components/Contact";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-grid" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}