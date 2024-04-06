import {
  addProduct,
  removeProduct,
  updateProductQuantity,
} from '@/reducer/actions'
import { productReducer } from '@/reducer/reducer'
import { createContext, ReactNode, useReducer } from 'react'

export interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  quantity: number
  priceId: string
}

export interface CartContextData {
  products: ProductProps[]
  totalItems: number
  totalAmountToPay: number
  addProductToCart: (products: ProductProps) => void
  updateQuantity?: (productId: string) => void
  removeProductFromCart: (productId: string) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

const CartProvider = ({ children }: CartContextProviderProps) => {
  const [productsState, dispatch] = useReducer(productReducer, {
    products: [],
  })

  const { products } = productsState

  function updateQuantity(productId: string) {
    dispatch(updateProductQuantity(productId))
  }

  function addProductToCart(product: ProductProps) {
    console.log('Adding product to cart....')
    console.log('Product info = ', product)
    if (productsState.products.find((item) => item.id === product.id)) {
      updateQuantity(product.id)
    } else {
      dispatch(addProduct(product))
    }
  }

  function removeProductFromCart(productId: string) {
    console.log('Removing product from cart....')
    dispatch(removeProduct(productId))
  }

  console.log(products)

  const totalItems = products?.reduce(
    (acc, product) => acc + product.quantity,
    0,
  )
  const totalAmountToPay = products
    ?.map((product) => {
      const productPrice = Number(
        product.price.substring(3, product.price.length).replace(',', '.'),
      )
      return productPrice * product.quantity
    })
    .reduce((acc, item) => acc + item, 0)

  return (
    <CartContext.Provider
      value={{
        totalItems,
        totalAmountToPay,
        addProductToCart,
        products,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
