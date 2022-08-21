import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
export default function OrderPage() {
    return (
        <>
            <NavBar />
            <main style={{
                fontFamily: 'Almarai, sans-serif',
                textAlign: 'right',
                border: '1px solid black',
                width: '100%',
            }}>
                <h1 style={{ color: 'black', }}>اطلب تصميم الان</h1>

            </main>
            <Footer />
        </>
    )
}
