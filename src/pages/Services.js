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
                    height: 'auto',
                    width: '90%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 30,
                }}>
                    <Card title={'Logo'} />
                    <Card title={'Social media Ad'} />
                    <Card title={'Brand identity'} />
                    <Card title={'Social media post'} />
                    <Card title={'Ad banner'} />
                    <Card title={'Bisuness card'} />

                </div>
            </main>
            <Footer />
        </>
    )
}
function Card(props) {
    return (
        <div className='order-card'>
            <h3 style={{ fontSize: 15, color: 'black' || '#f8931f' }}>{props.title}</h3>
            <div style={{ borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.2)', height: 150, width: 150 }}>

            </div>
        </div>
    )
}