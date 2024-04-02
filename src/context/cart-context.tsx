import { productReducer } from '@/reducer/reducer'
import { createContext, ReactNode, useReducer } from 'react'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
}

export interface CartContextData {
  products: ProductProps[]
  addProduct: (products: ProductProps) => void
  removeProducts: (productId: string) => void
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

  function addProduct(product: ProductProps) {
    console.log('Adding product to cart....')
    dispatch(addProduct(product))
  }

  function removeProducts(productId: string) {
    console.log('Removing product from cart....')
    dispatch(removeProducts(productId))
  }

  return (
    <CartContext.Provider value={{ addProduct, products, removeProducts }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
