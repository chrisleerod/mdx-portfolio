import { useRef } from 'react'
import Image from 'next/image';
import React from "react";
import Backdrop from './Backdrop'

import {
    ModalContainer,
    Header,
    Close,
    ModalBody
} from './index.styles'
import KeyButton from '../KeyButton';

const variants = {
    hidden: {
        scale: 0.99,
        y: 5,
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        opacity: 0
    },
    visible: {
        scale: 1,
        y: 0,
        opacity: 1,
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
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

const Modal = ({ maxWidth, title, children, handleClose }) => {

    return (
        <Backdrop onClick={handleClose}>
            <ModalContainer
                maxwidth={maxWidth}
                onClick={(e) => e.stopPropagation()}
                style={{ backdropFilter: 'blur(20px)' }}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Header>
                    <span>{title}</span>
                    <Close onClick={handleClose}
                        initial={{ backgroundColor: 'rgba(255, 255, 255, 0)', opacity: 0.4 }}
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image
                            src='/images/icons/cross.svg'
                            width={16}
                            height={16}
                            alt='close'
                        />
                    </Close>
                </Header>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContainer>
        </Backdrop>
    )
}

export default Modal;