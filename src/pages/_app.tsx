import { AppProps } from 'next/app'
import './globals.css'
import Image from 'next/image'
import CartProvider from './context/cart-context'
import { useState } from 'react'
import { SideBar } from '@/components/sidebar'

function App({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <CartProvider>
      <div className="relative flex min-h-screen flex-col items-start justify-center bg-gray-900">
        {isSidebarOpen && <SideBar setIsSidebarOpen={setIsSidebarOpen} />}
        <header className="mx-auto flex w-full max-w-[1180px] items-center justify-between py-8">
          <Image
            src="/logo.svg"
            alt=""
            width={100}
            height={100}
            className="w-52"
          />
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="cursor-pointer rounded-lg bg-gray-800 p-4"
          >
            <Image src="cart.svg" width={40} height={40} alt="" />
          </button>
        </header>
        <Component {...pageProps} />
      </div>
    </CartProvider>
  )
}

export default App
