'use client'

import { Button, Input } from "@material-tailwind/react"
import { useState } from "react"

import React from 'react'

const CreateUser = () => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!id|| !name|| !age || !email || !password){
            alert('Please fill all input fields')
            return
        }
        try {
            const resp = await fetch('/api/users', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({id, name, age, email, password})
            })
            if (resp.ok){
                alert('Creation success')
            }
            else {
                alert("Something failed")
            }

        } catch (err){
            alert(error)
            return
        }
    }

  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <Input label='ID' 
                type="text" 
                placeholder="Id" 
                value={id} 
                onChange={(e) => setId(e.target.value)}
                />
                <Input label='Name' 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                />
                <Input label='Age' 
                type="text" 
                placeholder="Age" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
                />
                <Input label='Email' 
                type="text" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input label='password' 
                type="password" 
                placeholder="password" 
                value={password} 
                onChange={(e) => setpassword(e.target.value)}
                />
            <Button className="mt-2" type="submit">
                Submit
            </Button>

            </form>
        </div>
    </div>
  )
}

export default CreateUser