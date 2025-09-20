import * as React from "react";
import { useNavigate } from "react-router-dom";

// ----------------- Simple UI Components -----------------
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-3 py-2 rounded-md text-sm font-medium 
      bg-gray-200 dark:bg-gray-800 
      text-gray-800 dark:text-gray-200 
      hover:bg-gray-300 dark:hover:bg-gray-700 
      transition ${className}`}
      {...props}
    />
  );
};

// ✅ iOS-style Command Dialog
function CommandDialog({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={() => onOpenChange(false)} // click outside closes
    >
      <div
        className="relative w-full max-w-lg rounded-2xl 
        bg-white/70 dark:bg-black/70 
        backdrop-blur-xl shadow-2xl border border-white/30 dark:border-gray-700 
        p-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevent closing inside
      >
       {/* Wrap content in a scrollable container */}
        <div className="max-h-[70vh] overflow-y-auto no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}

const CommandList = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4 space-y-3">{children}</div>
);

const CommandGroup = ({
  heading,
  children,
}: {
  heading?: string;
  children: React.ReactNode;
}) => (
  <div>
    {heading && (
      <div className="text-xs uppercase font-semibold mb-2 text-gray-500 dark:text-gray-400">
        {heading}
      </div>
    )}
    <div className="space-y-1">{children}</div>
  </div>
);

const CommandItem = ({
  onSelect,
  children,
}: {
  onSelect?: () => void;
  children: React.ReactNode;
}) => (
  <div
    onClick={() => {
      if (onSelect) onSelect();
    }}
    className="cursor-pointer rounded-md px-3 py-2 text-sm 
    hover:bg-gray-200 dark:hover:bg-gray-800 transition"
  >
    {children}
  </div>
);

const CommandInput = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
}) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className="w-full rounded-md border border-gray-300 dark:border-gray-600 
    bg-white/60 dark:bg-black/60 backdrop-blur-md 
    px-3 py-2 text-sm text-gray-900 dark:text-gray-100 
    focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

const CommandEmpty = ({ children }: { children: React.ReactNode }) => (
  <div className="p-2 text-sm text-gray-500 dark:text-gray-400">{children}</div>
);

// ----------------- Main Component -----------------
const sections = [
  { title: "Introduction", path: "/introduction" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Skills", path: "/skills" },
  { title: "Experience", path: "/experience" },
  { title: "Education", path: "/education" },
  { title: "Contact", path: "/contact" },
  { title: "Stats", path: "/stats" },
];

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const navigate = useNavigate();

  // ⌘K / Ctrl+K and Escape shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    command();
    setOpen(false);
  };

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Button that opens modal */}
      <Button
        onClick={() => setOpen(true)}
        className="relative h-9 w-full justify-start sm:pr-12 md:w-48 lg:w-60 xl:w-72"
      >
        <span className="hidden lg:inline-flex">Search sections...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-gray-300/60 dark:bg-gray-700/60 px-1.5 font-mono text-[10px] font-medium sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      {/* iOS modal style */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a section..."
          value={query}
          onChange={setQuery}
        />
        <CommandList>
          {filteredSections.length === 0 && (
            <CommandEmpty>No results found.</CommandEmpty>
          )}

          <CommandGroup heading="Sections">
            {filteredSections.map((s) => (
              <CommandItem
                key={s.path}
                onSelect={() => runCommand(() => navigate(s.path))}
              >
                {s.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
