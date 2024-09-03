import React from 'react'

const dynamic = ({ params }: any) => {
    return (
        <div>
            <h1>dynamic Routes  {params.dynamic} </h1>
        </div>
    )
}

export default dynamic
