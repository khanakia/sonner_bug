import './globals.css'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white antialiased">
      <head>
        <link
          rel="shortcut icon"
          href="/favicon.ico?v=1.0"
          type="image/x-icon"
          sizes="any"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
