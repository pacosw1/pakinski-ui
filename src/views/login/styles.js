import styled, { keyframes }  from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // min-height: 100vh;
    align-items: center;
    // justify-content: center;
    // align-content: center;
    padding-top: 15%;
`

const ResizeDiv = styled.div`
    display: flex;
    width: 100%;
    max-width: 30rem;
    height: 100%;
    flex-direction: column;
`

const appear = keyframes`
  
    from {
        opacity: 0%;
    }

    to {
        opacity: 100%;
    }

`;


const ErrorText = styled.p`
    animation: 0.8s linear ${appear};
    color: red;
    display: ${({visible}) => visible ? "block": "none" };
    transition: 1s;


`

const ErrorsDiv = styled(ResizeDiv)`
    display: flex;
    width: 100%;
    max-width: 30rem;
    height: 100%;
    height: 2.5rem;
    flex-direction: column;
    
`






const ButtonsDiv = styled(ResizeDiv)`

    padding-top: 2rem;

    button {
        margin: .1rem 0;
    }
`
 
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    // border: 1px solid;
    max-width: 30rem;
    width: 100%;

`

const Subtitle = styled.p`
    font-size: 1rem;
    color: grey;
    min-height: 1rem;
    margin: 0;
`
const Header = styled.h1`
    margin: 0;
    font-size: 2rem;
    letter-spacing: 1px;
    margin-bottom: .25rem;
    font-weight: 800;
`

export  {Wrapper, ErrorText, ButtonsDiv, ResizeDiv, ErrorsDiv, HeaderContainer, Header, Subtitle}