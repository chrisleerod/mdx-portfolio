import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)`
    position: relative;
    background-color: #141617;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
    margin: 0 16px;
    border-radius: 8px;
    max-width: ${(props) => props.maxwidth};
`;

export const Header = styled.div`
    width: 100%;
    padding: 0px 8px 0px 16px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    span {
        font-size: 16px;
    }
`;

export const Close = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    border-radius: 4px; 
    cursor: pointer;
`;