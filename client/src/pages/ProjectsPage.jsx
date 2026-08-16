import { useEffect, useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { fetchProjects } from "../services/api";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetchProjects(category === "All" ? {} : { category })
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.error(err);
        setError(
          err.response?.data?.message || "Failed to load projects."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  return (
    <PageShell>
      <section className="section-padding">
        <div className="section-shell">

          {/* Header */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              Portfolio
            </p>

            <h1 className="mt-3 text-5xl font-black tracking-tight text-white sm:text-7xl">
              Things I've built.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              Selected projects combining full-stack development,
              AI/ML and practical product thinking.
            </p>
          </div>

          {/* Categories */}
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  category === item
                    ? "border-white bg-white text-black"
                    : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex items-center gap-3 py-24 text-zinc-500">
              <LoaderCircle size={20} className="animate-spin" />
              Loading projects...
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="py-24 text-red-300">
              {error}
            </div>
          )}

          {/* Empty */}
          {!loading && !error && projects.length === 0 && (
            <div className="py-24 text-zinc-500">
              No projects found.
            </div>
          )}

          {/* Projects */}
          {!loading && !error && projects.length > 0 && (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project._id}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 transition hover:-translate-y-1 hover:border-white/20"
                >
                  {/* Image */}
                  <Link to={`/projects/${project.slug}`}>
                    <div className="overflow-hidden bg-zinc-950">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="grid aspect-[16/10] place-items-center text-zinc-600">
                          Project Preview
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                      {project.category}
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-white">
                      {project.title}
                    </h2>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {(project.technologies || []).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-6 flex items-center gap-4">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white"
                      >
                        View Project
                        <ArrowUpRight size={15} />
                      </Link>

                      {project.liveUrl &&
                        project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-zinc-500 hover:text-white"
                          >
                            Live Demo
                          </a>
                        )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}