import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

const Home = () => {
  return (
    <main>
      Hello world
      <br></br>
    <Link href={"/users"}> Users</Link>
    <ProductCard></ProductCard>
    </main>
    
  )
}
export default Home
