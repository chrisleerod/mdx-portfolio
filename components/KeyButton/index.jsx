import { motion } from 'framer-motion';

import {
    Container,
    Key,
    Orb,
    OrbContainer,
    Label,
    KeyContainer
} from './styles.index'

const OrbOpacity = {
    rest: {
        opacity: 0
    },
    hover: {
        opacity: 1
    }
}


export default function KeyButton({ kbd, label }) {

    return (
        <Container
            initial="rest"
            whileHover="hover"
            animate="reset"
        >
            <KeyContainer>
                <Key>
                    {kbd}
                </Key>
                <OrbContainer
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "Loop" }}
                >
                    <Orb variants={OrbOpacity} style={{ backgroundColor: '#FF5C00' }} />
                    <Orb variants={OrbOpacity} style={{ backgroundColor: '#FF006B' }} />
                </OrbContainer>
            </KeyContainer>
            <Label>
                {label}
            </Label>
        </Container >
    );
}