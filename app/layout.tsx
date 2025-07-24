import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scambait Village',
  description: 'Join the fight against scammers. Learn techniques, share experiences, and protect others from fraud.',
  generator: 'scambait-village',
  metadataBase: new URL('https://scambaitvillage.com'),
  openGraph: {
    title: 'Scambait Village',
    description: 'Join the fight against scammers. Learn techniques, share experiences, and protect others from fraud.',
    url: 'https://scambaitvillage.com',
    siteName: 'Scambait Village',
    images: [
      {
        url: '/meta-image.png',
        width: 1200,
        height: 630,
        alt: 'Scambait Village Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scambait Village',
    description: 'Join the fight against scammers. Learn techniques, share experiences, and protect others from fraud.',
    images: ['/meta-image.png'],
    creator: '@ScambaitVillage',
  },
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
