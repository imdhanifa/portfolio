import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatCategory } from "../utils/formatCategory";
import { SKILLS } from "../utils/constants/skills"

export default function Skills() {
  const data = SKILLS;
  return (
    <section
      id="skills"
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

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-left w-full leading-relaxed"
      >
        {data.summary}
      </motion.p>

      <motion.div
        className="space-y-10 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 },
          },
        }}
      >
        {Object.entries(data.skills).map(([category, list]) => (
          <motion.div
            key={category}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {formatCategory(category)}
            </h3>

            <div className="flex flex-wrap gap-3">
              {list.map((item: string, i: number) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm rounded-md 
                             bg-gray-100 dark:bg-gray-800 
                             text-gray-800 dark:text-gray-200 
                             font-medium shadow-sm 
                             hover:bg-gray-200 dark:hover:bg-gray-700 
                             transition"
                >
                  {item}
                </motion.span>
              ))}
            </div>
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
          to={"/projects"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          ← Projects
        </Link>
        <Link
          to={"/experience"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Experience →
        </Link>
      </motion.div>
    </section>
  );
}