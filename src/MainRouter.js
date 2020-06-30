import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Toastify from "./Components/Toastify/Toastify";
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

const Signup = React.lazy(() => import("./Components/Signup/Signup"));
const Navbar = React.lazy(() => import("./Components/Navbar/Navbar"));
const Login = React.lazy(() => import("./Components/Login/Login"));
// const RentalItems =  React.lazy(() => import ('./Components/RentalItems/RentalItems'))

export default class MainRouter extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Toastify />
                <Switch>
                    <Route exact path='/sign-up' component={Signup} />
                    <Route exact path= '/login' component={Login} />
                    {/* <PrivateRoute  exact path='/items' component={RentalItems}/> */}
                </Switch>
                <h1>Redux a Center</h1>
            </>
        )
    }
}
