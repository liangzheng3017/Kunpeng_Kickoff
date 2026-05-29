import { type ReactNode } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

interface LayoutProps {
  /** Page content */
  children: ReactNode
  /** Hide footer on specific pages (e.g., full-screen hero pages) */
  hideFooter?: boolean
}

/**
 * Layout — universal page wrapper
 * Provides consistent NavBar + content area + Footer across all pages.
 * Content is offset by h-16 (NavBar height) so pages don't overlap the fixed header.
 */
export default function Layout({ children, hideFooter = false }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <NavBar />

      {/* Main content — offset for fixed NavBar */}
      <main className="flex-1">{children}</main>

      {!hideFooter && <Footer />}
    </div>
  )
}
