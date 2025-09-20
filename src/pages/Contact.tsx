import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Loader from "../components/Loader";

export default function Contact() {
  const [tab, setTab] = useState<"form" | "details">("form");
  const { data, loading, error } = useSelector((state: RootState) => state.portfolio);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!data) return null;
  return (
    <section
      id="contact"
      className="flex flex-col justify-center px-6 w-full max-w-6xl mx-auto py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-2 text-gray-900 dark:text-white"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-semibold mb-8 text-gray-600 dark:text-gray-400"
      >
        Get in touch before I write another line of code!
      </motion.p>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex mb-6 border-b border-gray-300 dark:border-gray-700"
      >
        <button
          onClick={() => setTab("form")}
          className={`px-4 py-2 text-sm font-medium ${tab === "form"
            ? "border-b-2 border-primary text-primary"
            : "text-gray-500 dark:text-gray-400"
            }`}
        >
          Form
        </button>
        <button
          onClick={() => setTab("details")}
          className={`px-4 py-2 text-sm font-medium ${tab === "details"
            ? "border-b-2 border-primary text-primary"
            : "text-gray-500 dark:text-gray-400"
            }`}
        >
          Details
        </button>
      </motion.div>

      {/* Tab Content with AnimatePresence */}
      <AnimatePresence mode="wait">
        {tab === "form" ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name, your fame"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 
                           text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Where can I reach you back?"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 
                           text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Temporary emails are also accepted, unless you wish to hear back 😅
              </p>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Your words, my inbox."
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 
                           text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex-1 bg-primary text-white py-2 px-4 rounded-md font-medium shadow-md hover:opacity-90 transition"
              >
                Submit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="reset"
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
            <p>{data.contact.location}</p>
            <p>
              <a
                type="email"
                href={`mailto:${data.contact.email}`}
                className="text-primary font-medium hover:underline"
              >
                {data.contact.email}
              </a>
            </p>
            <p>
              <a
                type="tel"
                href={`tel:${data.contact.phone}`}
                className="text-primary font-medium hover:underline"
              >
                {data.contact.phone}
              </a>
            </p>

            <div className="flex gap-6">
              <a
                type="url"
                href={data.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition"
              >
                GitHub
              </a>
              <a
                type="url"
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation links */}
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
