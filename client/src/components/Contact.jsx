import { useState } from "react";
import {
  LoaderCircle,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { sendContactMessage } from "../services/api";
import { site } from "../data/site";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState({
    loading: false,
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setState({
      loading: true,
      type: "",
      message: "",
    });

    try {
      const result = await sendContactMessage(form);

      setState({
        loading: false,
        type: "success",
        message: result.message || "Thanks! Your message has been received.",
      });

      setForm(initialForm);
    } catch (error) {
      console.error("CONTACT FORM ERROR:", error);

      setState({
        loading: false,
        type: "error",
        message:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-shell">
        <SectionHeading
          eyebrow="09 — Contact"
          title="Let's build something smarter."
          description="Have a business process that could be automated, an AI-powered product idea, or a full-stack project? Tell me about it."
        />

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-7 sm:p-9"
          >
            <Mail className="text-blue-300" />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Start a conversation
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              I'm open to connecting with professionals, founders, recruiters
              and organizations interested in AI automation, software
              development and digital transformation.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-7 inline-block text-sm font-semibold text-white underline decoration-white/20 underline-offset-4"
            >
              {site.email}
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id="contact-name"
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />

              <Field
                id="contact-email"
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="mt-4">
              <Field
                id="contact-subject"
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What would you like to build?"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or requirement..."
                rows={6}
                className="w-full resize-y rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/25"
              />
            </div>

            {/* Success / Error Message */}
            {state.message && (
              <div
                className={`mt-4 flex items-center gap-2 rounded-xl border p-3 text-sm ${
                  state.type === "success"
                    ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-300"
                    : "border-red-400/20 bg-red-400/5 text-red-300"
                }`}
              >
                {state.type === "success" ? (
                  <CheckCircle2 size={16} />
                ) : (
                  <AlertCircle size={16} />
                )}

                <span>{state.message}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.loading}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state.loading ? (
                <LoaderCircle className="animate-spin" size={17} />
              ) : (
                <Send size={17} />
              )}

              {state.loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500"
      >
        {label}
      </label>

      <input
        id={id}
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/25"
      />
    </div>
  );
}
