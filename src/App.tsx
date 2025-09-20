import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

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

import Layout from "./layouts/Layout";

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen text-purple-500 font-mono text-xl">
          Loading...
        </div>
      }
    >
      <Routes>
        {/* Welcome (no layout) */}
        <Route path="/" element={<Welcome />} />
        <Route path="/portfolio" element={<Welcome />} />

        {/* 404 also inside layout */}
        <Route path="*" element={<NotFound />} />
        
        {/* Portfolio pages with layout */}
        <Route element={<Layout />}>
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stats" element={<Stats />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
