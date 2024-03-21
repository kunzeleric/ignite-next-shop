import Image from 'next/image'
import Link from 'next/link'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    mode: 'snap',
    slides: {
      perView: 'auto',
      spacing: 48,
    },
  })

  return (
    <main
      ref={sliderRef}
      className="keen-slider ml-auto flex min-h-[656px] w-full max-w-[calc(100vw_-_((100vw_-_1180px)_/_2))]"
    >
      {products?.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
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
              <strong className="text-lg text-white">{product.name}</strong>
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  }
}
