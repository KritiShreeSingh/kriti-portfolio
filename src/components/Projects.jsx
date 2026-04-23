import { motion } from "framer-motion";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg2 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.h2 
          className="text-white font-heading text-5xl font-extrabold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Projects.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg rounded-2xl p-8 border border-white/10 hover:border-brand/40 transition-all group flex flex-col h-full hover:shadow-[0_8px_30px_rgb(235,78,132,0.12)] relative overflow-hidden"
            >
              {/* Window controls decoration like cassie.codes */}
              <div className="flex gap-2 mb-6 absolute top-6 left-6">
                 <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                 <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                 <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>

              <div className="mt-6 flex-1">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{p.name}</h3>
                <div className="text-brand text-xs font-body font-semibold tracking-wider uppercase mb-4">
                  {p.category}
                </div>
                <p className="text-textMuted font-body text-sm leading-relaxed mb-6">
                  {p.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80 font-body">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={p.github} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white font-body text-sm font-semibold hover:text-brand transition-colors mt-auto w-fit"
              >
                View on GitHub
                <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}