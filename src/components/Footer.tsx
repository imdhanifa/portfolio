export default function Footer() {
  return (
    <footer
      className="
        fixed bottom-0 left-0 
        w-full md:ml-64 md:w-[calc(100%-16rem)] 
        border-t border-gray-200 dark:border-gray-800 
        bg-white dark:bg-black 
        px-4 py-3 
        text-sm text-gray-600 dark:text-gray-400 
        z-50
      "
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Copy */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Mohamed Hanifa. All rights reserved.
        </p>

        {/* Right: Links */}
        <div className="flex gap-4 text-center md:text-right">
          <a
            href="https://github.com/imdhanifa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            Resume
          </a>
          <a href="/contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
