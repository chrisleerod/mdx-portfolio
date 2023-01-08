import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)`
    z-index: 9999;
    width: 100%;
    margin: 0 16px;
    border-radius: 8px;
    max-width: ${(props) => props.maxwidth};
    display: flex;
    flex-direction: column;
    background-color: #141617;
    user-select: none;
    border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Header = styled.div`
    padding: 0px 16px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
        font-size: 16px;
    }
`;

export const Close = styled.div`
    display: flex;
    align-items: center;
    justify-content; center;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;