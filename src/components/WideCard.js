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
            backgroundColor: props.bgColor || 'transparent',
            marginBottom: props.marginBottom || 0,
            paddingBottom: props.paddingBottom || 0,
        }}>
            <div style={{
                // backgroundColor: 'red',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                height: 'auto',
                // width: '80%',
                width: '100%',
                marginTop: 15,
                gap: '10%',
            }}>
                {props.children}
            </div>

        </div>
    )
}
