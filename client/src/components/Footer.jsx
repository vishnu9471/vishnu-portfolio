import { Mail, ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-10 border-t border-white/10 bg-black py-12">
      <div className="section-shell">

        {/* TOP FOOTER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

          {/* NAME */}
          <div>
            <p className="text-lg font-bold text-white">
              Vishnu Kant Pandey
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              AI Automation · Software Development · Business Process Optimization
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-3">

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/vishnu-kant-pandey-8332a9297/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white hover:text-black"
            >
              <span className="text-base font-bold">in</span>
              <span>LinkedIn</span>
              <ArrowUpRight size={15} />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/vishnu9471"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white hover:text-black"
            >
              <span className="text-base font-bold">GH</span>
              <span>GitHub</span>
              <ArrowUpRight size={15} />
            </a>

            {/* EMAIL */}
            <a
              href="mailto:kantpandeyvishnu312@gmail.com"
              aria-label="Email"
              className="group flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white hover:text-black"
            >
              <Mail size={17} />
              <span>Email</span>
              <ArrowUpRight size={15} />
            </a>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-white/10" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col justify-between gap-3 text-xs text-zinc-500 sm:flex-row sm:items-center">

          <p>
            © {new Date().getFullYear()} Vishnu Kant Pandey. All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            Back to top
            <ArrowUpRight size={14} />
          </button>

        </div>

      </div>
    </footer>
  );
}