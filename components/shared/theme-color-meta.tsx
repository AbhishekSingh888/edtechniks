"use client";

import { useTheme } from "@/components/theme-provider";
import { useEffect } from "react";

/**
 * Component that adds theme-color meta tag to the document
 * This helps mobile browsers adapt their UI (e.g., address bar) to the theme
 */
export default function ThemeColorMeta() {
  const { theme, resolvedTheme } = useTheme();
  
  useEffect(() => {
    // Get the current effective theme
    const currentTheme = resolvedTheme || theme;
    
    // Define colors for light/dark modes
    const themeColor = currentTheme === 'dark' ? '#0a0a0a' : '#ffffff';
    
    // Update or create the meta tag
    let metaThemeColor = document.querySelector("meta[name='theme-color']");
    
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    
    metaThemeColor.setAttribute('content', themeColor);
  }, [theme, resolvedTheme]);

  return null; // This is a utility component with no UI
}
