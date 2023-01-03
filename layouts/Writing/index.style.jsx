import styled from "styled-components";

export const Container = styled.div`
    max-width: 720px;
    margin: 0 auto;
    padding-top: 144px;
    width: 100%;
`

export const Header = styled.div`
    margin-bottom: 64px;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 16px;
    margin-bottom: 32px;
`

export const Description = styled.p`
    font-size: 16px;
    color: #CBCBD8;
`

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 8px;
`