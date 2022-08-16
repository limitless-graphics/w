import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function NavBar() {
    return (
        <nav style={{
            height: 70,
            width: '100%',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Link to='/'>
                <img style={{ margin: 10, width: 40, height: 50 }} src={require('../assets/logo.png')} alt={'limitless logo'} />
            </Link>
            <div style={{ fontFamily: 'Almarai, sans-serif', display: 'flex', gap: 45, justifySelf: 'end', backgroundColor: 'white', marginRight: 20 }}>
                <Link to='/order-design'><h3>اطلب تصميم</h3></Link>
                <Link to='/services'><h3>خدماتنا</h3></Link>
                <Link to='/about-us'><h3>من نحن</h3></Link>
            </div>
        </nav>
    )
}