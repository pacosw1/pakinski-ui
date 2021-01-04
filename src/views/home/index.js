import React from 'react';
import { useCookies } from 'react-cookie';
import { Button } from '../../components/button/button';





const Home = props => {


    let [cookies, _, removeCookie] = useCookies(["auth"])


   return <>

        <h1>Welcome </h1>
        <Button
                onClick={() => {
                    removeCookie("auth")
                }}
                bg={"rgb(230, 10, 30)"}
                text={"Sign out"}
                height={4.5}>
                </Button>

   </>









}


export default Home