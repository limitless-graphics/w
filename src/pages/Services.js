import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../App.css'

export default function Services() {
    return (
        <>
            <NavBar />
            <main style={{ fontFamily: 'Almarai, sans-serif', textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ marginBottom: 40 }}>: خدماتنا</h1>
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
            <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: 'gray', height: 150, width: 150 }}>

            </div>
            <h3 style={{ textDecoration: 'underline' }}>تصميم مناسب</h3>
            <button className='contact-us-action-button'>action</button>
        </div>
    )
}