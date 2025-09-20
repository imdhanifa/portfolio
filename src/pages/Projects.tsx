import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Loader from "../components/Loader";


export default function Projects() {
    const { data, loading, error } = useSelector((state: RootState) => state.portfolio);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!data) return null;
  return (
    <section
      id="projects"
      className="flex flex-col justify-center px-6 w-full max-w-6xl mx-auto py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-left text-gray-900 dark:text-white"
      >
        Projects
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-semibold text-primary mb-12 text-left"
      >
        A lot of ideas, but some are still under construction!
      </motion.h3>

      {/* Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {data.projects.map((p) => (
          <motion.div
            key={p.title}
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
                       p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {p.description}
            </p>

            {/* Link */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm font-medium hover:underline"
            >
              Learn More...
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 flex justify-between text-sm text-primary font-medium"
      >
        <Link
          to={"/about"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          ← About Me
        </Link>
        <Link
          to={"/skills"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Skills & Tools →
        </Link>
      </motion.div>
    </section>
  );
}
