import { AppProps } from 'next/app'
import RootLayout from './layout'
import './globals.css'
import CartProvider from '@/context/cart-context'

function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </CartProvider>
  )
}

export default App
