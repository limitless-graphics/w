import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>

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
            height: 'auto',
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
            {
                props.first && <Link
                    style={{ position: 'relative', color: 'orange', }}
                    to={'/services'}>خدماتنا</Link>
            }
        </div >
    )
}