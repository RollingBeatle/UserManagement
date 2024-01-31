'use client'
import React from 'react'
import { useEffect, useState } from 'react'

const page = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        async function fetchData (){
            let data = await fetch('https://jsonplaceholder.typicode.com/posts')
            data = await data.json()
            setProduct(data)
        }
        fetchData()
    }, [])
  return (
    <div>
        <ul>
            {product?.map((p) => ( 
                <li key={p.id}>{p.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default page