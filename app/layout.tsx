import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AdaptiveThemeProvider } from "@/components/adaptive-theme-provider"
import EnhancedFooter from "@/components/layout/footer"
import EnhancedHeader from "@/components/layout/navbar"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import PageTransition from "@/components/ui/page-transition"
import ThemeSwitcher from "@/components/ui/theme-switcher"

export const metadata: Metadata = {
  title: "Edtechniks - Technology Solutions for Education & Business",
  description: "Comprehensive technology solutions for schools, offices, and institutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />

        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

      </head>      <body>
        <AdaptiveThemeProvider defaultTheme="system" defaultAccentColor="blue">
          <PageTransition />
          <EnhancedHeader />
          <div className="fixed top-5 right-5 z-50">
            <ThemeSwitcher orientation="vertical" includeColorThemes/>
          </div>
          {children}
          <ScrollToTop />
          <EnhancedFooter />
        </AdaptiveThemeProvider>
      </body>
    </html>
  )
}
