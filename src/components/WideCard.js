import React from 'react'

export default function WideCard(props) {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            height: 'auto',
            width: '100%',
            backgroundColor: 'rgb(255,255,255)',
        }}>
            <div style={{
                backgroundColor: 'transparent',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                height: 'auto',
                width: '80%',
                marginTop: 15,
            }}>
                {props.children}
            </div>

        </div>
    )
}
