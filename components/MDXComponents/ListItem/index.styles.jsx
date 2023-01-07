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
    color: white;
    font-size: 16px;
    margin-bottom: 4px;
`

export const Description = styled.p`
    color: #CBCBD8;
    font-size: 14px;
`