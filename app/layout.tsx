import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/navbar"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export const metadata: Metadata = {
  title: "TechSolutions - Technology Solutions for Education & Business",
  description: "Comprehensive technology solutions for schools, offices, and institutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
