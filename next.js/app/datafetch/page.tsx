import React from 'react'

const fecth = async () => {
    type User = {
        name: string, id: number, username: string, email: string, phone: string

    }


    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    let user = response.json()
    console.log(user);

    return (
        <p>data fetch</p>
    )
}

export default fecth
