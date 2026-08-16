import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/site";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="05 — Experience"
          title="Building at the intersection of automation and software."
          description="Professional experience across AI automation, process optimization, integrations and web development."
        />

        <div className="space-y-5">
          {experience.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-7 sm:p-9"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-zinc-500">{item.company}</p>
                </div>
                <span className="h-fit rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">Professional Experience</span>
              </div>
              <p className="mt-7 max-w-4xl leading-7 text-zinc-400">{item.description}</p>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {item.points.map((point) => (
                  <li key={point} className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm text-zinc-400">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}