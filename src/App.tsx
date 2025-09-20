import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// ✅ Lazy load Welcome + NotFound
const Welcome = lazy(() => import("./sections/Welcome"));
const NotFound = lazy(() => import("./sections/NotFound"));

// Other pages (can also lazy-load if needed)
import Introduction from "./sections/Introduction";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Stats from "./sections/Stats";

export default function App() {
  const location = useLocation();
  const isWelcome =
    location.pathname === "/" || location.pathname === "/portfolio/";

  return (
    <div className="font-sans bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      {!isWelcome && <Navbar />}
      {!isWelcome && <Sidebar />}

      <div className="flex-1 flex">
        <main
          className={`w-full ${
            !isWelcome ? "md:ml-64 pt-14 pb-16 px-6" : ""
          }`}
        >
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen text-purple-500 font-mono text-xl">
                Loading...
              </div>
            }
          >
            <Routes>
              {/* Welcome */}
              <Route path="/" element={<Welcome />} />

              {/* Portfolio routes */}
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/stats" element={<Stats />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>

      {!isWelcome && <Footer />}
    </div>
  );
}
