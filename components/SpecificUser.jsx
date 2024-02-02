'use client'
import React from 'react'
import { Button, Card, Input, List, ListItem } from '@material-tailwind/react'
import { useState } from 'react'


const SpecificUser = () => {

    const [userId, setUserId] = useState('')
    const [userData, setUserData] = useState(null)

    const fetchUserData = async() => {
        const resp = await fetch(`/api/users/${userId}`)
        if(resp.ok){
            const res = await resp.json()
            setUserData(res.user)
        }
        else {
            console.log(" Error fetching data")
            setUserData(null)
        }
    };
  return (
    <div className='flex'>
        <div className='w-72'>
            <Input label='Enter user Id' type='text' value={userId} onChange={
                e => setUserId(e.target.value)
            }/> 
            <Button onClick={fetchUserData()}> Fetch User</Button>
        </div>    
        {userData ?(
            userData.map( (d) => (
                <>
                <Card className='w-96 mt-5'>
                    <List>
                        <ListItem> ID: {d.id}</ListItem>                        
                   </List>    
                </Card>
                </>
            ))
        ): (
            <p className='mt-2'> Search for a specific user</p>
        )}
    </div>
  )
}

export default SpecificUser