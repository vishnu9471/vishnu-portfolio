import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const process = [
  ["01", "Think Before Building", "Start by understanding the problem instead of immediately jumping into implementation."],
  ["02", "Simplify Complexity", "Turn complex workflows into simple, structured systems."],
  ["03", "Build End-to-End", "Connect frontend interfaces, backend APIs, databases and integrations."],
  ["04", "Automate Repetition", "Look for opportunities to automate repetitive, time-consuming or rule-based tasks."],
  ["05", "Keep Learning", "Continuously explore AI tools, automation frameworks, APIs and modern development practices."]
];

export default function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="section-shell">
        <SectionHeading eyebrow="08 — How I Work" title="A practical way of solving problems." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map(([number, title, description], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"
            >
              <span className="text-xs text-blue-300">{number}</span>
              <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}