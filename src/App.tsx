import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Introduction from "./sections/Introduction";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Stats from "./sections/Stats";

import Welcome from "./sections/Welcome"; // 👈

function App() {
  const location = useLocation();
  const isWelcome = location.pathname === "/"; // 👈 check current route

  return (
    <div className="font-sans bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      {/* ✅ Hide Navbar & Sidebar if on WelcomePage */}
      {!isWelcome && <Navbar />}
      {!isWelcome && <Sidebar />}

      <div className="flex-1 flex">
        <main className={`w-full ${!isWelcome ? "md:ml-64 pt-14 pb-16 px-6" : ""}`}>
          <Routes>
            {/* 👇 Fullscreen Welcome page */}
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
          </Routes>
        </main>
      </div>

      {/* ✅ Hide Footer if on WelcomePage */}
      {!isWelcome && <Footer />}
    </div>
  );
}

export default App;
