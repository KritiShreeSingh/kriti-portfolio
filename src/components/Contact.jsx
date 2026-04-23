import { motion } from "framer-motion";
import { personal } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg h-full relative overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-6 relative z-10">
        
        <motion.div 
          className="bg-[#1D171F] rounded-[40px] p-10 md:p-16 border-t border-white/5 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background decorative blob */}
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-bg2 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-80" />

          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
              I'm always up for a chat.
            </h2>
            
            <p className="text-xl text-textMuted font-body leading-relaxed mb-10">
              Pop me an email at{" "}
              <a href={`mailto:${personal.email}`} className="text-white hover:text-brand underline decoration-brand/50 underline-offset-4 transition-colors font-semibold">
                {personal.email}
              </a>
              <br className="hidden md:block" /> or give me a shout on social media.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-12">
              <div className="flex items-center gap-4 text-white/80 font-body">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>{personal.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-white/80 font-body">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>{personal.location}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-brand border border-white/10 hover:border-brand flex items-center justify-center text-white transition-all transform hover:-translate-y-1 group"
                aria-label="LinkedIn"
              >
                <i className="fi fi-brands-linkedin text-xl group-hover:text-white transition-colors" />
              </a>
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-brand border border-white/10 hover:border-brand flex items-center justify-center text-white transition-all transform hover:-translate-y-1 group"
                aria-label="GitHub"
              >
                <i className="fi fi-brands-github text-xl group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.h1 
          className="text-[12vw] md:text-[8rem] font-heading font-extrabold text-[#3a2f40] leading-none text-center -mt-8 md:-mt-16 pointer-events-none sticky z-0 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
        >
          Hey there!
        </motion.h1>

      </div>
    </section>
  );
}