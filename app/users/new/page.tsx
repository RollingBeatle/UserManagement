"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const NewUserPage = () => {
  const router = useRouter();
  
  const navigate = (page) => {
    router.push(page);
  }
  return (
    <section>
      <div>New user page</div>
      <button onClick={() => navigate("/about")}> go to about</button>
    </section>
    
  )
}

export default NewUserPage