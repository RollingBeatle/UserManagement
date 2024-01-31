import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { Roboto } from 'next/font/google'

const rob = Roboto({subsets: ['latin'], weight: '500'})
const Home = () => {
  return (
    <main>
      <h2 className={rob.className}>Example font</h2>
      Hello world
      <br></br>
    <Link href={"/users"}> Users</Link>
    <ProductCard></ProductCard>
    </main>
    
  )
}
export default Home
