import { motion } from "framer-motion";
import { Bot, Workflow, Code2, Gauge } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { services } from "../data/site";

const icons = [Bot, Workflow, Code2, Gauge];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="02 — What I Do"
          title="Technology focused on business outcomes."
          description="From intelligent workflows to full-stack applications, I connect technical implementation with practical business needs."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass group rounded-3xl p-6 transition sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-blue-200">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs text-zinc-600">{service.number}</span>
                </div>
                <h3 className="mt-7 text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}