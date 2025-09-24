import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { EXPERIENCE } from "../utils/constants/experience"

export default function Experience() {
  const data = EXPERIENCE;
  return (
    <section
      id="experience"
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
        className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-4xl"
      >
        {data.summary}
      </motion.p>

      <motion.div
        className="relative border-l border-gray-300 dark:border-gray-700 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        {data.records.map((job, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 ml-6"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
              className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-white dark:ring-black"
            >
              🏢
            </motion.span>

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                {job.role} – {job.organization}
                {job.latest && (
                  <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-md">
                    Latest
                  </span>
                )}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {job.period}
              </span>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                {job.tasks.map((t, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  >
                    {t}
                  </motion.li>
                ))}
              </ul>
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
          to={"/skills"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          ← Skills & Tools
        </Link>
        <Link
          to={"/education"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Education →
        </Link>
      </motion.div>
    </section>
  );
}
