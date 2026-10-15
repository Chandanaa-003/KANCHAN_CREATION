import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kanchan Creation | Indian Ethnic Fashion',
  description:
    'Shop premium Indian ethnic wear — Kurtis, Salwar Suits, Anarkali, Lehengas and more. Based in Davangere, shipping across India.',
  keywords: [
    'Indian ethnic wear',
    'Kurtis',
    'Salwar Suits',
    'Lehengas',
    'Davangere',
    'Kanchan Creation',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body">
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
