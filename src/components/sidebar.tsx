import { X } from 'lucide-react'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

interface SidebarProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export function SideBar({ setIsSidebarOpen }: SidebarProps) {
  return (
    <aside className="absolute right-0 z-10 h-screen min-w-[480px] bg-gray-800 px-10 py-8">
      <X
        className="absolute right-8 h-6 w-6 cursor-pointer"
        color="gray"
        strokeWidth={2}
        onClick={() => setIsSidebarOpen(false)}
      />
      <div className="flex h-full flex-col justify-around gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-medium text-gray-200">
            Sacola de compras
          </h1>
          <div className="flex items-center gap-6">
            <div className="rounded-lg bg-gradient-to-r from-[#1ea483] to-[#7465d4]">
              <Image src="/1.png" width={100} height={100} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-100">
                Camiseta Beyond the Limits
              </p>
              <strong className="text-lg text-gray-100">R$ 79,90</strong>
              <span className="cursor-pointer text-base font-medium text-green-500 hover:text-green-300">
                Remover
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="rounded-lg bg-gradient-to-r from-[#1ea483] to-[#7465d4]">
              <Image src="/2.png" width={100} height={100} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-100">
                Camiseta Beyond the Limits
              </p>
              <strong className="text-lg text-gray-100">R$ 79,90</strong>
              <span className="cursor-pointer text-base font-medium text-green-500 hover:text-green-300">
                Remover
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="rounded-lg bg-gradient-to-r from-[#1ea483] to-[#7465d4]">
              <Image src="/3.png" width={100} height={100} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-100">
                Camiseta Beyond the Limits
              </p>
              <strong className="text-lg text-gray-100">R$ 79,90</strong>
              <span className="cursor-pointer text-base font-medium text-green-500 hover:text-green-300">
                Remover
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-sm text-gray-100">Quantidade</p>
              <span className="text-sm text-gray-100">3 itens</span>
            </div>
            <div className="flex justify-between">
              <p className="text-base font-bold text-gray-100">Valor total</p>
              <span className="text-base font-bold text-gray-100">
                R$ 270,00
              </span>
            </div>
          </div>
          <button
            onClick={() => {}}
            className="w-full rounded-lg bg-green-500 py-3 text-lg font-medium text-white duration-300 hover:bg-green-300"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </aside>
  )
}
