import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../../ui/globals.css'
import Navbar from '@/components/landing-page/navbar'
import Footer from '@/components/landing-page/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dx landing page',
  description: 'made by beingofexistence(sumon)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />
        {children}
        <Footer />
      
      </body>
    </html>
  )
}
