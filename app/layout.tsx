import type { Metadata, Viewport } from 'next'
import './globals.css'
import { FloatingNav } from '@/components/floating-nav'
import { SitePreloader } from '@/components/site-preloader'

export const metadata: Metadata = {
  title: 'German Losada ',
  description: 'Porftofio Product Designer and Forntend Developer.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#18181b',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SitePreloader />
        <FloatingNav />
        {children}
      </body>
    </html>
  )
}
