import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo1 } from '../assets/whatsapp-icon.svg'
import { ReactComponent as Logo2 } from '../assets/facebook-icon.svg'
import { ReactComponent as Logo3 } from '../assets/facebook-messenger.svg'

export default function Footer(props) {
    const [position, setPosition] = useState(window.innerHeight < 1000 ? 150 : 20);
    const [absolute, setAbsolute] = useState(false);
    useEffect(() => {
        // setAbsolute(true);
    }, [])
    window.onresize = (e) => {
        if (props.alwaysNormal) return;
        if (absolute && window.innerHeight > window.innerWidth) {
            setAbsolute(false);
        }
        else if (!window.innerHeight > window.innerWidth && window.innerHeight > props.thisPageContentHeight) {
            setAbsolute(true);
        }
        else {
            setAbsolute(false);
        }
    }
    if (absolute && window.innerHeight > window.innerWidth) { setAbsolute(false); console.log('hello world!') };

    return (
        <div className='footer' style={{
            position: absolute && 'fixed' || 'relative',
            bottom: 0,
            marginTop: 40,
            backgroundColor: '#471601',
        }}>
            <div style={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    height: '100%',
                    width: '90%',
                    maxWidth: 1000,
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: 'center',
                    flexWrap: 'wrap',
                    gap: 10,
                }}>

                    <FooterBlock title='القليل عنا' first={true} paragraph='نحن مجموعة من المصمميم المغاربة اصحاب خبرة و مهارة يشهد بها زبناءنا تتمحور مهمتنا في تطوير الهوية البصرية للشركات و المشاريع الصغرا بأثمنة في متناول الجميع' />
                    <FooterBlock title='hello' />
                    <FooterBlock title='تواصل معنا' third={true} paragraph=' : تواصل معنا عبر الوسائط الثالية' />
                </div>
            </div>
        </div>
    )
}

function FooterBlock(props) {

    return (
        <div style={{
            fontFamily: 'Almarai, sans-serif',
            color: 'white',
            borderRight: '5px solid rgba(0,0,0,0.2)',
            flex: '1 1 300px',
            maxWidth: 400,
            height: 250,
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'end',
            paddingRight: 10,
        }}>
            <h3 style={{ marginBottom: 0 }}>{props.title}</h3>
            {(props.first || props.third) && <p style={{
                lineHeight: 1.5, width: '95%', textAlign: 'right',
            }}>
                {props.paragraph}
            </p>}
            {props.third && <h4 style={{ marginTop: 0, marginBottom: 5 }}>0682536808</h4>}
            {props.third &&
                <div>
                    <div style={{ display: 'flex', justifyContent: 'right', gap: 20 }}>
                        {/* <img width={30} src={facebookIcon} alt='fb' /> */}

                        <a href='https://www.facebook.com/limitless.graphics.media' target='_blank' rel="noreferrer" >
                            <Logo2 width={25} fill='white' />
                        </a>
                        <a href='https://wa.me/212682536808?text=more%20info%20please.' target='_blank' rel="noreferrer">
                            <Logo1 width={25} fill='white' />
                        </a>

                        <a href='https://m.me/limitless.graphics.media' target='_blank' rel="noreferrer" >
                            <Logo3 width={25} fill='white' />
                        </a>
                    </div>
                </div>}
            {
                props.first && <Link
                    style={{ position: 'relative', color: 'orange', }}
                    to={'/services'}>خدماتنا</Link>
            }
        </div >
    )
}