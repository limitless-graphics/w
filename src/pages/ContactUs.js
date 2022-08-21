import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { ReactComponent as Logo } from '../assets/facebook-icon.svg'
import { ReactComponent as Logo2 } from '../assets/whatsapp-icon.svg'
import { Link } from 'react-router-dom'
export default function OrderPage() {
    return (
        <>
            <NavBar />
            <main style={{
                fontFamily: 'Almarai, sans-serif',
                textAlign: 'right',
                // border: '1px solid black',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'right',

            }}>
                <h1 style={{ color: 'black', marginRight: 15, }}>تواصل معنا</h1>
                <p style={{ lineHeight: 1.5, marginRight: 15, }}>
                    . يمكنكم التواصل معنا عبر الهاتف او وتساب او صفحتنا على الفيسبوك <br />
                    : اضغط على الروابط في الاسفل <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'right', gap: 10 }}>
                        {/* <img width={30} src={facebookIcon} alt='fb' /> */}

                        <a href='https://www.facebook.com/limitless.graphics.media/' target={'_blank'} rel="noreferrer">
                            <Logo fill='blue' width={30} />
                        </a>
                        <a href='https://wa.me/+212682536808?text=limitless%20salam' target={'_blank'} rel="noreferrer">
                            <Logo2 fill='green' width={30} />
                        </a>
                    </div>
                    <br />
                    phone: <strong>0682536808</strong> <br />
                    facebook: <strong>fb.com/limitless.graphics.media</strong> <br />
                    whatsapp: <strong>0682536808</strong> <br />
                </p>

            </main>
            <Footer />
        </>
    )
}
