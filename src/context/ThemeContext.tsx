/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// Define the allowed themes
export type Theme = "light" | "dark";

// Context type
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Default context (avoids null errors)
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {
    throw new Error("setTheme must be used inside ThemeProvider");
  },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Default to system preference (iOS-like behavior)
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState<Theme>(prefersDark ? "dark" : "light");

  useEffect(() => {
    // All possible theme classes
    const themes: Theme[] = ["light", "dark"];

    // Remove old themes
    document.documentElement.classList.remove(...themes);

    // Add active theme
    document.documentElement.classList.add(theme);

    // Persist theme (like iOS settings)
    localStorage.setItem("theme", theme);
  }, [theme]);

  // On mount: restore from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for easy access
export const useTheme = (): ThemeContextType => useContext(ThemeContext);
