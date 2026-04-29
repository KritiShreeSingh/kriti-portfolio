import { motion } from "framer-motion";
import { personal } from "../data";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-32 pb-12 relative bg-bg text-textMain px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col z-10 order-2 md:order-1"
        >
          <span className="text-textMuted font-body mb-4 tracking-wide text-lg">
            I am {personal.shortName}
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-bold leading-[1.1] mb-6">
            Front-End <br /> Developer 
          </h1>

          <p className="text-lg md:text-xl text-textMuted font-body leading-relaxed max-w-xl mb-10">
            Blending thoughtful UI design with clean, responsive development to create websites that look great and perform flawlessly.
          </p>

          <div className="flex items-center gap-6">
            <a href="/Kriti%20Shree%20Singh.pdf" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/10 text-white px-8 py-3 rounded-full font-body font-medium text-sm hover:bg-white/20 transition-all hover:scale-105">
              Resume
            </a>
            <div className="flex gap-4">
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <i className="fi fi-brands-linkedin text-lg text-white" />
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <i className="fi fi-brands-github text-lg text-white" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="relative w-full flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
             src="/profile.jpg" 
             alt="Kriti Shree Singh" 
             className="w-full max-w-md object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-3xl"
             onError={(e) => { e.target.src = "https://via.placeholder.com/400x500/1A1A1A/FFFFFF?text=Photo+(profile.jpg)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}