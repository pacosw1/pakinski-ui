import React from 'react'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';




//react router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Home from './home';
import Login from './login';
import NewProduct from './product';
import { Weather } from './weather';

const Root = () => {

    return <Router>

        <Switch>
          
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register"/>
            <Route path="/weather">
               <ProtectedRoute>
                   <Weather/>
               </ProtectedRoute>
            </Route>
            <Route path="/new-product">
                <NewProduct/>
            </Route>
            <Route path="/password-reset"/>
              <Route path="/">
                <ProtectedRoute>
                    <Home/>
                </ProtectedRoute>
            </Route>
        </Switch>
    </Router>

}



const ProtectedRoute = ({children}) => {

    let [cookies, setCookies] = useCookies(["auth"])

    let output = cookies.auth ? children : <Redirect to="/login"/>

    return output

}

export default Root