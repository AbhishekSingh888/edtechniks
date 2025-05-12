"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/shared/theme-toggle";
import ThemeStatus from "@/components/shared/theme-status";
import ThemeSwitch from "@/components/shared/theme-switch";
import ThemeHeader from "@/components/shared/theme-header";
import { useTheme } from "@/components/theme-provider";
import { getSystemTheme, hasThemePreference } from "@/lib/theme-utils";
import { saveThemePreference, getThemePreference } from "@/lib/theme-storage";

export default function ThemeDemoPage() {  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [systemTheme, setSystemTheme] = useState<string>("");
  const [savedPreference, setSavedPreference] = useState<string | null>(null);
  
  // Save theme preference when it changes
  useEffect(() => {
    if (theme && theme !== 'system') {
      saveThemePreference(theme as any);
    }
  }, [theme]);
  
  useEffect(() => {
    setMounted(true);
    setSystemTheme(getSystemTheme());
    setSavedPreference(getThemePreference());
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setSystemTheme(getSystemTheme());
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
    if (!mounted) {
    return null;
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ThemeHeader />
      <div className="bg-card rounded-xl shadow-sm p-6 border border-border mb-8">
        <h2 className="text-2xl font-semibold mb-4">Current Theme</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <ThemeStatus />
          <div className="text-sm text-muted-foreground">
            System preference: <span className="font-medium text-foreground">{systemTheme}</span>
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Theme Options</h3>
            <ThemeToggle />
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-3">Simple Toggle</h3>
            <ThemeSwitch />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl shadow-sm p-6 border border-border">
          <h2 className="text-2xl font-semibold mb-4">Theme Preview</h2>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Background</span>
              <div className="h-10 bg-background border border-border rounded-md"></div>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Foreground</span>
              <div className="h-10 bg-foreground border border-border rounded-md"></div>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Primary</span>
              <div className="h-10 bg-primary border border-border rounded-md"></div>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Secondary</span>
              <div className="h-10 bg-secondary border border-border rounded-md"></div>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Accent</span>
              <div className="h-10 bg-accent border border-border rounded-md"></div>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Muted</span>
              <div className="h-10 bg-muted border border-border rounded-md"></div>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-xl shadow-sm p-6 border border-border">
          <h2 className="text-2xl font-semibold mb-4">UI Components</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
                  Primary
                </button>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-2 rounded-md">
                  Secondary
                </button>
                <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-md">
                  Accent
                </button>
                <button className="bg-muted text-muted-foreground hover:bg-muted/90 px-4 py-2 rounded-md">
                  Muted
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Cards</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-card border border-border p-3 rounded-md">
                  <div className="text-card-foreground text-sm">Card 1</div>
                </div>
                <div className="bg-muted border border-border p-3 rounded-md">
                  <div className="text-muted-foreground text-sm">Card 2</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Text</h3>
              <div className="space-y-2">
                <p className="text-foreground">Regular text</p>
                <p className="text-muted-foreground">Muted text</p>
                <p className="text-primary">Primary text</p>
                <p className="text-accent">Accent text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
