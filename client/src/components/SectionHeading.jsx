import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="mb-12 max-w-3xl"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
