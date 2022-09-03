import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../App.css'

export default function PortfolioPage() {
    const thisPageContentHeight = 600;
    const [projectWindow, setProjectWindow] = useState(false);
    const data = [
        { id: 1, title: 'نمودج إعلان', img: 'ad.jpg', subTitle: 'مشروع world this is subtitle.' },
        { id: 2, title: 'نمودج لوغو', img: 'ad2.jpg', subTitle: 'مشروع world this is subtitle.' },
        { id: 3, title: 'نمودج بطاقة عمل', img: 'ad3.jpg', subTitle: 'مشروع world this is subtitle.' },
        { id: 4, title: 'نمودج هوية بصرية', img: 'logo2.jpg', subTitle: 'مشروع world this is subtitle.' },
        { id: 4, title: 'نمودج تغليف', img: 'ad2.jpg', subTitle: 'مشروع world this is subtitle.' },
    ]
    return (
        <div style={{ paddingTop: 70, textAlign: 'right', fontFamily: 'Almarai , sans-serif' }} >
            <NavBar />
            {projectWindow && <ProjectWindow data={data.find((element) => element.id === projectWindow)} visibility={setProjectWindow} />}
            <main style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', }}>
                <div style={{ backgroundColor: 'white', width: '80%', maxWidth: 1500 }}>
                    <h1>: نمادج</h1>
                    <div style={{ height: 400, width: '100%', color: 'black', display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {data.map((element) => {
                            return <ProjectBlock visibility={setProjectWindow} id={element.id} title={element.title} subTitle={element.subTitle} img={element.img} />
                        })}
                    </div>
                </div>
            </main>
            <Footer thisPageContentHeight={thisPageContentHeight} />
        </div>
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
        <div
            className='portfolio-window'>
            <div
                onClick={() => {
                    props.visibility(false);
                }}
                className='close-button'
            >X</div>
            <div style={{
                // backgroundColor: 'lightgray',
                width: 1000,
                aspectRatio: 1
            }}>
                <img onClick={() => {
                    alert('yes');
                }}
                    src={require(`../assets/portfolio/${props.data.img}`)} height={'100%'} style={{ left: 0, position: 'absolute', }} alt='ad' />
            </div>
            <div style={{

                height: 'auto',
                width: '300px',
                paddingRight: 20,

                // border: '2px solid red',
            }}>
                <h1 style={{ marginTop: 60 }}>{props.data.title}</h1>
                <h3 style={{ color: 'gray', }}>{props.data.subTitle}</h3>
            </div>

        </div>
    )
}