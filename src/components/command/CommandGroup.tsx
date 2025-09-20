export const CommandGroup = ({
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