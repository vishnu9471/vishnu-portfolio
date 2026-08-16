import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="section-shell flex min-h-[70vh] flex-col items-center justify-center text-center">
        <p className="text-7xl font-black text-white">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">Page not found</h1>
        <Link to="/" className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black">
          Back Home
        </Link>
      </section>
    </PageShell>
  );
}