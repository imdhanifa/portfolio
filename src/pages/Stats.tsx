import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import type { GitHubStats } from "../@types/github";
import { Eye, Heart } from "lucide-react";
import { CONTACT } from "../utils/constants/contact";
import { URLS } from "../utils/constants/urls";
import { getLikes, getViews, incrementLikes } from "../api/portfolio.api";


function GitHubGraphs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const theme = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:hidden w-full"
      >
        <GitHubCalendar
          username={CONTACT.username}
          transformData={(data) =>
            data.filter(
              (d) =>
                new Date(d.date) >=
                new Date(new Date().setMonth(new Date().getMonth() - 2))
            )
          }
          hideColorLegend
          showWeekdayLabels
          blockMargin={6}
          theme={theme}
          colorScheme="dark"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:block w-full"
      >
        <GitHubCalendar
          username={CONTACT.username}
          transformData={(data) =>
            data.filter(
              (d) =>
                new Date(d.date) >=
                new Date(new Date().setMonth(new Date().getMonth() - 6))
            )
          }
          hideColorLegend={false}
          showWeekdayLabels
          blockMargin={6}
          theme={theme}
          colorScheme="dark"
        />
      </motion.div>
    </>
  );
}


function StatCard({
  title,
  value,
  accent,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 
                 flex flex-col items-center justify-center text-center
                 shadow-md hover:bg-purple-50 dark:hover:bg-purple-900/20"
    >
      <h4 className="text-sm uppercase tracking-wide  text-gray-900 dark:text-white">{title}</h4>
      <p className={`mt-2 text-3xl font-bold ${accent || "text-primary"}`}>
        {value}
      </p>
    </motion.div>
  );
}


export default function Stats() {
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  const { data: stats, loading } = useFetch<GitHubStats>(URLS.GITHUB_API);

  useEffect(() => {
    getViews().then((data) => setViews(data.likes));
    getLikes().then((data) => setLikes(data.likes));
  }, []);

  const handleClick = async () => {
    try {
      const data = await incrementLikes();
      setLikes(data.likes);
      setAlreadyLiked(data.alreadyLiked);
    } catch (error) {
      console.error("Error liking:", error);
    }
  };

  return (
    <section
      id="stats"
      className="flex flex-col justify-center px-6 w-full max-w-6xl mx-auto py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-left mb-2 text-gray-900 dark:text-white"
      >
        GitHub Stats
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-semibold text-primary mb-6"
      >
        Insights and metrics about my GitHub profile
      </motion.h3>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mb-12 mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center p-8 
          rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-md
         hover:bg-purple-50 dark:hover:bg-purple-900/20"
        >
          <div className="flex items-center gap-2 mb-4 text-lg font-semibold  text-gray-900 dark:text-white">
            <Eye className="w-5 h-5" />
            Total Views
          </div>
          <div className="text-5xl font-bold text-primary">{views}</div>
          <p className="mt-2 text-sm text-gray-400">
            Unique page visits since 2025
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center p-8 
          rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-md
         hover:bg-rose-50 dark:hover:bg-rose-900/20"
        >
          <div className="flex items-center gap-2 mb-4 text-lg font-semibold  text-gray-900 dark:text-white">
            <Heart className="w-5 h-5 text-pink-500" />
            Appreciation Count
          </div>
          <div className="text-5xl font-bold text-pink-500">{likes}</div>
          <button
            disabled={alreadyLiked}
            onClick={() => handleClick()}
            className={`mt-4 px-5 py-2 rounded-full border border-gray-300 dark:border-gray-800
              text-sm flex items-center gap-2 transition-all
              ${alreadyLiked ? "cursor-not-allowed opacity-70" : ""}
              text-gray-800 dark:text-gray-200 
              hover:bg-pink-500 hover:text-white`}
          >
            <Heart className="w-4 h-4" />
            {alreadyLiked ? "Appreciated!" : "Thank you, much appreciated!"}
          </button>

        </motion.div>
      </motion.div>

      {loading ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-gray-500 dark:text-gray-400 mb-12 mx-auto"
        >
          Loading GitHub data...
        </motion.p>
      ) : stats ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mb-12 mx-auto"
        >
          <StatCard
            title="Hireable"
            value={stats.hireable ? "YES" : "NO"}
            accent="text-green-500"
          />
          <StatCard title="Public Repositories" value={stats.public_repos} accent={undefined} />
          <StatCard title="Followers" value={stats.followers} accent={undefined} />
          <StatCard title="Following" value={stats.following} accent={undefined} />
          <StatCard title="Company" value={stats.company || "-"} accent={undefined} />
          <StatCard title="Location" value={stats.location || "-"} accent={undefined} />
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500"
        >
          Failed to load GitHub stats
        </motion.p>
      )}

      <div className="rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 
                       p-6 shadow-sm hover:shadow-md transition mx-auto">
        <GitHubGraphs />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 flex justify-between text-sm text-primary font-medium"
      >
        <Link
          to={"/contact"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          ← Contact
        </Link>
        <Link
          to={"/introduction"}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Home →
        </Link>
      </motion.div>
    </section>
  );
}
