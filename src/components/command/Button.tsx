export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
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