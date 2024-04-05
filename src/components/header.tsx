import { CartContext, CartContextData } from '@/context/cart-context'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useContext } from 'react'

interface HeaderProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
  isSidebarOpen: boolean
}

export const Header = ({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) => {
  const { totalItems } = useContext(CartContext) as CartContextData
  return (
    <header className="mx-auto flex w-full max-w-[1180px] items-center justify-between py-8">
      <Link href="/home">
        <Image
          src="/logo.svg"
          alt=""
          width={100}
          height={100}
          className="w-52"
        />
      </Link>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="relative cursor-pointer rounded-lg bg-gray-800 p-4"
      >
        {totalItems > 0 ? (
          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-base font-bold text-white">
            {totalItems}
          </span>
        ) : null}
        <Image
          src={`${totalItems > 0 ? '/cart-product.svg' : '/cart.svg'}`}
          width={40}
          height={40}
          alt=""
        />
      </button>
    </header>
  )
}
