import React from 'react'
import NavBar from '../components/NavBar'
import WideCard from '../components/WideCard'
import LandingSvgImg from '../assets/desigerGirl.svg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import InvestmentSvg from '../assets/investments.svg'

export default function LandingPage() {
    return (
        <div className="App" >
            <NavBar />
            <WideCard marginBottom={40}>
                <div className='landing-page-text-div' style={{ order: 1, }}>
                    <h1 className='descriptive-text'>التصميم هو <span className='descriptive-text' style={{ color: 'darkorange' }}>السر</span></h1>
                    <h2 style={{ color: '#471601' }}>للاعمال و المشاريع الناجحة</h2>
                    <Link to='order-design' className='order-button'> اطلب تصميم </Link>
                </div>
                <img style={{ marginTop: 40, backgroundColor: 'transparent', minWidth: 100, flex: '2 1 200px', maxWidth: 600 }} src={LandingSvgImg} alt={'limitless graphics'} />
            </WideCard >
            <WideCard paddingBottom={40} bgColor='rgb(250,250,250)'>
                <div className='landing-page-text-div' >
                    <h1 className='descriptive-text'>انقل مشروعك الى مستوى <span className='descriptive-text' style={{ color: 'darkorange' }}>آخر</span></h1>
                    <h2 style={{ color: '#471601' }}>حضور بصري قوي -  تأثير كبير.</h2>
                    <Link to='services' className='order-button'> تعرف على خدماتنا </Link>
                </div>
                <img src={InvestmentSvg} style={{ marginTop: 40, backgroundColor: 'transparent', minWidth: 100, flex: '2 1 200px', maxWidth: 500 }} alt='investment svg' />
            </WideCard>
            <Footer />
        </div >
    )
}
