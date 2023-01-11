import styled from "styled-components";

export const Container = styled.div`
    max-width: 640px;
    margin: 0 auto;
    padding: 208px 0px 128px 0px;
    width: 100%;
`

export const Header = styled.div`
    margin-bottom: 64px;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 16px;
    margin-bottom: 32px;
    font-weight: 500;
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