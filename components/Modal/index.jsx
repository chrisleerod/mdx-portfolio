import { useRef } from 'react'
import Image from 'next/image';
import React from "react";
import Backdrop from './Backdrop'

import {
    ModalContainer,
    Header,
    Close
} from './index.styles'

const variants = {
    hidden: {
        scale: 0.99,
        y: 5,
        opacity: 0
    },
    visible: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
            type: 'ease-in-out'
        }
    },
    exit: {
        scale: 0.95,
        opacity: 0,
        transition: {
            duration: 0.1,
            type: 'ease-in-out'
        }
    },
};

const Modal = ({ maxwidth, title, children, handleClose }) => {
    
    return (
        <Backdrop onClick={handleClose}>
            <ModalContainer
                maxwidth={maxwidth}
                onClick={(e) => e.stopPropagation()}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Header>
                    <span>{title}</span>
                    <Close onClick={handleClose}>
                        <Image 
                            src='/images/icons/cross.svg'
                            width={16}
                            height={16}
                            alt='close'
                        />
                    </Close>
                </Header>
                {children}
            </ModalContainer>
        </Backdrop>
    )
}

export default Modal;