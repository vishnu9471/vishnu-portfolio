import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  LoaderCircle,
  ArrowUpRight,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import { fetchProject } from "../services/api";

export default function ProjectDetails() {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetchProject(slug)
      .then((data) => {
        setProject(data);
      })
      .catch((err) => {
        console.error(err);

        setError(
          err.response?.data?.message || "Project not found"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  // Loading
  if (loading) {
    return (
      <PageShell>
        <div className="section-shell py-32 text-zinc-500">
          <div className="flex items-center gap-3">
            <LoaderCircle
              size={20}
              className="animate-spin"
            />
            Loading project...
          </div>
        </div>
      </PageShell>
    );
  }

  // Error
  if (error || !project) {
    return (
      <PageShell>
        <div className="section-shell py-32">
          <p className="text-red-300">
            {error || "Project not found"}
          </p>

          <Link
            to="/projects"
            className="mt-5 inline-flex items-center gap-2 text-sm text-white"
          >
            <ArrowLeft size={15} />
            Back to projects
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="section-padding">
        <div className="section-shell">

          {/* Back */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>

          {/* Hero */}
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* Content */}
            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                {project.category}
              </p>

              <h1 className="mt-3 text-5xl font-black tracking-tight text-white sm:text-7xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {(project.technologies || []).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-8 flex flex-wrap gap-3">

                {project.liveUrl &&
                  project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-black"
                    >
                      Live Demo
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                {project.githubUrl &&
                  project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-white"
                    >
                      <ExternalLink size={15} />
                      GitHub
                    </a>
                  )}

              </div>
            </div>

            {/* Project Image */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">

              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/11] w-full object-cover"
                />
              ) : (
                <div className="grid aspect-[16/11] place-items-center text-zinc-600">
                  Project Preview
                </div>
              )}

            </div>
          </div>

          {/* Details */}
          <div className="mt-16 grid gap-5 md:grid-cols-2">

            {/* Overview */}
            <div className="glass rounded-3xl p-7">

              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Overview
              </p>

              <p className="mt-4 leading-8 text-zinc-400">
                {project.longDescription ||
                  project.description}
              </p>

            </div>

            {/* Features */}
            <div className="glass rounded-3xl p-7">

              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                What I Built
              </p>

              {project.features &&
              project.features.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm text-zinc-400"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-zinc-500">
                  Project features will be added soon.
                </p>
              )}

            </div>

          </div>
        </div>
      </section>
    </PageShell>
  );
}