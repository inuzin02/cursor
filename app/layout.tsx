import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CrestLab Inc.',
  description: 'クリエイターの創造性を加速するアニメ制作基盤 "ANICRA"',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
