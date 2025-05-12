"use client";

import { useTheme } from "@/components/theme-provider";
import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "@/components/shared/icons";

export default function ThemeStatus() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  // Theme icon mapping
  const ThemeIcon = () => {
    switch(theme) {
      case 'light':
        return <Sun className="h-4 w-4 text-yellow-500" />;
      case 'dark':
        return <Moon className="h-4 w-4 text-blue-400" />;
      case 'system':
      default:
        return <Monitor className="h-4 w-4 text-blue-500" />;
    }
  };
  
  // Get display name for the theme
  const getThemeDisplayName = () => {
    switch(theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return `System (${resolvedTheme === 'dark' ? 'Dark' : 'Light'})`;
      default:
        return theme;
    }
  };
  
  return (
    <div className="flex items-center gap-2 text-sm rounded-full bg-muted px-3 py-1.5">
      <ThemeIcon />
      <span className="text-muted-foreground">
        Theme: <span className="font-medium text-foreground">{getThemeDisplayName()}</span>
      </span>
    </div>
  );
}
