"use client"

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'

// Define theme types
type ThemeMode = 'light' | 'dark' | 'system'
type AccentColor = 'blue' | 'purple' | 'teal' | 'green' | 'orange'

// Context type definition
interface ThemeContextType {
  theme: ThemeMode
  accentColor: AccentColor
  isDark: boolean
  setTheme: (theme: ThemeMode) => void
  setAccentColor: (color: AccentColor) => void
  toggleTheme: () => void
}

// Create context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  accentColor: 'blue',
  isDark: false,
  setTheme: () => {},
  setAccentColor: () => {},
  toggleTheme: () => {},
})

// Hook to use theme context
export const useTheme = () => useContext(ThemeContext)

// Theme provider component
interface AdaptiveThemeProviderProps {
  children: ReactNode
  defaultTheme?: ThemeMode
  defaultAccentColor?: AccentColor
  storageKey?: string
  accentStorageKey?: string
}

export function AdaptiveThemeProvider({
  children,
  defaultTheme = 'system',
  defaultAccentColor = 'blue',
  storageKey = 'theme-preference',
  accentStorageKey = 'accent-color-preference',
}: AdaptiveThemeProviderProps) {
  // State for theme and accent color
  const [theme, setThemeState] = useState<ThemeMode>(defaultTheme)
  const [accentColor, setAccentColorState] = useState<AccentColor>(defaultAccentColor)
  const [isDark, setIsDark] = useState<boolean>(false)
  
  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) as ThemeMode | null
    const savedAccentColor = localStorage.getItem(accentStorageKey) as AccentColor | null
    
    if (savedTheme) setThemeState(savedTheme)
    if (savedAccentColor) setAccentColorState(savedAccentColor)
  }, [storageKey, accentStorageKey])
  
  // Update localStorage when theme changes
  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme)
    localStorage.setItem(storageKey, newTheme)
  }
  
  // Update localStorage when accent color changes
  const setAccentColor = (newAccentColor: AccentColor) => {
    setAccentColorState(newAccentColor)
    localStorage.setItem(accentStorageKey, newAccentColor)
  }
  
  // Toggle between light and dark modes
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  // Check system preference for dark mode
  useEffect(() => {
    if (theme !== 'system') {
      setIsDark(theme === 'dark')
      return
    }
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches)
    }
    
    // Initial check
    setIsDark(mediaQuery.matches)
    
    // Add listener for changes
    mediaQuery.addEventListener('change', handleChange)
    
    // Cleanup listener
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])
  
  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement
    
    // Set dark mode
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    // Apply accent color variable
    const accentColorValues = {
      blue: 'rgb(37, 99, 235)',
      purple: 'rgb(147, 51, 234)',
      teal: 'rgb(20, 184, 166)',
      green: 'rgb(22, 163, 74)',
      orange: 'rgb(249, 115, 22)',
    }
    
    root.style.setProperty('--accent-color', accentColorValues[accentColor])
  }, [isDark, accentColor])
  
  // Context provider with state and functions
  return (
    <ThemeContext.Provider
      value={{
        theme,
        accentColor,
        isDark,
        setTheme,
        setAccentColor,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
