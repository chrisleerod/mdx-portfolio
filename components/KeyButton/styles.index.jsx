import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.button)`
    display: flex;
    align-items: center;

    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`

export const KeyContainer = styled(motion.div)`
    position: relative;
    color: #CBCBD8;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.15);
`
export const Key = styled.span`
    z-index: 999;
`

export const OrbContainer = styled(motion.div)`
    position: absolute;
`

export const KeyBG = styled(motion.div)`
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    z-index: 20;
    background-color: #1B1D1F;
    border-radius: 4px;
`

export const Orb = styled(motion.div)`
    z-index: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    filter: blur(4px);
`

export const Label = styled(motion.span)`
    font-weight: 400;
`