import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { site } from "../data/site";

export default function Hero() {
  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-purple-500/10 blur-[110px]" />

      <div className="section-shell relative flex min-h-[calc(100vh-7rem)] items-center py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300">
              <Sparkles size={14} className="text-blue-300" />
              AI Automation · Full-Stack Development
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Hello, I'm Vishnu
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl xl:text-8xl">
              Building <span className="text-gradient">smarter</span>{" "}
              systems.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              {site.description}
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
              >
                View My Work
                <ArrowUpRight size={17} />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Let's Connect
              </a>
            </div>

            {/* SKILLS */}
            <div className="mt-10 flex flex-wrap gap-2 text-xs text-zinc-500">
              {[
                "AI Automation",
                "Workflow Automation",
                "React.js",
                "Node.js",
                "MongoDB",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* Glow */}
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/15 via-transparent to-purple-500/15 blur-2xl" />

            {/* Image Card */}
            <div className="glass relative overflow-hidden rounded-[2rem] p-2">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-zinc-900">

                {/* NEW PROFILE IMAGE */}
                <img
                  src="/images/vishnu.png"
                  alt="Vishnu Kant Pandey"
                  className="aspect-[4/5] w-full object-cover object-center"
                  loading="eager"
                />

                {/* Bottom Information */}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
                  <p className="text-sm font-bold text-white">
                    AI Automation Associate
                  </p>

                  <p className="mt-1 text-xs text-zinc-400">
                    Workflow Automation · MERN · AI Solutions
                  </p>
                </div>

              </div>
            </div>

            {/* Floating Focus Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass absolute -bottom-5 -left-4 hidden rounded-2xl px-4 py-3 sm:block"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                Focus
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                AI + Automation
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={() =>
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-zinc-500 transition hover:text-white md:flex"
      >
        Scroll to explore
        <ArrowDown size={15} />
      </button>
    </section>
  );
}