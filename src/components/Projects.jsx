import { motion } from "framer-motion";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-white font-heading text-4xl md:text-5xl font-extrabold mb-4">
            Projects
          </h2>
          <p className="text-textMuted font-body text-lg">
            A selection of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111111] rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all group flex flex-col h-full hover:scale-[1.02] relative"
            >
              <div className="mt-2 flex-1">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{p.name}</h3>
                <div className="text-white/60 text-xs font-body font-medium uppercase mb-4 tracking-wider">
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
                className="inline-flex items-center gap-2 text-white/80 font-body text-sm font-semibold hover:text-white transition-colors mt-auto w-fit"
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