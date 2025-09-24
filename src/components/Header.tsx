import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Github, ExternalLink } from "lucide-react";
import { CommandMenu } from "./command/CommandMenu";
import { Link } from "react-router-dom";
import { URLS } from "../utils/constants/urls"

export default function Header() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-14 z-50 flex items-center justify-between px-6 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="font-bold text-lg text-gray-900 dark:text-gray-100 hover:text-blue-600"
        >
          Hanifa
        </Link>
        <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
          <a
            href={URLS.BLOG}
            className="flex items-center gap-2 hover:text-blue-600 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
            <sup><ExternalLink className="w-3 h-3" /></sup>
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <CommandMenu />
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <a
          href={URLS.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <Github size={18} />
        </a>
      </div>
    </nav>
  );
}
