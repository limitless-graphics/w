import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../App.css'

export default function PortfolioPage() {
    const thisPageContentHeight = 600;
    const [projectWindow, setProjectWindow] = useState(false);
    const data = [
        { id: 1, title: 'إعلان', img: 'somthing.png', subTitle: 'مشروع world this is subtitle.' },
        { id: 2, title: 'لوغو', img: 'somthing.png', subTitle: 'مشروع world this is subtitle.' },
        { id: 3, title: 'بطاقة عمل', img: 'somthing.png', subTitle: 'مشروع world this is subtitle.' },
        { id: 4, title: 'هوية بصرية', img: 'somthing.png', subTitle: 'مشروع world this is subtitle.' },
        { id: 4, title: 'تغليف', img: 'somthing.png', subTitle: 'مشروع world this is subtitle.' },
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
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'absolute', bottom: 0 }}>
                <h3 style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '0px 10px', borderRadius: 5, margin: 5 }}>{props.title}</h3>
                <h3 style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '0px 10px', borderRadius: 5, margin: 5, textAlign: 'center', }}>{props.subTitle}</h3>
            </div>
        </div>
    )
}
function ProjectWindow(props) {
    return (
        <div style={{
            backgroundColor: 'white',
            boxShadow: '0px 0px 25px rgb(0,0,0,0.3)',
            height: '80%',
            width: '90%',
            maxHeight: '1000',
            maxWidth: '2000',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 200,
            borderRadius: 10,
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <div
                onClick={() => {
                    props.visibility(false);
                }}
                style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: 'rgb(240,240,240)', height: 30, width: 30,
                    position: 'absolute', right: 20, top: 20, color: 'gray', //border: '2px solid lightgray',
                }}>X</div>
            <div style={{
                backgroundColor: 'lightgray',
                width: 1000,
                aspectRatio: 1
            }}>

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