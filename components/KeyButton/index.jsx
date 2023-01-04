import { motion } from 'framer-motion';

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
        opacity: 0.6
    }
}


export default function KeyButton({ kbd, label }) {

    return (
        <Container
            initial="rest"
            whileHover="hover"
            animate="rest"
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
            <Label>
                {label}
            </Label>
        </Container >
    );
}