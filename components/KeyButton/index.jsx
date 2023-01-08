import { useEffect, useState } from 'react'

import {
    Container,
    Key,
    Orb,
    OrbContainer,
    KeyBG,
    Label,
    KeyContainer
} from './styles.index'

const orbOpacity = {
    rest: {
        opacity: 0
    },
    hover: {
        opacity: 0
    }
}

const labelHover = {
    rest: {
        color: '#85858E'
    },
    hover: {
        color: 'white'
    }
}


export default function KeyButton({ kbd, label, onClick }) {

    return (
        <Container
            initial="rest"
            whileHover="hover"
            animate="rest"
            onClick={onClick}
        >
            <KeyContainer>
                <Key>
                    {kbd}
                </Key>
                <KeyBG />
                <OrbContainer
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                >
                    <Orb variants={orbOpacity} style={{ backgroundColor: 'white' }} />
                    <Orb variants={orbOpacity} style={{ backgroundColor: 'white' }} />
                </OrbContainer>
            </KeyContainer>
            <Label variants={labelHover}>
                {label}
            </Label>
        </Container >
    );
}