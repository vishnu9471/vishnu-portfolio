import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/site";

export default function Skills() {
  const groups = [...new Set(skills.map((skill) => skill.group))];

  return (
    <section id="skills" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="03 — Skills"
          title="The stack behind the solutions."
          description="A practical mix of AI tools, automation capabilities, frontend engineering, backend development, databases and developer tooling."
        />

        <div className="space-y-5">
          {groups.map((group) => (
            <div key={group}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">{group}</p>
              <div className="flex flex-wrap gap-2">
                {skills.filter((skill) => skill.group === group).map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.025 }}
                    whileHover={{ y: -2 }}
                    className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

