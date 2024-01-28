'use client'

import React from 'react'

const User = ({params}) => {
    console.log(params)
  return (
    <div>User: {params.user}</div>
  )
}

export default User