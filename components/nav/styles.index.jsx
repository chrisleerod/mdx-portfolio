import styled from "styled-components";
import Link from 'next/link';

export const Container = styled.div`
    top: 16px;
    position: fixed;
    z-index: 999;
    height: 64px;
    max-width: 640px;
    width: 100%;
    border-radius: 64px;
    background-color: rgba(19, 20, 21, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(24px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 32px;
`
export const NavItems = styled.ul`
    display: flex;
    align-items: center;

    & li {
        cursor: pointer;
        list-style-type: none;
        margin: 0;
        padding: 0;
        margin-left: 32px;
        font-weight: 400;
    }
`
export const NavItem = styled(Link)`
    font-size: 16px;
    color: white;
`

export const Separator = styled.div`
    height: 24px;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.05);
    margin: 0 32px;
`
