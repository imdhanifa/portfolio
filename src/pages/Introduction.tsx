import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Loader from "../components/Loader";

export default function Introduction() {
  const { data, loading, error } = useSelector((state: RootState) => state.portfolio);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!data) return null;

  // ✅ Convert Base64 resume into downloadable file
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = data.resume;
    link.download = "Mohamed_Hanifa_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="introduction"
      className="flex flex-col justify-center px-6 w-full max-w-6xl mx-auto py-16"
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-bold mb-4 text-gray-900 dark:text-white text-left"
      >
        {data.introduction.title}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="block text-3xl font-semibold text-primary mt-2"
        >
          {data.introduction.slogan}
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-left max-w-2xl mb-6"
      >
        {data.introduction.summary}
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="flex gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadResume}
          className="px-5 py-2 rounded-md bg-primary text-white font-medium shadow hover:opacity-90 transition"
        >
          Get Resume
        </motion.button>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`mailto:${data.contact.email}`}
          className="px-5 py-2 rounded-md border border-gray-400 dark:border-gray-600 
                     text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition"
        >
          Send Mail
        </motion.a>
      </motion.div>

      {/* Navigation link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="mt-10 flex justify-end text-sm text-primary font-medium"
      >
        <Link
          to={"/about"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          About Me →
        </Link>
      </motion.div>
    </section>
  );
}
