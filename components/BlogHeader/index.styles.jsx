import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
    display: flex;
    position: relative;
`

export const BackCol = styled.div`
    max-width: 172px;
    width: 100%;
    margin-left: -172px;
    position: sticky;
    top: 160px;

    @media (max-width: 1024px) {
        height: 32px;
        display: flex;
        align-items: center;
        margin-bottom: 32px;
        margin-left: 0;
        position: relative;
        top: 0;
      }
`

export const BackButton = styled(motion.a)`
    display: inline-flex;
    align-items: center;
    font-size: 14px;

    & span {
        margin-left: 8px;
    }
`

export const HeaderContainer = styled.div`
    margin-bottom: 64px;
`

export const TitleDate = styled.div`
    margin-bottom: 16px;
`

export const Title = styled.h1`
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 600;
`

export const Date = styled.p`
    font-size: 14px;
    color: #85858E;
`

export const Description = styled.p`
    font-size: 16px;
    color: white;
`