import { useLazyQuery, useMutation } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { AUTHENTICATE } from './queries';
import { ErrorsDiv, ButtonsDiv, Header, ResizeDiv, Subtitle, Wrapper, ErrorText } from './styles';
import { useCookies } from "react-cookie";
import { SpinnerIcon } from '../../components/spinner';
import { Redirect } from 'react-router-dom';

const Login = () => {

    const [
        authenticate,
        { loading: authLoading, error: loginErrors },
      ] = useMutation(AUTHENTICATE);


    const [cookies, setCookie] = useCookies(["auth"]);

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    

    let [error, setError] = useState("")

    //noob way porque solo hay dos campos
    const onChangeUsername= (e) => {
        setUsername(e.target.value)
    }

    //noob way porque solo hay dos campos
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    //ejecuta cuando se oprime el boton
    const onLogin = () => {


        setError("")

        if (password == "" || username == "") {
            setError("Username or password can't be empty")
            return
        }

        //graphql query
        authenticate({variables: {

            input: {
                username,
                password
            }
         
        }}).then(response => {

            let {Token, Error} = response.data.authenticate


            if (Error != null) {
                setError("")
                setError(Error.Message)
                return
            }

            setError("")
            setCookie("auth", Token, {path: "/"})


        }).catch(err => {
            console.log(err)
        }) 
    }


    if (cookies.auth) return <Redirect to="/"/>


    return <Wrapper>
        <ResizeDiv>
        <SpinnerIcon/>
            <Header>Logo</Header>
            <Subtitle>Login by filling the details below</Subtitle>
        </ResizeDiv>

        <ErrorsDiv visible={error.length > 0}>
            <ErrorText visible={error.length > 0}>{error}</ErrorText>
        </ErrorsDiv>

        <ResizeDiv>
            <Input onChange={(e) => onChangeUsername(e)} value={username} label="USERNAME" width={100} maxWidth={30} />
            <Input onChange={(e) => onChangePassword(e)} value={password} label="PASSWORD" width={100} maxWidth={30} type="password"/>
        </ResizeDiv>

        <ButtonsDiv>
            <Button
                onClick={() => onLogin()}
                bg={"rgb(18, 187, 94)"}
                text={"Sign In"}
                disabled={authLoading}
                height={3.5}>
                </Button>

                <Button
                bg={"rgb(80, 90, 184)"}
                text={"Register"}
                height={3.5}>
                Hello</Button>

        </ButtonsDiv>
    </Wrapper>

}


export default Login


/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * <CenterContainer>

        <HeaderContainer>
            <Header>Estudi.a</Header>
            <Subtitle>Enter your login details below</Subtitle>
        </HeaderContainer>

        <
        <Input label="USERNAME" width={100} maxWidth={30} />
        <Input label="PASSWORD" width={100} maxWidth={30} type="password"/>
        
        <ButtonContainer>

        <Button
            bg={"rgb(18, 187, 94)"}
            text={"Sign In"}
            width={30}
            height={3.5}>
            Hello</Button>

            <Button
            bg={"rgb(80, 90, 184)"}
            text={"Register"}
            width={30}
            height={3.5}>
            Hello</Button>
        </ButtonContainer>

    </CenterContainer>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */