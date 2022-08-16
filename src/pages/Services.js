import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../App.css'

export default function Services() {
    return (
        <>
            <NavBar />
            <main style={{ fontFamily: 'Almarai, sans-serif', textAlign: 'right', }}>
                <h1 style={{ marginRight: 15 }}>: خدماتنا</h1>
                <div style={{
                    backgroundColor: 'white',
                    height: 400,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 30,
                }}>
                    <div className='order-card'></div>
                    <div className='order-card'></div>
                    <div className='order-card'></div>
                    <div className='order-card'></div>
                </div>
            </main>
            <Footer />
        </>
    )
}