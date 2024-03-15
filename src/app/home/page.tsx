import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="ml-auto flex min-h-[656px] w-full max-w-[calc(100vw_-_((100vw_-_1180px)_/_2))] gap-12">
      <Link
        href="/"
        className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#1ea483] to-[#7465d4] p-1"
      >
        <Image
          width={520}
          height={480}
          alt=""
          src="/1.png"
          className="object-cover"
        />
        <footer className="absolute inset-1 top-auto flex translate-y-[110%] transform items-center justify-between rounded-md bg-[rgba(0,0,0,0.6)] p-8 opacity-0 duration-200 group-hover:translate-y-[0%] group-hover:opacity-100">
          <strong className="text-lg">Camiseta X</strong>
          <span className="text-xl font-bold text-green-300">R$ 79,90</span>
        </footer>
      </Link>
    </main>
  )
}
