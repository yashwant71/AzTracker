import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700']
 })

export const metadata: Metadata = {
  title: 'AzTracker',
  description: 'Track amazon product prices effortlessly and save money on your online shopping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
          <div className="w-full flex justify-center bg-foreground text-accent">© yashwantyadav71@gmail.com</div>
        </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
