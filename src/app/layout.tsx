import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <div className="flex min-h-screen flex-col items-start justify-center">
          <header className="mx-auto w-full max-w-[1180px] py-8">
            <Image
              src="/logo.svg"
              alt=""
              width={100}
              height={100}
              className="w-52"
            />
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
