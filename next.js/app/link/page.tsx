import React from 'react'
import Link from 'next/link'

const link = () => {
    return (
        <div>
            <h1>This is Link page</h1>

            <Link href={'/'}>you want to go home page</Link>
        </div>
    )
}

export default link
