'use client'

import { Button, Input } from "@material-tailwind/react"
import { useState } from "react"

import React from 'react'

const UpdateUser = () => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!id){
            alert('Provide user id')
            return
        }
        const requestedData = {id};
        if(name){
            requestedData.name = name
        }
        if(age){
            requestedData.age = age
        }
        if(name){
            requestedData.email = email
        }
        if(name){
            requestedData.password = password
        }
        try {
            const resp = await fetch('/api/users', {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(requestedData)
            })
            if (resp.ok){
                alert('User info updated successfully')
                clearform()
            }
            else {
                const data = await resp.json()
                alert(data||"Something failed")
            }

        } catch (err){
            alert(err)
            return
        }
    }

    const clearform = () => {
        setId('')
        setName('')
        setEmail('')
        setAge('')
        setpassword('')
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
                    Update User
                </Button>

                </form>
            </div>
        </div>
    )
}

export default UpdateUser