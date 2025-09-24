import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS } from "../utils/constants/projects"


export default function Projects() {
  const  data = PROJECTS;
  return (
    <section
      id="projects"
      className="flex flex-col justify-center px-6 w-full max-w-6xl mx-auto py-16"
    >
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
        {data.records.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800
            shadow-md hover:bg-purple-50 dark:hover:bg-purple-900/20"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              {p.title}
            </h3>

            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {p.description}
            </p>

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
