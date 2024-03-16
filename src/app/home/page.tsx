'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import { getStripeData } from './get-stripe-data'
import 'keen-slider/keen-slider.min.css'

export interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: number
}

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [sliderRef] = useKeenSlider({
    mode: 'snap',
    slides: {
      perView: 'auto',
      spacing: 48,
    },
  })

  const handleFetchData = async () => {
    const products = await getStripeData()
    setProducts(products)
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  return (
    <main
      ref={sliderRef}
      className="keen-slider ml-auto flex min-h-[656px] w-full max-w-[calc(100vw_-_((100vw_-_1180px)_/_2))]"
    >
      {products?.map((product) => {
        return (
          <Link
            key={product.id}
            href="/"
            className="keen-slider__slide group relative flex min-w-[32.5rem] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#1ea483] to-[#7465d4] p-1"
          >
            <Image
              width={520}
              height={480}
              alt=""
              src="/1.png"
              className="object-cover"
            />
            <footer className="absolute inset-1 top-auto flex translate-y-[110%] transform items-center justify-between rounded-md bg-[rgba(0,0,0,0.6)] p-8 opacity-0 duration-200 group-hover:translate-y-[0%] group-hover:opacity-100">
              <strong className="text-lg">{product.name}</strong>
              <span className="text-xl font-bold text-green-300">
                {product.price}
              </span>
            </footer>
          </Link>
        )
      })}
    </main>
  )
}
