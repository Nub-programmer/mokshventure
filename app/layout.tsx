import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Moksh Venture - Restaurant in Dehradun',
  description: 'Experience authentic flavors at Moksh Venture, Dehradun. Order via WhatsApp or call us for delicious Indian cuisine.',
  applicationName: 'Moksh Venture',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    title: 'Moksh Venture - Restaurant in Dehradun',
    description: 'Experience authentic flavors at Moksh Venture, Dehradun. Order via WhatsApp or call us for delicious Indian cuisine.',
    siteName: 'Moksh Venture',
    images: [
      {
        url: '/images/hero-restaurant.jpg',
        width: 1200,
        height: 630,
        alt: 'Moksh Venture restaurant in Dehradun',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moksh Venture - Restaurant in Dehradun',
    description: 'Experience authentic flavors at Moksh Venture, Dehradun. Order via WhatsApp or call us for delicious Indian cuisine.',
    images: ['/images/hero-restaurant.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
