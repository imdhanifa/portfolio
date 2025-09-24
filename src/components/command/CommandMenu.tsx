import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { CommandDialog } from "./CommandDialog";
import { CommandList } from "./CommandList";
import { CommandGroup } from "./CommandGroup";
import { CommandItem } from "./CommandItem";
import { CommandInput } from "./CommandInput";
import { CommandEmpty } from "./CommandEmpty";
import { PAGES } from "../../utils/constants/pages";
import { useEffect, useState } from "react";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
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

  const filteredSections = PAGES.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
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
                {s.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
