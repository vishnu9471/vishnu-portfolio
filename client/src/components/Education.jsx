import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/site";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="section-shell">
        <SectionHeading eyebrow="07 — Education" title="Academic foundation." />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-7 sm:p-9"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-blue-200">
              <GraduationCap />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{education.period}</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{education.degree}</h3>
              <p className="mt-1 font-medium text-zinc-300">{education.branch}</p>
              <p className="mt-3 text-sm text-zinc-500">{education.college}</p>
              <p className="mt-1 text-sm text-zinc-600">{education.university}</p>
              <p className="mt-5 max-w-3xl leading-7 text-zinc-400">{education.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}