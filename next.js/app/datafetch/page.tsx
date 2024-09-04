// import React from 'react'

// const fecth = async () => {
//     type User = {
//         name: string, id: number, username: string, email: string, phone: string

//     }


//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         if (!response.ok) {
//             return { messge: 'error' }
//         }
//         let users: User[] = await response.json()
//         return (
//             <div>
//                 <p>data fectch</p>
    
//          {users.map((user)=>{
//             <p key={user.id}>{user.name}</p>
//          })}
    
//             </div>
    
//         )
    

//     } catch (error) {
// console.error('erorrrrrrrrrrrr');

//     }
   
// }

// export default fecth
