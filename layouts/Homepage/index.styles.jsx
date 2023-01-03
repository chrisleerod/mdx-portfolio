import styled from "styled-components";

export const Container = styled.div`
    max-width: 720px;
    margin: 0 auto;
    padding-top: 144px;
    width: 100%;
`

export const IntroContainer = styled.div`
    margin-bottom: 64px;
    width: 100%;
`;

export const BodyContainer = styled.div`
    margin: 64px 0px;
`

export const NameContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
`

export const Name = styled.h1`
    font-size: 16px;
    font-weight: 500;
`
export const OrangeCircle = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 92, 0, 1);
    margin: 0 8px;
`

export const Time = styled.span`
    font-size: 16px;
    font-weight: 500;
`

export const IntroParagraph = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #CBCBD8;

    & a {
        text-decoration: underline;
    }
`