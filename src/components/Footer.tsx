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
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Mohamed Hanifa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
