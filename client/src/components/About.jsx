import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="01 — About"
          title="Where automation meets software development."
          description="I build technology around real problems—not technology for its own sake."
        />

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-7 sm:p-9"
          >
            <p className="text-lg leading-8 text-zinc-300">
              I'm <strong className="text-white">Vishnu Kant Pandey</strong>, an AI Automation Associate and Full-Stack Developer focused on building intelligent solutions that make businesses more efficient.
            </p>
            <p className="mt-5 leading-8 text-zinc-400">
              My work combines AI, workflow automation, business process optimization, and modern web development. I enjoy understanding how a process works, identifying repetitive or inefficient tasks, and transforming them into reliable automated workflows.
            </p>
            <p className="mt-5 leading-8 text-zinc-400">
              Alongside automation, I build full-stack applications using JavaScript, React.js, Node.js, Express.js, and MongoDB, with experience developing responsive interfaces, REST APIs, database-driven applications, and complete frontend-to-backend solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-white/[0.03] to-purple-500/10 p-7 sm:p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">My goal</p>
            <h3 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Build smarter systems that reduce manual work and create measurable value.
            </h3>
            <div className="mt-8 space-y-3 text-sm text-zinc-400">
              {["Understand the problem", "Design the workflow", "Build the solution", "Measure and optimize"].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/10 text-xs text-white">
                    0{i + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}