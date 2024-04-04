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
}

export interface CartContextData {
  products: ProductProps[]
  totalItems: number
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

  console.log(products)

  function updateQuantity(productId: string) {
    dispatch(updateProductQuantity(productId))
  }

  function addProductToCart(product: ProductProps) {
    console.log('Adding product to cart....')
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

  const totalItems = products?.reduce((product) => product.quantity, 0)

  return (
    <CartContext.Provider
      value={{ totalItems, addProductToCart, products, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
