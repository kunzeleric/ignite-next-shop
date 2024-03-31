import { useContext, createContext, ReactNode, useState } from 'react'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  quantity: number
}

type CartContextData = {
  cartProducts: ProductProps[]
  addProduct: (products: ProductProps) => void
  removeProducts: (productId: string) => void
}

const CartContext = createContext<CartContextData | null>(null)

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<ProductProps[]>([])

  function addProduct(product: ProductProps) {
    setCartProducts([...cartProducts, product])
  }

  function removeProducts(productId: string) {
    setCartProducts(cartProducts.filter((product) => product.id !== productId))
  }

  return (
    <CartContext.Provider value={{ addProduct, cartProducts, removeProducts }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
