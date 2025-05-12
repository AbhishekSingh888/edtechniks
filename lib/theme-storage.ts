// Constants
const THEME_KEY = 'edtechniks-theme-preference';

// Types
type ThemeType = 'light' | 'dark' | 'system';

/**
 * Save theme preference to localStorage
 */
export function saveThemePreference(theme: ThemeType): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    // Ignore errors (e.g., in incognito mode where localStorage might be unavailable)
    console.warn('Could not save theme preference', error);
  }
}

/**
 * Get theme preference from localStorage
 */
export function getThemePreference(): ThemeType | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const savedTheme = localStorage.getItem(THEME_KEY) as ThemeType | null;
    return savedTheme;
  } catch (error) {
    // Ignore errors
    console.warn('Could not get theme preference', error);
    return null;
  }
}

/**
 * Clear theme preference from localStorage
 */
export function clearThemePreference(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(THEME_KEY);
  } catch (error) {
    // Ignore errors
    console.warn('Could not clear theme preference', error);
  }
}
