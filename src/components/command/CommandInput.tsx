export const CommandInput = ({
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