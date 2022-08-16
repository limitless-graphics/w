import React from 'react'
import NavBar from '../components/NavBar'
import WideCard from '../components/WideCard'
import LandingSvgImg from '../assets/desigerGirl.svg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function LandingPage() {
    return (
        <div className="App" >
            <NavBar />
            <WideCard>
                <div style={{
                    order: 1,
                    minWidth: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: '1 1 200px'
                }}>
                    <h1 className='descriptive-text'>التصميم هو <span className='descriptive-text' style={{ color: 'darkorange' }}>السر</span></h1>
                    <h2 style={{ color: '#471601' }}>للاعمال و المشاريع الناجحة</h2>
                    <Link to='order-design' className='order-button'> اطلب تصميم </Link>
                </div>
                <img style={{ marginTop: 40, backgroundColor: 'transparent', minWidth: 100, flex: '2 1 200px', maxWidth: 600 }} src={LandingSvgImg} alt={'limitless graphics'} />
            </WideCard >
            <Footer />
        </div >
    )
}
