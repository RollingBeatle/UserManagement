import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      Hello world
      <br></br>
    <Link href={"/users"}> Users</Link>
    <ProductCard></ProductCard>
    </main>
    
  )
}
