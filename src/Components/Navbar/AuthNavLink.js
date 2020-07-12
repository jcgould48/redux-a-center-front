import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
// pull in create item

export default class AuthNavLink extends Component {
    render() {
        return (
            <ul className="nav__ul">
                <li>
                    <NavLink
                        to='/user-profile'
                        className='navbar'
                        activeStyle={{ fontWeight: 'bold'}}
                        activeClassName='selected'
                    >
                        Hello {this.props.username}
                    </NavLink>
                </li>
                
                <li className="left-link">
                    <NavLink
                        to='/home'
                        className='navbar'
                        activeStyle={{fontWeight: 'bold'}}
                        activeClassName='selected'
                        
                    >
                        Main Paige
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/create-item'
                        className='navbar'
                        activeStyle={{fontWeight: 'bold'}}
                        activeClassName='selected'
                        // onClick={() => this.props.createItem()}
                    >
                        Create Rental
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/login'
                        className='navbar'
                        activeStyle={{ fontWeight: 'bold'}}
                        activeClassName='selected'
                        onClick={() => this.props.logout()}
                    >
                        Log out
                       
                    </NavLink>
                </li>
                <li>
                    {/* <img src="/images/LogoMakr_8rMMH9.png"/> */}
                </li>
               
            </ul>
        )
    }
}



