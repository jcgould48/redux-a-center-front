import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Toastify from "./Component/Toastify/Toastify";

const Signup = React.lazy(() => import("./Component/Signup/Signup"));
const Navbar = React.lazy(() => import("./Component/navbar/Navbar"));
const Login = React.lazy(() => import("./Component/Login/Login"));

export default class MainRouter extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Toastify />
                <Switch>
                    <Route exact path='/sign-up' component={Signup} />
                    <Route exact path= '/login' component={Login} />
                    
                </Switch>
            </>
        )
    }
}
