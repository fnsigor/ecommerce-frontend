import React from 'react'

export const metadata = {
    title: {
        default: 'App',
        template: '%s - App',
    }
}


const Applayout = ({ children }: any) => {
    return (
        <div>
            <h2>paginas da rota app</h2>

            {children}

        </div>
    )
}

export default Applayout