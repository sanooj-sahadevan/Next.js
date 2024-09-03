import { log } from 'console'
import React from 'react'

const review = ({params}:any) => {

    const {nested,reviewid} = params
    
  return (
    <div>
      <h1>review = {nested} {reviewid}  </h1>
    </div>
  )
}

export default review
