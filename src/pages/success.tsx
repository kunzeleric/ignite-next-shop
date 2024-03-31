import { stripe } from '@/lib/stripe'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Stripe from 'stripe'

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

const Success = ({ customerName, product }: SuccessProps) => {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="my-auto flex h-[656px] w-full flex-col items-center justify-center">
        <h1 className="text-2xl text-gray-100">Compra efetuada!</h1>
        <div className="mt-16 flex h-52 w-full max-w-44 items-center justify-center rounded-lg bg-gradient-to-r from-[#1ea483] to-[#7465d4] p-1">
          <Image
            className="h-50 w-50 object-cover"
            src={product.imageUrl}
            width={300}
            height={300}
            alt=""
          />
        </div>
        <p className="max-w[560px] mt-8 text-center text-xl leading-6 text-gray-300">
          Uhuu! <strong>{customerName}</strong>, sua{' '}
          <strong>{product.name}</strong> já está a caminho da sua casa!
        </p>
        <Link
          className="mt-20 block text-lg text-green-500 duration-300 hover:text-green-300"
          href="/"
        >
          Voltar ao catálogo
        </Link>
      </main>
    </>
  )
}

export default Success

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
