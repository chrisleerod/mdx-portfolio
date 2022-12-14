import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    margin-bottom: 32px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    margin-bottom: 16px;
`

export const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 16px;
`