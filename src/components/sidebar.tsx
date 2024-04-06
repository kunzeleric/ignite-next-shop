import { CartContext, CartContextData } from '@/context/cart-context'
import axios from 'axios'
import { X } from 'lucide-react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useContext, useState } from 'react'

interface SidebarProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export function SideBar({ setIsSidebarOpen }: SidebarProps) {
  const { products, totalItems, totalAmountToPay, removeProductFromCart } =
    useContext(CartContext) as CartContextData

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  async function handleBuyProduct() {
    try {
      const cardProducts = products.map((item) => {
        return {
          price: item.priceId,
          quantity: item.quantity,
        }
      })

      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        product: cardProducts,
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (error) {
      // TODO: conectar a uma ferramenta de observabilidade (datadog \ sentry)
      setIsCreatingCheckoutSession(false)
      console.log(error)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <aside className="absolute right-0 z-10 h-screen min-w-[480px] bg-gray-800 px-10 py-8">
      <X
        className="absolute right-8 h-6 w-6 cursor-pointer"
        color="gray"
        strokeWidth={2}
        onClick={() => setIsSidebarOpen(false)}
      />

      {totalItems > 0 ? (
        <div className="flex h-full flex-col justify-around gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-xl font-medium text-gray-200">
              Sacola de compras
            </h1>
            {products.map((product) => {
              return (
                <div key={product.id} className="flex items-center gap-6">
                  <div className="relative rounded-lg bg-gradient-to-r from-[#1ea483] to-[#7465d4]">
                    <Image
                      src={product.imageUrl}
                      width={100}
                      height={100}
                      alt=""
                    />
                    {product.quantity > 1 ? (
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-base font-bold text-white">
                        {product.quantity}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-gray-100">{product.name}</p>
                    <strong className="text-lg text-gray-100">
                      {product.price}
                    </strong>
                    <span
                      onClick={() => removeProductFromCart(product.id)}
                      className="cursor-pointer text-base font-medium text-green-500 hover:text-green-300"
                    >
                      Remover
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-sm text-gray-100">Quantidade</p>
                <span className="text-sm text-gray-100">
                  {totalItems} itens
                </span>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-bold text-gray-100">Valor total</p>
                <span className="text-base font-bold text-gray-100">
                  R$ {totalAmountToPay}
                </span>
              </div>
            </div>
            <button
              onClick={handleBuyProduct}
              disabled={isCreatingCheckoutSession}
              className="w-full rounded-lg bg-green-500 py-3 text-lg font-medium text-white duration-300 hover:bg-green-300"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      ) : (
        <p className="text-xl text-gray-100">Não há itens na sua sacola! :(</p>
      )}
    </aside>
  )
}
