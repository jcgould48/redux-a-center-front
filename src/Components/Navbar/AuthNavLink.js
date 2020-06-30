import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
// pull in create item

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
                <li>
                    <NavLink
                        to='create-items'
                        className='navbar'
                        activeStyle={{fontWeight: 'bold'}}
                        activeClassName='selected'
                        onClick={() => this.props.createItem()}
                    >
                        Create Rental
                    </NavLink>
                </li>
            </ul>
        )
    }
}



