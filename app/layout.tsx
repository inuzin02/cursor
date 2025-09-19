import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CrestLab Inc.',
  description: 'ANICRA - アニメ制作をAIで支援する次世代基盤',
  keywords: 'ANICRA, アニメ制作, AI, クリエイター, CrestLab, アニメーション, 制作支援',
  authors: [{ name: 'CrestLab Inc.' }],
  creator: 'CrestLab Inc.',
  publisher: 'CrestLab Inc.',
  robots: 'index, follow',
  openGraph: {
    title: 'CrestLab Inc.',
    description: 'ANICRA - アニメ制作をAIで支援する次世代基盤',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'CrestLab Inc.',
    url: 'https://crestlab-inc.com/',
    images: [
      {
        url: 'https://crestlab-inc.com/ogp.png',
        width: 1200,
        height: 630,
        alt: 'CrestLab Inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrestLab Inc.',
    description: 'ANICRA - アニメ制作をAIで支援する次世代基盤',
    images: ['https://crestlab-inc.com/ogp.png'],
  },
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
        <meta name="google-site-verification" content="SDEJnZ3d2XdMiEVC_E8wY2ZracBTU3i7p6LKyhp2tAE" />
      </head>
      <body>{children}</body>
    </html>
  )
}
