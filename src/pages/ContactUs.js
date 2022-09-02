import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { ReactComponent as Logo1 } from '../assets/whatsapp-icon.svg'
import { ReactComponent as Logo2 } from '../assets/facebook-icon.svg'
import { ReactComponent as Logo3 } from '../assets/facebook-messenger.svg'
import contactUsSvg from '../assets/contactUs.svg'
export default function OrderPage() {

    useEffect(() => {
        setTimeout(() => { window.scrollTo(0, 0) }, 100);
    }, [])


    return (
        <>
            <NavBar />
            <div style={{
                paddingTop: 70,
                display: 'flex',
                gap: 30,
                justifyContent: 'center',

            }}>
                <main style={{
                    fontFamily: 'Almarai, sans-serif',
                    textAlign: 'right',
                    width: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'right',
                    order: 1,

                }}>
                    <h1 style={{ color: 'black', marginRight: 15, }}>تواصل معنا</h1>
                    <p style={{ lineHeight: 1.5, marginRight: 15, }}>
                        . يمكنكم التواصل معنا عبر الهاتف او وتساب او صفحتنا على الفيسبوك <br />
                        : اضغط على الروابط في الاسفل <br />
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'right', gap: 20 }}>
                            {/* <img width={30} src={facebookIcon} alt='fb' /> */}

                            <a href='https://www.facebook.com/limitless.graphics.media' target='_blank' rel="noreferrer" >
                                <Logo2 width={30} fill='blue' />
                            </a>
                            <a href='https://wa.me/212682536808?text=more%20info%20please.' target='_blank' rel="noreferrer">
                                <Logo1 width={30} fill='green' />
                            </a>

                            <a href='https://m.me/limitless.graphics.media' target='_blank' rel="noreferrer" >
                                <Logo3 width={30} fill='#0f87ff' />
                            </a>
                        </div>
                        <br />
                        phone: <strong>0682536808</strong> <br />
                        facebook: <strong>fb.com/limitless.graphics.media</strong> <br />
                        whatsapp: <strong>0682536808</strong> <br />
                    </p>
                </main>
                <img src={contactUsSvg} alt='svg' style={{
                    width: 300,
                    flex: '1 1 200px',
                    maxWidth: 400
                }} />
            </div>
            <Footer />
        </>
    )
}
