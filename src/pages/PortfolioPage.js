import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../App.css'

export default function PortfolioPage() {
    const thisPageContentHeight = 600;
    const [projectWindow, setProjectWindow] = useState(false);
    const [showIdentity, setShowIdentity] = useState(true);

    // const [showBigPicture, setShowBigPicture] = useState(false);

    // if (projectWindow) document.body.style.overflow = 'hidden';
    // else document.body.style.overflow = 'scroll';

    const data = [
        { id: 1, title: 'نمودج إعلان', img: 'ad.jpg', subTitle: 'عينة من الاعلانات التي أنشأناها', description: 'هده تجربة للخط فقط لارى كيف ستضهر انا الان يجب ان اتحدث عن الاعلان لاكن ذلك غير مهم سيداتي وسادتي', slideshowImages: ['ad.jpg', 'secondad.jpg', 'thirdad.jpg'] },
        { id: 2, title: 'نمودج لوغو', img: 'logoGate.jpg', subTitle: 'عينة من الشعارات التي أنشأناها', description: 'هده تجربة للخط فقط لارى كيف ستضهر انا الان يجب ان اتحدث عن الاعلان لاكن ذلك غير مهم سيداتي وسادتي', slideshowImages: ['logo3.jpg', 'logo1.jpg', 'logo2.jpg'] },
        { id: 3, title: 'نمودج بطاقة عمل', img: 'bisunessCard2.jpg', subTitle: 'عينة من بطاقات الهوية التي أنشأناها', description: 'هده تجربة للخط فقط لارى كيف ستضهر انا الان يجب ان اتحدث عن الاعلان لاكن ذلك غير مهم سيداتي وسادتي', slideshowImages: ['bisunessCard2.jpg', 'bisunessCard.jpg', 'thirdad.jpg'] },
        { id: 4, title: 'نمودج هوية بصرية', img: 'plasticaId.jpg', subTitle: 'عينة هوية بصرية أنشأناها لأحد زبائننا', description: 'هده تجربة للخط فقط لارى كيف ستضهر انا الان يجب ان اتحدث عن الاعلان لاكن ذلك غير مهم سيداتي وسادتي', slideshowImages: ['ad.jpg', 'secondad.jpg', 'thirdad.jpg'] },
        {
            id: 5, title: 'نمودج تغليف', img: 'embalage.jpg', subTitle: 'عينة من تصميم تغليف لاحد عملائنا', description: `هذا النمودج من احد اعمالنا لشركة ‘بيلاتوس‘ شركة متخصصة في مواد التجميل والعناية بالبشرة 
        في هذا المشروع قمنا بإعادة تصميم أغلفة المنتجات لتصبح اكثر احترافية و مصدقية لتقوية علاقة الشركة مع عملائها` , slideshowImages: ['embalage.jpg', 'oldEmbalage.jpg', 'embalageNew.jpg']
        },
    ]

    return (
        <div style={{
            height: '100vh',
            paddingTop: 0, textAlign: 'right', fontFamily: 'Almarai , sans-serif',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between'
        }} >
            <NavBar />
            {showIdentity && <BrandIdentityWindow visibility={setShowIdentity} />}
            {projectWindow && <ProjectWindow data={data.find((element) => element.id === projectWindow)} visibility={setProjectWindow} />}
            <main style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', height: 'auto' }}>
                <div style={{ width: '80%', maxWidth: 1500, height: 'auto' }}>
                    <h1 style={{ marginTop: 70 }}>: نمادج</h1>
                    <div style={{ marginTop: 0, width: '100%', color: 'black', display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', height: 'auto' }}>
                        {data.map((element) => {
                            return <ProjectBlock showIdentity={setShowIdentity} key={element.id} visibility={setProjectWindow} id={element.id} title={element.title} subTitle={element.subTitle} img={element.img} description={element.description} />
                        })}
                    </div>
                </div>
            </main >
            <Footer alwaysNormal={true} thisPageContentHeight={thisPageContentHeight} />
        </div >
    )
}
function ProjectBlock(props) {
    return (
        <div onClick={() => {
            if (props.img === 'plasticaId.jpg') {
                props.showIdentity(true)
                return;
            };
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
    const [displayedImg, setDisplayedImg] = useState(props.data.slideshowImages[0].replace('.jpg', ''));
    const [showBigPicture, setShowBigPicture] = useState(false);

    let styles = { display: 'block', width: '100%', }
    if (displayedImg[0] === '$') styles = { width: '80%' };

    return (
        <div className='portfolio-project-window-outer' >
            {showBigPicture && <BigPicture img={displayedImg} setBigPicture={setShowBigPicture} />}
            <div onClick={() => { props.visibility(false); }} className='black-drop'></div>
            <div className='portfolio-project-window'>
                <div className='portfolio-project-window-img-container'>
                    <img style={styles} className='portfolio-project-window-img' src={require(`../assets/portfolio/${displayedImg}.jpg`)} alt='img'
                        onClick={() => {
                            setShowBigPicture(true);
                        }}
                    />
                </div>
                <div className='portfolio-project-window-slideshow'>
                    <div
                        onMouseOver={() => {
                            setDisplayedImg(props.data.slideshowImages[0].replace('.jpg', ''));
                        }}
                    ><img style={{ height: '100%', opacity: 0.7 }} src={require('../assets/portfolio/' + props.data.slideshowImages[0] + '')} alt='ad' /></div>
                    <div
                        onMouseOver={() => {
                            setDisplayedImg(props.data.slideshowImages[1].replace('.jpg', ''));
                        }}
                    ><img style={{ height: '100%', opacity: 0.7 }} src={require('../assets/portfolio/' + props.data.slideshowImages[1] + '')} alt='ad' /></div>
                    <div
                        onMouseOver={() => {
                            setDisplayedImg(props.data.slideshowImages[2].replace('.jpg', ''));
                        }}
                    ><img style={{ height: '100%', opacity: 0.7 }} src={require('../assets/portfolio/' + props.data.slideshowImages[2] + '')} alt='ad' /></div>
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
    let styles = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    };
    window.innerHeight > window.innerWidth ? styles = { width: '100%', maxHeight: 'auto' } : styles = { width: 'auto', height: '100%' };

    return (
        <div style={{
            position: 'fixed', display: 'flex', justifyContent: 'center',
            zIndex: 1000, height: '100vh', width: '100vw', backgroundColor: 'rgba(0,0,0,0.9)',
        }}
            onClick={() => {
                props.setBigPicture(false);
            }}
        >
            <div style={{ display: 'flex', width: 30, height: 30, position: 'absolute', top: 10, right: 10, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>x</div>
            <div>
                <img style={styles} src={require('../assets/portfolio/' + props.img + '.jpg')} alt='preview' />
            </div>
        </div >
    )
}

function BrandIdentityWindow(props) {
    return (
        <div className='brand-identity-window'
            onClick={() => {
                props.visibility(false);
            }}
        >
            <img onClick={(e) => { e.stopPropagation() }}
                className='brand-identity-window-img'
                src={require('../assets/portfolio/plasticaId.jpg')} alt='brand identity' />

        </div>
    )
}