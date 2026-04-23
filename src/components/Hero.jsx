import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personal } from "../data";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const FULL = personal.shortName;

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < FULL.length) { setTyped(FULL.slice(0, i + 1)); i++; }
      else clearInterval(t);
    }, 150);
    return () => clearInterval(t);
  }, [FULL]);

  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Graphic / Illustration area mimicking Cassie's desktop/lamp */}
        <motion.div
          className="relative w-full aspect-square md:aspect-auto md:h-[500px] bg-bg2/40 rounded-[40px] flex items-center justify-center p-8 border border-white/5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent rounded-[40px]" />
          
          <motion.div 
            className="relative z-10 w-full h-full bg-bg3 rounded-3xl shadow-2xl border border-white/10 flex flex-col justify-between p-6 overflow-hidden"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Terminal Top bar */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            {/* Code Content placeholder */}
            <div className="mt-8 flex-1 font-body text-brand text-sm leading-relaxed opacity-80">
              <span className="text-pink-400">const</span> <span className="text-blue-300">developer</span> = {'{'}
              <br/>&nbsp;&nbsp;name: <span className="text-yellow-200">'{personal.name}'</span>,
              <br/>&nbsp;&nbsp;skills: [<span className="text-yellow-200">'React.js'</span>, <span className="text-yellow-200">'Tailwind CSS'</span>],
              <br/>&nbsp;&nbsp;loveForCode: <span className="text-purple-300">true</span>
              <br/>{'};'}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col z-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">👋</span>
            <span className="font-heading font-semibold text-brand tracking-widest text-sm uppercase">Hi, I'm {typed}<span className="animate-pulse">_</span></span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-textMain leading-tight mb-6">
            I'm a <span className="text-textMuted font-body italic text-4xl md:text-5xl border-b-4 border-brand/40">Frontend Developer</span>.
          </h1>

          <p className="text-xl md:text-2xl text-textMain/90 font-body font-medium leading-relaxed max-w-xl">
            passionate about building <span className="text-brand font-bold">responsive</span> and <span className="text-brand font-bold">user-friendly</span> web applications using React and modern technologies.
          </p>

          <div className="mt-10 flex gap-4">
            <a href="#projects" className="bg-brand text-white px-8 py-4 rounded-full font-body font-semibold text-sm hover:bg-brand-hover transition-all shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:-translate-y-1">
              View Work
            </a>
            <a href="#contact" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-body font-semibold text-sm hover:bg-white/5 transition-all hover:-translate-y-1">
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}