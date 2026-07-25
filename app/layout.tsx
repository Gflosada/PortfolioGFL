import type { Metadata, Viewport } from 'next'
import { Orbitron, Rajdhani } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { FloatingNav } from '@/components/floating-nav'
import { SitePreloader } from '@/components/site-preloader'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-rajdhani',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const superSliced = localFont({
  src: [
    {
      path: './fonts/SuperSliced-OG156.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './fonts/SuperSlicedItalic-aYoJK.ttf',
      style: 'italic',
      weight: '400',
    },
  ],
  variable: '--font-super-sliced',
  display: 'swap',
})

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
      <body className={`${orbitron.variable} ${rajdhani.variable} ${superSliced.variable}`} suppressHydrationWarning>
        <SitePreloader />
        <FloatingNav />
        {children}
      </body>
    </html>
  )
}
