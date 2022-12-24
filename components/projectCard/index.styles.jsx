import styled from "styled-components";
import { motion } from 'framer-motion';

export const Border = styled(motion.div)`
    margin-bottom: 8px;
    max-width: 800px;
    border-radius: 8px;
    padding: 1px;
`;

export const CardContainer = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    width: 100%;
    height: 64px;
    position: relative;
    cursor: pointer;
    border-radius: 8px;
    align-items: center;
    padding: 0px 16px;
    background-color: #141617;
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 16px;
`

export const Timeline = styled.p`
    width: 128px;
    font-size: 14px;
    margin-right: 16px;
    color: #CBCBD8;
    font-weight: 500;
`
export const Tag = styled.p`
    font-size: 14px;
    color: #CBCBD8;
    font-weight: 500;
`