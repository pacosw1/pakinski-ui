import styled from "styled-components";




 const BaseInput = styled.input`
    box-sizing: border-box;
    appearance: none;
    border: none;
 `


export const TextInput = styled(BaseInput)`

    padding: 1rem .5rem;

    border: ${({error}) => `1px solid ${error ? '#f70049' : '#ddd'}`};

    margin: .2rem 0;
    height: ${({height}) => height ? height : 3}rem;
    placeholder: ${({label}) => label};
    font-family: "Roboto", sans-serif;
    outline-color: #b3b3b3;
    font-weight: 300;
    border-radius: 0.2rem;
    width: ${({fill, width}) => fill ? "100%" : width + "rem"};
    color: rgb(0, 0, 0);
    font-size: 1rem;
    padding-left: 0.8rem;

    

`