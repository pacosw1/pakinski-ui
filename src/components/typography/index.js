import styled from "styled-components";




 const BaseH1 = styled.h1`
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    margin: 0;
    padding: 0;
`



export const Header = styled(BaseH1)`

    font-size: 2rem;
    letter-spacing: 0.9px;
    font-weight: 800;
    color: #000;
    padding: 0.5rem 0;

`

export const SubHeader = styled(BaseH1)`

    font-size: 1.7rem;
    letter-spacing: 1.1px;
    color: #000;
    padding: 0.5rem 0;

`

export const Subtitle = styled(BaseH1)`

    font-size: 1.1rem;
    letter-spacing: 1.1px;
    font-weight: 500;
    color: #515151;
    padding-bottom: .5rem;

`

export const Text = styled(BaseH1)`

    font-size: .92rem;
    letter-spacing: 1px;
    font-weight: 500;
    color: #121212;

`