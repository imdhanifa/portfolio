import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="font-sans bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <Sidebar />
      <div className="flex-1 flex">
        <main className="w-full md:ml-64 pt-14 pb-16 px-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
