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
                    <Card centerTitle='تصميم لوغو'
                        title={'Logo'}
                        description='.تصميم لوغو احترافي يراعي كل المعايير'
                        photo='logo.png'
                    >
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
                    <Card centerTitle='تصميم إعلان / منشور'
                        title={'Social media Ad'}
                        description='تصميم اعلان او منشور سوشل ميديا'
                        photo='socialMediaAd.png'
                    >


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
                    <Card
                        title={'Brand identity'}
                        centerTitle='تصميم هوية بصرية'
                        description='انشاء هوية بصرية احترافية تزيد تقة العملاء'
                        photo='brandIdentity.png'
                    >
                        <div style={{ textAlign: 'center' }}>
                            <h5>: التصاميم المسلمة</h5>
                            <p style={{ lineHeight: 1.5, fontSize: 14 }}>
                                Logo <br />
                                لغة تصميم و هوية <br />
                                بطاقة عمل <br />
                                social media post template <br />
                                غلاف و صورة فيسبوك <br />

                            </p>
                        </div>
                    </Card>
                    <Card centerTitle={'تصميم بطاقة عمل'}
                        description={'تصميم بطاقة عمل احترافية تعكس مشروعك'}
                        title={'Bisuness card'}
                        finalFiles={'الملفات النهائية'}
                        photo={'bisunessCard.png'}
                    >
                        <p>
                            ملف .AI / .PSD <br />
                            ملف .JPG <br />
                            ملف .PNG <br />
                            ملف .PDF <br />
                        </p>
                    </Card>
                    <Card
                        centerTitle={'تصميم إعلان'}
                        description={'إنشاء إعلان ملصق إحترافي'}
                        title={'Ad banner'}
                        finalFiles=' : الملفات النهائية'
                    >
                        <p>
                            ملف .AI / .PSD <br />
                            ملف .JPG <br />
                            ملف .PNG <br />
                            ملف .PDF <br />
                        </p>
                    </Card>
                    <Card
                        centerTitle='اطلب تصميمك الخاص'
                        description='يمكنك طلب التصميم الذي تريد في هدا الخيار'
                        title='تصميم خاص'
                        finalFiles=' : الملفات المسلمة'
                        photo='customDesign.png'
                    >
                        <h4>مخصصة</h4>
                    </Card>

                </div>
            </main>
            <Footer />
        </>
    )
}
function Card(props) {

    let cardImage = 'logo.png'

    function photoWidth() {
        let width = 0;
        if (props.photo === 'logo.png') {
            width = 70;
        } else width = 120;
        return width;
    }
    return (
        <div className='order-card'>
            <h3 style={{ fontSize: 15, color: 'black' || '#f8931f' }}>{props.title}</h3>
            <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: 'white', height: 150, width: 150 }}>
                <img width={photoWidth()} src={require(`../assets/${props.photo || 'logo.png'}`)} alt='limitless graphics logo' />
            </div>
            <h3 style={{ textDecoration: 'underline' }}>{props.centerTitle || 'تصميم مناسب'}</h3>
            <p style={{ fontSize: 12 }}>
                {props.description}
            </p>
            <button className='contact-us-action-button'
                onClick={() => {
                    window.open(`https://wa.me/212682536808?text=${props.title}`.replace(' ', '%20'));
                }}
            >اطلب الان</button>
            <div style={{ textAlign: 'center' }}>
                <h5>{props.finalFiles}</h5>
                {props.children}
            </div>
        </div>
    )
}