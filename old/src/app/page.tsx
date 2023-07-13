'use client'

import './globals.css'
import {Inter} from 'next/font/google'
import {ParallaxProvider} from 'react-scroll-parallax'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
       <div>
        <h1>Aleksandar</h1>
        </div>
    )
}
