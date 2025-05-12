import Link from "next/link";
import { Monitor, Sun, Moon } from "@/components/shared/icons";

export default function ThemeHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
        Theme System
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8">
        A comprehensive theming system with light, dark, and system preference support.
      </p>
      
      <div className="flex justify-center gap-8">
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-full shadow-sm border border-border mb-3">
            <Sun className="h-6 w-6 text-yellow-500" />
          </div>
          <span className="text-sm font-medium">Light Mode</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-muted p-4 rounded-full shadow-sm border border-border mb-3">
            <Monitor className="h-6 w-6 text-blue-500" />
          </div>
          <span className="text-sm font-medium">System Preference</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-900 p-4 rounded-full shadow-sm border border-border mb-3">
            <Moon className="h-6 w-6 text-blue-400" />
          </div>
          <span className="text-sm font-medium">Dark Mode</span>
        </div>
      </div>
      
      <div className="mt-8">
        <Link 
          href="/"
          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
