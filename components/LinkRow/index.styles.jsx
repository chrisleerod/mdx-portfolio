import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 0px 16px;
`

export const LinkContainer = styled(motion.a)`
    cursor: pointer;
    font-size: 14px;
`