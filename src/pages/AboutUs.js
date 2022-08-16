import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import whatsappIcon from '../assets/whatsapp-icon.svg'
import fbIcon from '../assets/facebook-icon.svg'

export default function AboutUs() {
    return (
        <>
            <NavBar />
            <main style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                paddingRight: 15,
                fontFamily: 'Almarai, sans-serif',
            }}>
                <h1>من نحن؟</h1>
                <article>
                    <p style={{ lineHeight: 2, padding: 20, textAlign: 'right', }}>
                        نحن مجموعة من المصمميم المغاربة اصحاب خبرة و مهارة يشهد بها زبناءنا
                        <br /><br />تتمحور مهمتنا في تطوير الهوية البصرية للشركات و المشاريع الصغرا بأثمنة في متناول الجميع
                        <br /> :  تشمل خدماتنا انشاء
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
                        <Link to='/order-design'><strong>اطلب تصميم</strong></Link><br />
                        وجب التنويه ان خدماتنا تتوزع بشكل اساسي حول الانترنت<br />
                        نستلم طلب التصميم عبر الانترنت بطرق مختلفة مثال (واتساب), ونرسل التصميم النهائي عبر الانترنت مثال (الايميل)
                        <br />
                        : للتواصل معنا والاستفسار
                        <br />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 20 }}>
                            <img className='clickable-img' width={40} src={whatsappIcon} alt='whtsp' />
                            <img className='clickable-img' width={40} src={fbIcon} alt='fb' />
                        </div>

                    </p>
                </article>
            </main>
            <Footer />
        </>
    )
}
