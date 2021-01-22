import styled from "styled-components"
import {menu, primary as prim, secondary} from "../colors/index"




const BaseButton = styled.button`

    box-sizing: border-box;
    appearance: none;
    outline: none;
    border: none;
    border-radius: .25rem;
    
    margin: ${({vMargin, hMargin}) => vMargin + "rem " + hMargin + "rem"};
    cursor: pointer;

    letter-spacing: 1.2px;

    :focus {
        border-width: 1.2px;
    }

    height: ${({height}) => height ? height+'rem' : "3rem"};


    :hover {
        filter: brightness(0.98);
    }

    



`


export const MenuButton = styled(BaseButton)`

    width: ${({fill}) => fill ? "100%": "9rem"};
    padding: .8rem;
    color:  #000;
    font-weight: 600;
    letter-spacing: 0.7px;
    font-size: .8rem;
    border: 1px solid #b2b2b2;

    background-color: #fff;





`

export const Button = styled(BaseButton)`
  
    width: ${({fill}) => fill ? "100%": "12rem"};
    font-size: .9rem;
    

    opacity: ${({disabled}) => disabled ? 0.5: 1};
    background-color: ${({primary}) => primary ? prim: secondary};
    color: ${({dark}) => dark ? "#1c1b1c": "#fff"};

    font-weight: 400;

  


`

