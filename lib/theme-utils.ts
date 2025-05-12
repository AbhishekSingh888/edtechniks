// Function to detect system color scheme preference
export function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light"; // Default to light on server
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Function to detect if the browser has a preference
export function hasThemePreference(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return (
    window.matchMedia("(prefers-color-scheme: dark)").matches ||
    window.matchMedia("(prefers-color-scheme: light)").matches
  );
}

// Function to listen for system theme changes
export function addThemeListener(callback: (theme: "light" | "dark") => void): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const listener = (e: MediaQueryListEvent) => {
    const newTheme = e.matches ? "dark" : "light";
    callback(newTheme);
  };

  mediaQuery.addEventListener("change", listener);
  return () => mediaQuery.removeEventListener("change", listener);
}
