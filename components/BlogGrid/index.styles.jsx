import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    margin-bottom: 16px;
`

export const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
`

export const Grid = styled.div`
    display: flex;
    flex-direction: ${props => props.single ? "column" : "row"};
    gap: 16px;
`