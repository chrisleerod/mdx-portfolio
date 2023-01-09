import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.1);
    height: 40px;
    overflow: hidden;
`

export const Email = styled.div`
    background-color: #141617;
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const CopyButton = styled(motion.button)`
    font-size: 14px;
    color: white;
    height: 40px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0px 16px;
    border-left: 1px solid rgba(255,255,255,0.1);
`