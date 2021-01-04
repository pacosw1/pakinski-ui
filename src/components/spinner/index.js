import styled, { keyframes } from "styled-components";

export const SpinnerIcon = () => {
  return (
    <Container>
      <Square/>
    
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 1rem;
`;

const spin360 = keyframes`
  
    from {
        width: 0%;
    }

    to {
        width: 100%;
    }

`;


const Square = styled.div`
    width: 0;
    height: 30px;
    left: 0;
    transform-origin: 0 0;
    position: absolute;
    background-color: rgba(210,120,32, .8);
    margin: 0 .05rem;
    animation: 0.2s linear ${spin360};

`

export const Spinner = styled.div`
  width: 30px;
  height: 30px;
  margin: 1rem;
  border-radius: 50%;

  animation: 0.1s linear ${spin360};
`;

