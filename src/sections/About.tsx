import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center px-6 w-full max-w-6xl mx-auto py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-2 text-gray-900 dark:text-white text-left"
      >
        About Mohamed
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-semibold text-primary mb-8 text-left"
      >
        More than just a title—let’s dive deeper!
      </motion.h3>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-left"
      >
        <p>
          I’m <span className="font-semibold text-primary">Mohamed Hanifa</span>, a
          passionate Full Stack Software Engineer with{" "}
          <strong>4.8 years</strong> of experience building enterprise-grade
          applications. My expertise lies in{" "}
          <span className="font-medium">.NET 8, GraphQL, and Microservices</span>,
          alongside strong frontend proficiency in Angular and React.js.
        </p>

        <p>
          With a strong foundation in software architecture and design patterns, I
          focus on creating{" "}
          <span className="italic">scalable, secure, and efficient</span> solutions.
          I’ve contributed to <span className="italic">FinTech</span> and{" "}
          <span className="italic">Travel Tech</span> platforms, optimized SQL
          queries for performance, and mentored junior developers in best
          practices.
        </p>

        <p>
          Beyond coding, I thrive in collaborative environments and enjoy solving
          real-world challenges with creative solutions. My mission is to craft
          impactful products that make a difference in people’s lives.
        </p>
      </motion.div>

      {/* Navigation links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 flex justify-between text-sm text-primary font-medium"
      >
        <Link
          to={"/introduction"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          ← Introduction
        </Link>
        <Link
          to={"/projects"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Projects →
        </Link>
      </motion.div>
    </section>
  );
}
