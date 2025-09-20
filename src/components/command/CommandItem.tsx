export const CommandItem = ({
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