/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import useFetch from "../hooks/useFetch";
import type { GitHubStats } from "../@types/github";
import { Eye, Heart } from "lucide-react";
// ---------------- CONFIG ----------------
const GITHUB_USERNAME = "imdhanifa"; // your GitHub username

// ---------------- Contributions Graph ----------------
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
      {/* 📱 Mobile: Last 3 months */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:hidden w-full"
      >
        <GitHubCalendar
          username={GITHUB_USERNAME}
          transformData={(data: any[]) =>
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

      {/* 💻 Desktop: Full year */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:block w-full"
      >
        <GitHubCalendar
          username={GITHUB_USERNAME}
          transformData={(data: any[]) =>
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

// ---------------- Stat Card ----------------
function StatCard({
  title,
  value,
  accent,
}: {
  title: string;
  value: any;
  accent?: string;
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
      <h4 className="text-sm uppercase tracking-wide text-gray-400">{title}</h4>
      <p className={`mt-2 text-3xl font-bold ${accent || "text-purple-500"}`}>
        {value}
      </p>
    </motion.div>
  );
}

// ---------------- Main Stats Page ----------------
export default function Stats() {
  const [viewers, setViewers] = useState<number | null>(null);
  const [likes, setLikes] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const { data: portfolio, loading: portfolioLoading, error: portfolioError } =
    useSelector((state: RootState) => state.portfolio);
  const { data: stats, loading, error } = useFetch<GitHubStats>(
    portfolio?.githubProfile ?? ""
  );
  useEffect(() => {
    const fetchViewers = async () => {
      try {
        const response = await fetch("https://portfolio-api-w6sj.onrender.com/api/portfolio/viewers", {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": "hanifa",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setViewers(data.viewers); // ✅ directly extract "viewers"
      } catch (err) {
        console.error("Failed to fetch viewers:", err);
        setViewers(0);
      }
    };

    const fetchLikes = async () => {
      try {
        const response = await fetch("https://portfolio-api-w6sj.onrender.com/api/portfolio/likes", {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": "hanifa",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setLikes(data.likes);
      } catch (err) {
        console.error("Failed to fetch viewers:", err);
        setLikes(0);
      }
    };

    fetchViewers();
    fetchLikes();
  }, []);

  const handleClick = async () => {
    try {
      // Example API call (replace with your endpoint)
      const res = await fetch("https://portfolio-api-w6sj.onrender.com/api/portfolio/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "hanifa", // replace if needed
        },
        body: JSON.stringify({ action: "love" }),
      });

      if (!res.ok) {
        throw new Error("API request failed");
      }
      const data = await res.json();
      setLikes(data.likes);
      setLiked(true);
    } catch (error) {
      console.error("Error liking:", error);
    }
  };

  if (portfolioLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (portfolioError) {
    return (
      <p className="text-red-500 text-center mt-10">
        Error: {portfolioError}
      </p>
    );
  }

  if (!portfolio || error) {
    return null; // still waiting for portfolio data
  }

  return (
    <section
      id="stats"
      className="flex flex-col justify-center px-6 w-full max-w-6xl mx-auto py-16"
    >
      {/* Section Title */}
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
        {/* Total Views */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center p-8 
        bg-black border rounded-2xl border-gray-700 shadow-md
         hover:bg-purple-50 dark:hover:bg-purple-900/20"
        >
          <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-white">
            <Eye className="w-5 h-5" />
            Total Views
          </div>
          <div className="text-5xl font-bold text-purple-500">{viewers}</div>
          <p className="mt-2 text-sm text-gray-400">
            Unique page visits since 2025
          </p>
        </motion.div>

        {/* Appreciation Count */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center p-8 
        bg-black border rounded-2xl border-gray-700 shadow-md
         hover:bg-rose-50 dark:hover:bg-rose-900/20"
        >
          <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-white">
            <Heart className="w-5 h-5 text-pink-500" />
            Appreciation Count
          </div>
          <div className="text-5xl font-bold text-pink-500">{likes}</div>
          <button
            disabled={liked}
            onClick={() => handleClick()}
            className="mt-4 px-5 py-2 rounded-full border border-gray-600 text-sm text-white flex items-center gap-2 hover:bg-pink-500 hover:text-white transition-all"
          >
            <Heart className="w-4 h-4" />
            {liked ? "Appreciated!" : "Thank you, much appreciated!"}
          </button>
        </motion.div>
      </motion.div>

      {/* Profile Stats */}
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
            value={stats.hireable ? "Yes" : "No"}
            accent="text-green-500"
          />
          <StatCard title="Public Repositories" value={stats.public_repos} />
          <StatCard title="Followers" value={stats.followers} />
          <StatCard title="Following" value={stats.following} />
          <StatCard title="Company" value={stats.company || "-"} />
          <StatCard title="Location" value={stats.location || "-"} />
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

      {/* Contributions Graph */}
      <div className="rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 
                       p-6 shadow-sm hover:shadow-md transition mx-auto">
        <GitHubGraphs />
      </div>

      {/* Navigation Links */}
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
