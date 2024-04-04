import { SideBar } from '@/components/sidebar'
import { CartContext, CartContextData } from '@/context/cart-context'
import Image from 'next/image'
import { useContext, useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { products } = useContext(CartContext) as CartContextData
  return (
    <main>
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
            className="relative cursor-pointer rounded-lg bg-gray-800 p-4"
          >
            {products?.length > 0 ? (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-base font-bold text-white">
                {products.length}
              </span>
            ) : null}
            <Image
              src={`${products?.length > 0 ? '/cart-product.svg' : '/cart.svg'}`}
              width={40}
              height={40}
              alt=""
            />
          </button>
        </header>
        {children}
      </div>
    </main>
  )
}
