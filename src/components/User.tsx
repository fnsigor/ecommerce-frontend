import Link from 'next/link'
import React from 'react'

import { Suspense } from 'react'

export const  User = async () => {


    await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await fetch('https://api.github.com/users/fnsigor', {
        next: {
            revalidate: 30
        }
    }) //requisição server side, sem necessidade do getStatic Props
    const user = await response.json()


    return (
        <>
            <h1>User</h1>

     
   

            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>

        </>

    )
}
