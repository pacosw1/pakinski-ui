import React from 'react'


//react router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";

const Root = () => {

    return <Router>

        <Switch>
            <Route path="/login"/>
            <Route path="/register"/>
            <Route path="/profile"/>
            <Route path="/password-reset"/>
        </Switch>
    </Router>

}

export default Root