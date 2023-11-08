import React, { Children } from 'react'

export default function AuthLayout({ children }: any) {


    return (

        <main>
            <h1>paginas de na rota auth</h1>
            {children}
        </main>
    )

}