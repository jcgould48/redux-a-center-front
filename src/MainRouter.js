import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Toastify from "./Components/Toastify/Toastify";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = React.lazy(() => import("./Components/Signup/Signup"));
const Navbar = React.lazy(() => import("./Components/Navbar/Navbar"));
const Login = React.lazy(() => import("./Components/Login/Login"));
const Landing = React.lazy(() => import("./Components/Landing/Landing"));
// const Home = React.lazy(() => import('./Components/Home/Home'))
const RentalItems =  React.lazy(() => import ('./Components/RentalItems/GetAllItems/GetAllItems'))
const CreateItem =  React.lazy(() => import ('./Components/RentalItems/CreateItem/CreateItem'))

export default class MainRouter extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Toastify />
                <Switch>
                    <Route exact path='/sign-up' component={Signup} />
                    <Route exact path= '/login' component={Login} />
                    {/* <Route exact path='/home' component={Home} /> */}
                    <PrivateRoute  exact path='/home' component={RentalItems}/>
                    <PrivateRoute  exact path='/create-item' component={CreateItem}/>
                    <Route exact path= '/' component={Landing} />
                </Switch>
                {/* <h1>Redux a Center</h1> */}
            </>
        )
    }
}
