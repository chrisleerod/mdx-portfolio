import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.a)`
    padding: 16px;
    height: 96px;
    display: flex;
    width: 100%;
    align-items: center;
    border-radius: 8px;
`

export const TextContainer = styled.div`
    margin-left: 32px;
`

export const Title = styled.p`
    font-weight: 500;
    color: white;
    font-size: 14px;
`

export const Description = styled.p`
    color: #85858E;
    font-size: 14px;
    line-height: 150%;
`