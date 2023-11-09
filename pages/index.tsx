import Image from 'next/image'
import { Inter } from 'next/font/google'
import CounterButton from '../components/CounterButton';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-yellow-300 ${inter.className}`}
    >
      <CounterButton />
    </main>
  )
}