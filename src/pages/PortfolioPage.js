import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../App.css'

export default function PortfolioPage() {
    const thisPageContentHeight = 600;
    const [projectWindow, setProjectWindow] = useState(false);
    const [showBigPicture, setShowBigPicture] = useState(false);
    if (projectWindow) {
        document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'scroll';

    const data = [
        { id: 1, title: 'نمودج إعلان', img: 'ad.jpg', subTitle: 'مشروع world this is subtitle.', description: 'هده تجربة للخط فقط لارى كيف ستضهر انا الان يجب ان اتحدث عن الاعلان لاكن ذلك غير مهم سيداتي وسادتي' },
        { id: 2, title: 'نمودج لوغو', img: 'ad.jpg', subTitle: 'مشروع world this is subtitle.', description: 'هده تجربة للخط فقط لارى كيف ستضهر انا الان يجب ان اتحدث عن الاعلان لاكن ذلك غير مهم سيداتي وسادتي' },
        { id: 3, title: 'نمودج بطاقة عمل', img: 'ad.jpg', subTitle: 'مشروع world this is subtitle.', description: 'هده تجربة للخط فقط لارى كيف ستضهر انا الان يجب ان اتحدث عن الاعلان لاكن ذلك غير مهم سيداتي وسادتي' },
        { id: 4, title: 'نمودج هوية بصرية', img: 'ad.jpg', subTitle: 'مشروع world this is subtitle.', description: 'هده تجربة للخط فقط لارى كيف ستضهر انا الان يجب ان اتحدث عن الاعلان لاكن ذلك غير مهم سيداتي وسادتي' },
        {
            id: 5, title: 'نمودج تغليف', img: 'embalage.jpg', subTitle: 'مشروع world this is subtitle.', description: `هذا النمودج من احد اعمالنا لشركة ‘بيلاتوس‘ شركة متخصصة في مواد التجميل والعناية بالبشرة 
        في هذا المشروع قمنا بإعادة تصميم أغلفة المنتجات لتصبح اكثر احترافية و مصدقية لتقوية علاقة الشركة مع عملائها` },
    ]
    return (
        <>
            {showBigPicture && <BigPicture setBigPicture={setShowBigPicture} />}
            <div style={{ paddingTop: 0, textAlign: 'right', fontFamily: 'Almarai , sans-serif' }} >
                <NavBar />
                {projectWindow && <ProjectWindow setBigPicture={setShowBigPicture} data={data.find((element) => element.id === projectWindow)} visibility={setProjectWindow} />}
                <main style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', height: 'auto' }}>
                    <div style={{ width: '80%', maxWidth: 1500, height: 'auto' }}>
                        <h1>: نمادج</h1>
                        <div style={{ marginTop: 70, width: '100%', color: 'black', display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', height: 'auto' }}>
                            {data.map((element) => {
                                return <ProjectBlock key={element.id} visibility={setProjectWindow} id={element.id} title={element.title} subTitle={element.subTitle} img={element.img} description={element.description} />
                            })}
                        </div>
                    </div>
                </main >
                <Footer alwaysNormal={true} thisPageContentHeight={thisPageContentHeight} />
            </div >
        </>
    )
}
function ProjectBlock(props) {
    return (
        <div onClick={() => {
            props.visibility(props.id);
        }}
            className='portfolio-project-block'>

            <div style={{ height: '100%', width: '110%', }}>
                <img className='portfolio-block-image' src={require('../assets/portfolio/' + props.img)} alt='proj' />
            </div>

            <div style={{ position: 'absolute', bottom: 10, height: 'auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', }}>
                <h3 style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '0px 10px', borderRadius: 5, margin: 5, }}>{props.title}</h3>
                <h3 style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '0px 10px', borderRadius: 5, margin: 5, textAlign: 'center', }}>{props.subTitle}</h3>
            </div>

        </div>

    )
}

function ProjectWindow(props) {
    return (
        <div className='portfolio-project-window-outer' >
            <div onClick={() => { props.visibility(false); }} className='black-drop'></div>
            <div className='portfolio-project-window'>
                <div className='portfolio-project-window-img-container'>
                    <img style={{ display: 'block', width: '100%', }} className='portfolio-project-window-img' src={require(`../assets/portfolio/${props.data.img}`)} alt='img'
                        onClick={() => {
                            props.setBigPicture(true);
                        }}
                    />
                </div>
                <div className='portfolio-project-window-slideshow'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='portfolio-project-window-text'>
                    <h1>{': ' + props.data.title}</h1>
                    <p style={{ paddingLeft: 10, maxWidth: 400, textAlign: 'right', color: 'rgb(50,50,50)' }}>{props.data.description}</p>
                </div>
            </div>
        </div>

    )
}
function BigPicture(props) {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed',
            zIndex: 1000, height: '100vh', width: '100vw', backgroundColor: 'rgba(0,0,0,0.9)',
        }}
            onClick={() => {
                props.setBigPicture(false);
            }}
        >
            <div style={{ width: 30, height: 30, position: 'absolute', top: 10, right: 10, backgroundColor: 'white', borderRadius: 50, textAlign: 'center' }}>x</div>
            <img height={'100%'} src={require('../assets/portfolio/ad.jpg')} alt='preview' />
        </div >
    )
}