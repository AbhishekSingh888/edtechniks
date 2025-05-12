"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "@/components/shared/icons";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we can show the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />; // Prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-secondary hover:bg-secondary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-blue-700" />
      )}
    </button>
  );
}
