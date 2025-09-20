import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Diploma in Computer Engineering",
    school: "Mohamed Sathak Polytechnic College",
    period: "2016 – 2019",
    description:
      "Completed diploma studies in Computer Engineering, building strong foundations in programming, databases, and networking.",
    latest: true,
  },
  {
    degree: "Higher Secondary Schooling",
    school: "Govt Higher Secondary School",
    period: "2014 – 2016",
    description:
      "Specialized in Computer Science during higher secondary, gaining exposure to mathematics, physics, and computing basics.",
  },
  {
    degree: "Secondary Education (SSLC)",
    school: "Govt High School",
    period: "2013 – 2014",
    description:
      "Completed foundational education focusing on core subjects with an early interest in technology.",
  },
];

export default function Education() {
  return (
    <section id="education" className="flex flex-col justify-center px-6 w-full max-w-6xl mx-auto py-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-left mb-2 text-gray-900 dark:text-white"
      >
        Education
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-semibold text-primary mb-6"
      >
        I learned a lot, but the real learning happens in the code editor!
      </motion.h3>


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
        {education.map((edu, index) => (
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
              🎓
            </motion.span>

            {/* Job Content */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                {edu.degree} ·{" "}
                <span className="font-normal text-gray-700 dark:text-gray-300">
                  {edu.school}
                </span>
                {edu.latest && (
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-md bg-blue-600 text-white">
                    Latest
                  </span>
                )}
              </h3>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + 0 * 0.1 }}
                className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-2">
                {edu.period}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + 1 * 0.1 }}
                className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {edu.description}
              </motion.p>
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
          to={"/experience"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          ← Experience
        </Link>
        <Link
          to={"/contact"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Contact →
        </Link>
      </motion.div>
    </section>
  );
}
