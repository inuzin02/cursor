import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CrestLab Inc. - クリエイターの創造性を加速するアニメ制作基盤',
  description: 'CrestLabは、AI技術を活用したアニメ制作支援基盤「ANICRA」を提供。クリエイターの創造性を加速し、アニメ制作の新時代を切り開きます。',
  keywords: 'ANICRA, アニメ制作, AI, クリエイター, CrestLab, アニメーション, 制作支援',
  authors: [{ name: 'CrestLab Inc.' }],
  creator: 'CrestLab Inc.',
  publisher: 'CrestLab Inc.',
  robots: 'index, follow',
  openGraph: {
    title: 'CrestLab Inc. - クリエイターの創造性を加速するアニメ制作基盤',
    description: 'CrestLabは、AI技術を活用したアニメ制作支援基盤「ANICRA」を提供。クリエイターの創造性を加速し、アニメ制作の新時代を切り開きます。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'CrestLab Inc.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CrestLab Inc. - クリエイターの創造性を加速するアニメ制作基盤',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrestLab Inc. - クリエイターの創造性を加速するアニメ制作基盤',
    description: 'CrestLabは、AI技術を活用したアニメ制作支援基盤「ANICRA」を提供。クリエイターの創造性を加速し、アニメ制作の新時代を切り開きます。',
    images: ['/og-image.png'],
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
      </head>
      <body>{children}</body>
    </html>
  )
}
