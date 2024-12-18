import React from 'react'
import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
    title: 'Property Pulse',
    keywords: 'rental, property, realestate',
    description: 'Find the perfect rental property'
}

const MainLayout = ({children}) => {
  return (
    <html>
        <body>
            <Navbar/>
            <main>{children}</main>
        </body>
    </html>
  )
}

export default MainLayout