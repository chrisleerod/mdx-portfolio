import styled from "styled-components";
import { motion } from 'framer-motion';

export const Border = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    border-radius: 8px;
    padding: 1px;
    cursor: pointer;
`;

export const CardContainer = styled(motion.div)`
    flex: 1;
    overflow: hidden;
    display: flex;
    min-height: 80px;
    position: relative;
    cursor: pointer;
    border-radius: 7px 7px 0px 0px;
    padding: 16px;
    background-color: #141617;
`

export const TextContainer = styled.div`
    overflow: hidden;
`

export const Title = styled.p`
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 8px;
`

export const Description = styled.p`
    font-size: 14px;
    color: #CBCBD8;
    font-weight: 400;
`
export const Footer = styled.div`
    font-size: 14px;
    background-color: #141617;
    color: #85858E;
    font-weight: 400;
    font-size: 14px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    border-radius: 0px 0px 7px 7px;
`