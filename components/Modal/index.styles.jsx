import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)`
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: #181A1C;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 16px;
    border-radius: 8px;
    overflow: hidden;
    max-width: ${(props) => props.maxwidth};
`;

export const Header = styled.div`
    width: 100%;
    padding: 0px 8px 0px 16px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
        font-size: 16px;
    }
`;

export const ModalBody = styled.div`
    padding: 16px;
    width: 100%;
`

export const Close = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    border-radius: 4px; 
    cursor: pointer;
`;