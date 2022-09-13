import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo1 } from '../assets/whatsapp-icon.svg'
import { ReactComponent as Logo2 } from '../assets/facebook-icon.svg'
import { ReactComponent as Logo3 } from '../assets/facebook-messenger.svg'
import aboutUsSvg from '../assets/aboutUs.svg'

export default function AboutUs() {
    const thisPageContentHeight = 1200;

    useEffect(() => {
        setTimeout(() => { window.scrollTo(0, 0) }, 100);
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
            <NavBar />
            <div style={{
                paddingTop: 70,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'start',
                    flexWrap: 'wrap',
                    // backgroundColor: 'red',
                    width: '80%',
                    // width: window.innerWidth < 600 && '100%' || '80%',
                }}

                >
                    <div style={{
                        // backgroundColor: 'red',
                        width: 'auto',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        flex: '0 1 400px',
                    }}>
                        <img src={aboutUsSvg} alt='nothing'
                            style={{
                                minWidth: 200,
                                maxWidth: 500,
                                marginTop: 40,
                            }}
                        />
                    </div>
                    <main style={{
                        // backgroundColor: 'blue',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        paddingRight: 15,
                        fontFamily: 'Almarai, sans-serif',
                        flex: '0 1 300px',
                        width: '100%',
                        minWidth: window.innerWidth < 800 && window.innerWidth - 50 || 500,
                        // minWidth: 600,
                    }}>

                        <h1>من نحن؟</h1>
                        <article>
                            <p style={{ lineHeight: 2, /* padding: 20, */ textAlign: 'right', }}>
                                نحن مجموعة من المصمميم المغاربة اصحاب خبرة و مهارة يشهد بها زبناءنا
                                <br /><br />تتمحور مهمتنا في تطوير الهوية البصرية للشركات و المشاريع الصغرا بأثمنة في متناول الجميع
                                <br /> :  تشمل خدماتنا انشاء
                            </p>
                            <ul style={{ alignSelf: 'end', backgroundColor: 'rgba(0,0,0,0.1)', paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 30 }}>
                                <li style={{ borderBottom: '1px solid black' }}>'Logo'</li>
                                <li style={{ borderBottom: '1px solid black' }}>'Filer'</li>
                                <li style={{ borderBottom: '1px solid black' }}>'bisuness card'</li>
                                <li style={{ borderBottom: '1px solid black' }}>'Ad banner'</li>
                                <li style={{ borderBottom: '1px solid black' }}>'Social media creatives'</li>
                                <li style={{ borderBottom: '1px solid black' }}>'Social media ad' </li>
                                <li style={{ borderBottom: '1px solid black' }}>'Social media posts'</li>
                                <li style={{ borderBottom: '1px solid black' }}>'Brand identity'</li>
                                <li style={{ borderBottom: '1px solid black' }}>...المزيد</li>
                            </ul>
                            <p style={{ textAlign: 'right' }}>
                                <Link to='/services'><strong>اطلب تصميم</strong></Link><br />
                                وجب التنويه ان خدماتنا تتوزع بشكل اساسي حول الانترنت<br />
                                نستلم طلب التصميم عبر الانترنت بطرق مختلفة مثال (واتساب), ونرسل التصميم النهائي عبر الانترنت مثال (الايميل)
                                <br />
                                : للتواصل معنا والاستفسار
                                <br />
                                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 20, marginTop: 20 }}>

                                    <a href='https://m.me/limitless.graphics.media' target='_blank' rel="noreferrer" >
                                        <Logo2 width={40} fill='blue' />
                                    </a>
                                    <a href='https://wa.me/212682536808?text=more%20info%20please.' target='_blank' rel="noreferrer">
                                        <Logo1 width={40} fill='green' />
                                    </a>
                                    <a href='https://m.me/limitless.graphics.media' target='_blank' rel="noreferrer" >
                                        <Logo3 width={40} fill='#0f87ff' />
                                    </a>

                                </span>
                            </p>
                        </article>
                    </main>
                </div>
            </div>
            <Footer thisPageContentHeight={thisPageContentHeight} />
        </div>
    )
}
