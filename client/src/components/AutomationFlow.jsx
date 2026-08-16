import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { automationSteps } from "../data/site";

export default function AutomationFlow() {
  return (
    <section id="automation" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="04 — AI Meets Automation"
          title="Turning business problems into intelligent systems."
          description="I start with the process, identify the friction, then connect AI, APIs, business logic and software into a reliable workflow."
        />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:p-8">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative grid gap-3 md:grid-cols-5">
            {automationSteps.map(([number, title, description], index) => (
              <div key={number} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass h-full rounded-2xl p-5"
                >
                  <span className="text-xs text-blue-300">{number}</span>
                  <h3 className="mt-3 font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                </motion.div>
                {index < automationSteps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-zinc-700 md:block" size={18} />
                )}
              </div>
            ))}
          </div>

          <div className="relative mt-7 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400">
            {["Business Problem", "Analysis", "AI / Logic", "Automation", "API / Tools", "System", "Result"].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">{item}</span>
                {i < 6 && <span className="text-zinc-700">→</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}