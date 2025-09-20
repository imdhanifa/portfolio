import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Loader from "../components/Loader";

export default function Experience() {
  const { data, loading, error } = useSelector((state: RootState) => state.portfolio);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!data) return null;
  return (
    <section
      id="experience"
      className="flex flex-col justify-center px-6 w-full max-w-6xl mx-auto py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-left mb-2 text-gray-900 dark:text-white"
      >
        Experience
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-semibold text-primary mb-6"
      >
        You need it to get the job, but the job’s what gives it!
      </motion.h3>

      {/* Intro paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-4xl"
      >
        Throughout my journey as a developer, I’ve worked with cutting-edge technologies
        while mastering the art of debugging at 2 AM. From building dynamic web apps to
        solving cryptic errors, my experience has been a blend of structured learning
        and spontaneous problem-solving. Each role has sharpened my ability to write
        clean code, collaborate effectively, and—most importantly—fix bugs before they fix me.
      </motion.p>

      {/* Timeline */}
      <motion.div
        className="relative border-l border-gray-300 dark:border-gray-700 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        {data.experience.map((job, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 ml-6"
          >
            {/* Timeline dot */}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
              className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-white dark:ring-black"
            >
              🏢
            </motion.span>

            {/* Job Content */}
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

      {/* Navigation links */}
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
