import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default class AuthNavLink extends Component {
    render() {
        return (
            <ul>
                <li>
                    <NavLink
                        to='/user-profile'
                        className='navbar'
                        activeStyle={{ fontWeight: 'bold'}}
                        activeClassName='selected'
                    >
                        {this.props.username}
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
                        {this.props.username}
                    </NavLink>
                </li>
            </ul>
        )
    }
}

export default AuthNavLink

