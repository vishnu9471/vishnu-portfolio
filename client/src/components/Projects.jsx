import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { fetchProjects } from "../services/api";

// =====================================================
// PROJECT IMAGES
// =====================================================

const projectImages = {
  "talent-hub": "/images/talent-hub.png",
  "ezykart": "/images/ezykart.png",
  "book-my-stay": "/images/book-my-stay.jpg",
  "samiksha": "/images/samiksha.png",
  "suraksha-ai": "/images/samiksha.png",
};

// =====================================================
// GET PROJECT IMAGE
// =====================================================

function getProjectImage(project) {
  const slug = (project.slug || "").toLowerCase().trim();

  // MongoDB image
  if (project.image) {
    if (project.image.startsWith("/images/")) {
      return project.image;
    }

    if (project.image.startsWith("images/")) {
      return `/${project.image}`;
    }
  }

  // Local fallback
  return projectImages[slug] || null;
}

// =====================================================
// GET URL
// =====================================================

function getProjectUrl(url) {
  if (!url || url === "#") {
    return null;
  }

  if (
    url.startsWith("http://") ||
    url.startsWith("https://")
  ) {
    return url;
  }

  return `https://${url}`;
}

// =====================================================
// PROJECTS
// =====================================================

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ===================================================
  // FETCH PROJECTS
  // ===================================================

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        console.log("PROJECTS FROM API:", data);
        setProjects(data);
      })
      .catch((err) => {
        console.error("PROJECT API ERROR:", err);

        setError(
          "Projects could not be loaded. Start the backend and check MongoDB."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // ===================================================
  // CATEGORIES
  // ===================================================

  const categories = [
    "All",
    ...new Set(
      projects.map((project) => project.category)
    ),
  ];

  // ===================================================
  // FILTER
  // ===================================================

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  // ===================================================
  // RETURN
  // ===================================================

  return (
    <section
      id="projects"
      className="section-padding"
    >
      <div className="section-shell">

        {/* ============================================
            HEADING
        ============================================ */}

        <SectionHeading
          eyebrow="06 — Featured Projects"
          title="Things I've built."
          description="Selected projects combining full-stack development, AI/ML and practical product thinking."
        />

        {/* ============================================
            FILTERS
        ============================================ */}

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={
                filter === category
                  ? "rounded-full bg-white px-4 py-2 text-xs font-semibold text-black"
                  : "rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white"
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* ============================================
            LOADING
        ============================================ */}

        {loading && (
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <LoaderCircle
              className="animate-spin"
              size={16}
            />

            Loading projects...
          </div>
        )}

        {/* ============================================
            ERROR
        ============================================ */}

        {error && !loading && (
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 text-sm text-amber-200">
            {error}
          </div>
        )}

        {/* ============================================
            PROJECT GRID
        ============================================ */}

        {!loading && !error && (
          <div className="grid gap-5 md:grid-cols-2">

            {filteredProjects.map(
              (project, index) => {

                const image =
                  getProjectImage(project);

                const liveUrl =
                  getProjectUrl(project.liveUrl);

                const githubUrl =
                  getProjectUrl(project.githubUrl);

                return (
                  <motion.article
                    key={
                      project._id ||
                      project.slug
                    }
                    layout
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay:
                        index * 0.06,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]"
                  >

                    {/* ==================================
                        IMAGE
                    ================================== */}

                    <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">

                      {image ? (
                        <img
                          src={image}
                          alt={`${project.title} project preview`}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          onError={(event) => {
                            console.error(
                              "IMAGE ERROR:",
                              event.currentTarget.src
                            );

                            event.currentTarget.style.display =
                              "none";
                          }}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-sm text-zinc-600">
                            Project Preview
                          </span>
                        </div>
                      )}

                      {/* IMAGE OVERLAY */}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      {/* CATEGORY */}

                      <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
                        {project.category}
                      </span>

                    </div>

                    {/* ==================================
                        CONTENT
                    ================================== */}

                    <div className="p-6">

                      <div className="flex items-start justify-between gap-4">

                        <div className="min-w-0">

                          <h3 className="text-2xl font-bold text-white">
                            {project.title}
                          </h3>

                          <p className="mt-2 leading-6 text-zinc-400">
                            {project.description}
                          </p>

                        </div>

                        {/* DETAILS */}

                        <Link
                          to={`/projects/${project.slug}`}
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 text-zinc-300 transition hover:bg-white hover:text-black"
                          aria-label={`View ${project.title} details`}
                        >
                          <ArrowUpRight size={17} />
                        </Link>

                      </div>

                      {/* ==================================
                          TECHNOLOGIES
                      ================================== */}

                      {project.technologies?.length >
                        0 && (
                        <div className="mt-5 flex flex-wrap gap-2">

                          {project.technologies.map(
                            (technology) => (
                              <span
                                key={technology}
                                className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] text-zinc-400"
                              >
                                {technology}
                              </span>
                            )
                          )}

                        </div>
                      )}

                      {/* ==================================
                          BUTTONS
                      ================================== */}

                      <div className="mt-6 flex flex-wrap gap-3">

                        {/* =================================
                            LIVE DEMO
                        ================================= */}

                        {liveUrl ? (
                          <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor: "#ffffff",
                              color: "#000000",
                              textDecoration: "none",
                            }}
                            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold shadow-sm transition hover:bg-zinc-200"
                          >
                            <span
                              style={{
                                color: "#000000",
                              }}
                            >
                              Live Demo
                            </span>

                            <ArrowUpRight
                              size={14}
                              style={{
                                color: "#000000",
                              }}
                            />
                          </a>
                        ) : (
                          <span
                            style={{
                              backgroundColor: "#ffffff",
                              color: "#000000",
                            }}
                            className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold opacity-70"
                          >
                            <span
                              style={{
                                color: "#000000",
                              }}
                            >
                              Live Demo
                            </span>

                            <ArrowUpRight
                              size={14}
                              style={{
                                color: "#000000",
                              }}
                            />
                          </span>
                        )}

                        {/* =================================
                            GITHUB
                        ================================= */}

                        {githubUrl ? (
                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor: "transparent",
                              color: "#ffffff",
                              textDecoration: "none",
                            }}
                            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-xs font-semibold transition hover:bg-white/10"
                          >
                            <ArrowUpRight
                              size={14}
                              style={{
                                color: "#ffffff",
                              }}
                            />

                            <span
                              style={{
                                color: "#ffffff",
                              }}
                            >
                              GitHub
                            </span>
                          </a>
                        ) : (
                          <span
                            style={{
                              backgroundColor:
                                "transparent",
                              color: "#ffffff",
                            }}
                            className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-xs font-semibold opacity-50"
                          >
                            <ArrowUpRight
                              size={14}
                              style={{
                                color: "#ffffff",
                              }}
                            />

                            <span
                              style={{
                                color: "#ffffff",
                              }}
                            >
                              GitHub
                            </span>
                          </span>
                        )}

                      </div>

                    </div>

                  </motion.article>
                );
              }
            )}

          </div>
        )}

        {/* ============================================
            NO PROJECTS
        ============================================ */}

        {!loading &&
          !error &&
          filteredProjects.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-8 text-center">
              <p className="text-sm text-zinc-500">
                No projects found in this category.
              </p>
            </div>
          )}

      </div>
    </section>
  );
}