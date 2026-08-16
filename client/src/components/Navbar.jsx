import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Skills", "#skills"],
  ["Automation", "#automation"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const linkedin =
  "https://www.linkedin.com/in/vishnu-kant-pandey-8332a9297/";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const goTo = (hash) => {
    setOpen(false);

    if (location.pathname !== "/") {
      window.location.href = `/${hash}`;
      return;
    }

    const element = document.querySelector(hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goHome = () => {
    setOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3">

        {/* ================= LOGO ================= */}
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-3 text-left"
          aria-label="Go to Home"
        >
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-sm font-black text-black">
            VK
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold text-white">
              Vishnu Kant Pandey
            </p>

            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              AI · Automation · Full Stack
            </p>
          </div>
        </button>

        {/* ================= DESKTOP NAVBAR ================= */}
        {/* md:flex means laptop screens will show this */}
        <div className="hidden items-center gap-1 md:flex">

          {links.map(([label, hash]) => (
            <button
              key={hash}
              type="button"
              onClick={() => goTo(hash)}
              className="rounded-xl px-3 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              {label}
            </button>
          ))}

          {/* LINKEDIN */}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-bold text-white transition hover:bg-white/5 hover:text-white"
          >
            LinkedIn
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        {/* Only visible below md / 768px */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-200 transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden"
          >
            {links.map(([label, hash]) => (
              <button
                key={hash}
                type="button"
                onClick={() => goTo(hash)}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {label}
              </button>
            ))}

            {/* MOBILE LINKEDIN */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-white transition hover:bg-white/5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}