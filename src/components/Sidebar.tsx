import { Link, useLocation } from "react-router-dom";

const sections = [
  { name: "Introduction", path: "/introduction" },
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills & Tools", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
  { name: "Stats", path: "/stats" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden md:flex fixed top-14 left-0 h-[calc(100%-3.5rem)] w-64 bg-gray-50 dark:bg-black border-r border-gray-200 dark:border-gray-800 flex-col z-40">
      <div className="p-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
        Sections
      </div>
      <ul className="flex flex-col gap-1 px-4">
        {sections.map((s) => (
          <li key={s.name}>
            <Link
              to={s.path}
              className={`block rounded-md px-3 py-2 text-sm ${
                location.pathname === s.path
                  ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
