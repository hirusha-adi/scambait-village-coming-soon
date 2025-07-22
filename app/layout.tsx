import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scambait Village',
  description: 'Expect us @DEFCON 33.',
  generator: 'scambait-village',
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
