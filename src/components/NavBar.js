import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function NavBar(props) {
    const [shadow, setShadow] = useState(false);
    window.onscroll = () => {
        if (window.pageYOffset > 20) setShadow(true);
        else setShadow(false);
    }
    return (
        <nav style={{
            zIndex: 10,
            position: 'fixed',
            height: 70,
            width: '100%',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // borderBottom: '3px solid orange',
            boxShadow: shadow && '0px 10px 5px rgba(0,0,0,0.1)' || 'none',
            transition: '150ms',
            top: 0,
        }}>
            <Link to='/'>
                <img style={{ margin: 10, width: 40, height: 50 }} src={require('../assets/logo.png')} alt={'limitless logo'} />
            </Link>
            <div style={{ fontFamily: 'Almarai, sans-serif', display: 'flex', gap: 45, justifySelf: 'end', backgroundColor: 'white', marginRight: 20 }}>
                <Link to='/portfolio'><h3>بعض اعمالنا</h3></Link>
                <Link to='/Contact-us'><h3>تواصل معنا</h3></Link>
                <Link to='/services'><h3>خدماتنا</h3></Link>
                <Link to='/about-us'><h3>من نحن</h3></Link>
            </div>
        </nav>
    )
}