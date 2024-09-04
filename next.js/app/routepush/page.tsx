/* eslint-disable react-hooks/rules-of-hooks */

'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const route = () => {

    const route = useRouter()

  return (
    <div>
      <h1>route . push</h1>
      <p onClick={()=> route.push('/')} >you want to go home</p>
    </div>
  )
}

export default route
