import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Loader from "../components/Loader";
import { formatCategory } from "../utils/formatCategory";

export default function Skills() {
  const { data, loading, error } = useSelector((state: RootState) => state.portfolio);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!data) return null;
  

  return (
    <section
      id="skills"
      className="flex flex-col justify-center px-6 w-full max-w-6xl mx-auto py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-left mb-2 text-gray-900 dark:text-white"
      >
        Skills & Tools
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-semibold text-primary mb-6"
      >
        Learned by coding all night and debugging all day!
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-left w-full leading-relaxed"
      >
        As a <span className="font-medium">Full Stack Software Engineer</span>, I specialize in
        building scalable applications using modern technologies such as{" "}
        <span className="font-medium">.NET 8, GraphQL, Angular, React</span>, and{" "}
        <span className="font-medium">Microservices</span>. I also work with cloud and DevOps tools
        to ensure smooth deployments and CI/CD pipelines.
      </motion.p>

      {/* Grouped skills */}
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
            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {formatCategory(category)}
            </h3>

            {/* Skill tags */}
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

      {/* Navigation links */}
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