import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harsh Mishra|Portfolio',
  description: 'Created with Dediation',
  generator: '',
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
