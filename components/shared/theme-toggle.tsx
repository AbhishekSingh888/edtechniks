"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, Monitor } from "@/components/shared/icons";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we can show the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-36 h-10" />; // Prevent layout shift
  }

  return (
    <div className="flex items-center gap-2 p-1 rounded-lg bg-secondary">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-md transition-colors ${
          theme === "light" 
            ? "bg-white text-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Light theme"
      >
        <Sun className="h-4 w-4" />
      </button>
      
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-md transition-colors ${
          theme === "system" 
            ? "bg-white dark:bg-gray-800 text-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="System theme"
      >
        <Monitor className="h-4 w-4" />
      </button>
      
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-md transition-colors ${
          theme === "dark" 
            ? "bg-gray-800 text-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Dark theme"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}
