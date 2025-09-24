import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Layout (can also lazy-load if needed)
import Layout from "./layouts/Layout";
import Loader from "./components/Loader";
import { incrementViews } from "./api/portfolio.api";


// Lazy load Welcome + NotFound
const Welcome = lazy(() => import("./pages/Welcome"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Introduction = lazy(() => import("./pages/Introduction"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Experience = lazy(() => import("./pages/Experience"));
const Education = lazy(() => import("./pages/Education"));
const Contact = lazy(() => import("./pages/Contact"));
const Stats = lazy(() => import("./pages/Stats"));



export default function App() {
   useEffect(() => {
      const recordView = async () => {
        await incrementViews().then(() => console.log(""))
      };
      recordView();
    }, []);
  return (
    <Suspense
      fallback={
        <Loader />
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
