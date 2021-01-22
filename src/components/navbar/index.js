import styled from "styled-components"
import React from 'react';




const Nav = styled.div`

    box-sizing: border-box;
    width: 100%;
    height: 4.5rem;
    border-bottom: 1px solid #dddd;

    display: flex;
    padding: 0 1rem;
    justify-content: space-between;

`
export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({left}) => left ? "flex-start" : "flex-end"};
    

    > * {
        
        padding-right: ${({spacing, left}) => left ? spacing+"rem" : "unset"} !important;
        padding-left: ${({spacing, left}) => !left ? spacing+"rem" : "unset"} !important;


    }
    
`


export const Navbar = ({children, hidden}) => {

    if (hidden) return null;

    return <Nav hidden={hidden}>{children}</Nav>
}