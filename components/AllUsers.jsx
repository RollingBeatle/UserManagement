'use client'
import React from 'react'
import { List, ListItem, Card } from '@material-tailwind/react'
import { useEffect, useState } from 'react'

const AllUsers = () => {
    const [users, setUsers] = useState('')

    useEffect(() => {
        const fetchAllUsers = async() =>{
            const resp = await fetch('/api/users')
            const userInfo = await resp.json()
            setUsers(userInfo.data)
        };
        fetchAllUsers()
    }, [])

  return (
    <div>
        {users && users.map( (user) => (
            <Card key={user.id} className='mb-4'>
                <List>
                    <ListItem>{user.name}</ListItem>
                </List>
            </Card>
        ))}
    </div>
  )
}

export default AllUsers