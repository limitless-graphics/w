import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function NavBar(props) {
    const [shadow, setShadow] = useState(false);
    const [matchMedia, setMatchMedia] = useState(window.matchMedia("(max-width: 710px)").matches)
    const navLinks = useRef();

    useEffect(() => {
        window
            .matchMedia("(max-width: 710px)")
            .addEventListener('change', e => {
                setMatchMedia(e.matches)
            });
    }, []);

    window.onscroll = () => {
        if (window.pageYOffset > 20) setShadow(true);
        else setShadow(false);
    }
    return (
        <nav className='nav-bar'
            style={{ boxShadow: shadow && '0px 10px 5px rgba(0,0,0,0.1)' || 'none' }}
        >
            <div onClick={() => {
                if (navLinks.current.style.display === 'none') navLinks.current.style.display = 'flex';
                else navLinks.current.style.display = 'none';
            }}
                className='burger-menu-button'
                style={{ fontFamily: 'Almarai, sans-serif', fontSize: 30 }}
            >☰</div>
            <div className='logo-container'>
                <Link to='/'>
                    <img style={{ margin: 10, width: 40, height: 50 }} src={require('../assets/logo.png')} alt={'limitless logo'} />
                </Link>
            </div>
            <div
                style={{ display: matchMedia && 'none' }}
                ref={navLinks} className='nav-bar-links'>
                <Link to='/portfolio'><h3>بعض اعمالنا</h3></Link>
                <Link to='/Contact-us'><h3>تواصل معنا</h3></Link>
                <Link to='/services'><h3>خدماتنا</h3></Link>
                <Link to='/about-us'><h3>من نحن</h3></Link>
            </div>
        </nav>
    )
}