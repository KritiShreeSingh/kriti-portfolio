import { motion } from "framer-motion";

const skillsData = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js"] },
  { category: "Backend & DB", items: ["Node.js", "Firebase", "MongoDB", "Basic SQL"] },
  { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "Postman", "Render", "React Native (Expo)"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg3 relative border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-white font-heading text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-4">
            <i className="fi fi-rr-settings text-brand text-3xl" />
            Skills & Tools.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-bg2/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand/40 transition-colors"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-6 border-b border-white/10 pb-4">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-white/80 font-body">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
