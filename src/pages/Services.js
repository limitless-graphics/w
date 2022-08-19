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
                    alignItems: 'stretch',
                    gap: 30,
                }}>
                    <Card centerTitle='تصميم لوغو' title={'Logo'} description='.تصميم لوغو احترافي يراعي كل المعايير' >
                        <div style={{}}>
                            <h5>: الملفات النهائية</h5>
                            <p style={{ textAlign: 'center' }}>
                                ملف .AI <br />
                                ملف .JPG <br />
                                ملف .PNG <br />
                                ملف .PDF <br />
                                ملف .PSD <br />
                            </p>
                        </div>
                    </Card>
                    <Card title={'Social media Ad'}>
                        <div style={{}}>
                            <h5>: الملفات النهائية</h5>
                            <p style={{ textAlign: 'center' }}>
                                ملف .AI / .PSD <br />
                                ملف .JPG <br />
                                ملف .PNG <br />
                                ملف .PDF <br />
                            </p>
                        </div>
                    </Card>
                    <Card title={'Brand identity'} >
                        <div style={{ textAlign: 'center' }}>
                            <h5>: التصاميم المسلمة</h5>
                            <p>
                                Logo <br />
                                لغة تصميم و هوية <br />
                                بطاقة عمل <br />
                                social media post template <br />
                                غلاف و صورة فيسبوك <br />

                            </p>
                        </div>
                    </Card>
                    <Card title={'Social media post'} >

                    </Card>
                    <Card title={'Ad banner'} >

                    </Card>
                    <Card title={'Bisuness card'} >

                    </Card>

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
            <h3 style={{ textDecoration: 'underline' }}>{props.centerTitle || 'تصميم مناسب'}</h3>
            <p style={{ fontSize: 12 }}>
                {props.description}
            </p>
            <button className='contact-us-action-button'>اطلب الان</button>
            {props.children}
        </div>
    )
}