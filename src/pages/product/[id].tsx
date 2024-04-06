import { stripe } from '@/lib/stripe'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useContext } from 'react'
import Stripe from 'stripe'
import { CartContext } from '@/context/cart-context'

export interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    priceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addProductToCart } = useContext(CartContext)
  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <main className="mx-auto grid max-w-[1180px] grid-cols-2 items-stretch gap-1">
        <div className="flex h-[calc(656px_-_0.5rem)] w-full max-w-[576px] items-center justify-center rounded-lg bg-gradient-to-r from-[#1ea483] to-[#7465d4]">
          <Image src={product.imageUrl} width={520} height={520} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl text-gray-300">{product.name}</h1>
          <span className="mt-4 block text-2xl text-green-300">
            {product.price}
          </span>
          <p className="mt-10 text-md leading-relaxed text-gray-300">
            {product.description}
          </p>
          <button
            onClick={() => addProductToCart({ ...product, quantity: 1 })}
            className="mt-auto cursor-pointer rounded-lg border-none bg-green-500 p-5 text-md font-bold text-white duration-300 hover:bg-green-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Colocar na sacola
          </button>
        </div>
      </main>
    </>
  )
}

// indica para o next quais são os caminhos dinâmicos que desejamos gerar páginas estáticas
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_PkSQGqFxGLQ2CB' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id

  const product = await stripe.products.retrieve(productId!, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        priceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
