import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { CONTACT } from "../utils/constants/contact";
import { URLS } from "../utils/constants/urls";

export default function Contact() {
  const [tab, setTab] = useState<"form" | "details">("form");
  const data = CONTACT;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResponse(null);

    try {
      const res = await fetch(URLS.MAIL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "hanifa",
          accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(`Failed with status ${res.status}`);
      }

      const result = await res.json();
      if (result) {
        setResponse({ type: "success", message: "Message sent successfully" });
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setResponse({ type: "error", message: err.message || "Something went wrong!" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col justify-center px-6 w-full max-w-6xl mx-auto py-16">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-left mb-2 text-gray-900 dark:text-white"
      >
        {data.title}
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-semibold text-primary mb-6"
      >
        {data.slogan}
      </motion.h3>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex mb-6 border-b border-gray-300 dark:border-gray-700"
      >
        <button
          onClick={() => setTab("form")}
          className={`px-4 py-2 text-sm font-medium ${tab === "form" ? "border-b-2 border-primary text-primary" : "text-gray-500 dark:text-gray-400"
            }`}
        >
          Form
        </button>
        <button
          onClick={() => setTab("details")}
          className={`px-4 py-2 text-sm font-medium ${tab === "details" ? "border-b-2 border-primary text-primary" : "text-gray-500 dark:text-gray-400"
            }`}
        >
          Details
        </button>
      </motion.div>


      <AnimatePresence mode="wait">
        {tab === "form" ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >

            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name, your fame"
                required
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 
                           text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Where can I reach you back?"
                required
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 
                           text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your words, my inbox."
                required
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 
                           text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
              ></textarea>
            </div>

            {response && (
              <p
                className={`text-sm ${response.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-500"
                  }`}
              >
                {response.message}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={submitting}
                className="flex-1 bg-primary text-white py-2 px-4 rounded-md font-medium shadow-md hover:opacity-90 transition disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Submit"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="reset"
                onClick={() => setForm({ name: "", email: "", message: "" })}
                className="flex-1 border border-gray-400 dark:border-gray-600 py-2 px-4 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition"
              >
                Reset
              </motion.button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-left space-y-4 text-gray-700 dark:text-gray-300"
          >
            <p>{data.location}</p>
            <p>
              <a href={`mailto:${data.email}`} className="text-primary font-medium hover:underline">
                {data.email}
              </a>
            </p>
            <p>
              <a href={`tel:${data.phone}`} className="text-primary font-medium hover:underline">
                {data.phone}
              </a>
            </p>
            <div className="flex gap-6">
              <a href={URLS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition">
                <Github size={15} strokeWidth={1.75} absoluteStrokeWidth /> Github
              </a>
              <a href={URLS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition">
                <Linkedin size={16} strokeWidth={1.75} absoluteStrokeWidth /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 flex justify-between text-sm text-primary font-medium"
      >
        <Link
          to={"/education"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          ← Education
        </Link>
        <Link
          to={"/stats"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Stats →
        </Link>
      </motion.div>
    </section>
  );
}
