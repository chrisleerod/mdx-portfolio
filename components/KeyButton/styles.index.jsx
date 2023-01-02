import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.Button)`
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
    border-radius: 4px;
    margin-right: 8px;
    background-color: #1B1D1F;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    overflow: hidden;
`
export const Key = styled.span`
    z-index: 999;
`

export const OrbContainer = styled(motion.div)`
    position: absolute;
    top: 0%;
    left: 20%;
    transform: translate(-50%, -50%);
`

export const Orb = styled(motion.div)`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    filter: blur(10px);
`

export const Label = styled.span`
    
`