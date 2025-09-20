import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Github } from "lucide-react";
import { CommandMenu } from "./CommandMenu";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-14 z-50 flex items-center justify-between px-6 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      {/* Left: Brand + Links */}
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="font-bold text-lg text-gray-900 dark:text-gray-100 hover:text-blue-600"
        >
          Mohamed Hanifa
        </Link>
        <div className="hidden md:flex gap-6 text-sm text-gray-600 dark:text-gray-400">
          <Link
            to="/"
            className={`hover:text-blue-600 ${
              location.pathname === "/" ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`hover:text-blue-600 ${
              location.pathname === "/blog" ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Blog
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Right: Search, Theme toggle, GitHub */}
      <div className="flex items-center gap-4">
        <CommandMenu />
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <a
          href="https://github.com/imdhanifa"
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
