import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'German Losada ',
  description: 'Porftofio Product Designer and Forntend Developer.',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
