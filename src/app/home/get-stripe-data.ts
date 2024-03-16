import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { ProductProps } from './page'

export const getStripeData = async () => {
  try {
    const response = await stripe.products.list({
      expand: ['data.default_price'],
    })

    const products: ProductProps[] = response.data.map((product) => {
      const price = product.default_price as Stripe.Price
      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount! / 100,
      }
    })

    return products
  } catch (error) {
    console.log(error)
    return []
  }
}
