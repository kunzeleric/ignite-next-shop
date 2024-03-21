import { AppProps } from 'next/app'
import './globals.css'
import Image from 'next/image'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center bg-gray-900">
      <header className="mx-auto w-full max-w-[1180px] py-8">
        <Image
          src="/logo.svg"
          alt=""
          width={100}
          height={100}
          className="w-52"
        />
      </header>
      <Component {...pageProps} />
    </div>
  )
}

export default App
