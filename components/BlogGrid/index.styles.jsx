import styled from "styled-components";

export const Container = styled.div`
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
    width: 100%;
    display: grid;
    grid-template-columns: ${props => props.single ? "1fr" : "1fr 1fr"};;
    grid-template-rows: auto;
    gap: 16px;
`