import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Deluxe Payment Platform | Knila IT Solutions",
    desc: "A secure payment processing platform with PCI-compliant Hosted Payment Forms, recurring payments, and digital wallet integration.",
    link: "https://www.deluxe.com",
  },
  {
    title: "Tripwerkz (Travel Tech) | Tripwerkz India Pvt Ltd",
    desc: "A global travel booking platform offering hotels, flights, tours, and events. Integrated APIs from TBO Holidays and Hotelbeds.",
    link: "https://tripwerkz.com",
  },
  {
    title: "Open Source Projects | GitHub",
    desc: "React-TS-Advanced, Angular MFE, GraphQL API, FastEndpoints Minimal API, and more.",
    link: "https://github.com/imdhanifa",
  },
];

export default function Projects() {
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
        {projects.map((p) => (
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
              {p.desc}
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
