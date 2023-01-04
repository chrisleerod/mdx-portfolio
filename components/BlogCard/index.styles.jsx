import styled from "styled-components";
import { motion } from 'framer-motion';

export const Border = styled(motion.div)`
    width: 100%;
    border-radius: 8px;
    padding: 1px;
    cursor: pointer;
`;

export const CardContainer = styled(motion.div)`
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    min-height: 80px;
    position: relative;
    cursor: pointer;
    border-radius: 7px 7px 0px 0px;
    align-items: center;
    padding: 16px;
    background-color: #141617;
`

export const TextContainer = styled.div`
    overflow: hidden;
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Description = styled.p`
    max-width: ${props => props.noWrap ? "100%" : "280px"};
    font-size: 14px;
    color: #CBCBD8;
    font-weight: 400;
    white-space:  ${props => props.noWrap ? "unset" : "nowrap"};
    overflow: hidden;
    text-overflow: ellipsis;
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