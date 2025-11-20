import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MFK Exports - Premium Fruit & Vegetable Logistics',
  description: 'Exporting premium fruits and vegetables worldwide with excellence and reliability. Temperature-controlled transportation, quality assurance, and seamless international trade documentation.',
  keywords: 'fruit export, vegetable export, cold chain logistics, produce export, international trade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
