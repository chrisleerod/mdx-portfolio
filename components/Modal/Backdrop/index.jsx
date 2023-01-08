import React from "react";

import {
    Container
} from './index.styles'

const Backdrop = ({ children, onClick }) => {
    return (
        <Container
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
        >
            {children}
        </Container>
    )
}

export default Backdrop;