import { motion } from "framer-motion";

const skillsData = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js"] },
  { category: "Backend & DB", items: ["Node.js", "Firebase", "MongoDB", "Basic SQL"] },
  { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "Postman", "Render", "React Native (Expo)"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-white font-heading text-4xl md:text-5xl font-extrabold mb-4">
            Skills
          </h2>
          <p className="text-textMuted font-body text-lg">
            Crafting seamless UI/UX and clean code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-[#111111] rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all hover:scale-[1.02]"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 font-body">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
