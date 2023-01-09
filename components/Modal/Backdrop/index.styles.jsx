import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    transform-origin: center;
`;