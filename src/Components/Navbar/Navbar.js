import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../redux/actions/authUserActions'
import AuthNavLink from './AuthNavLink'
import UnAuthNavLink from './UnAuthNavLink'
import './Navbar.css'

export class Navbar extends Component {
    render() {
        const { isAuthenticated, user} = this.props.authUser
        return (
            <header>
                {/* <NavLink
                    to='/'
                    className='navbar-home'
                    activeStyle={{ fontWeight: 'bold'}}
                    activeClassName='selected'
                    exact
                >   
                    Home
                </NavLink> */}
                <nav>
                    {user && isAuthenticated ? (
                        <AuthNavLink
                            {...user}
                            {...isAuthenticated}
                            logout={this.props.logout}
                        />
                    ): (
                        <UnAuthNavLink />
                    )}
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.authUser,
    }
}


export default connect(mapStateToProps, { logout })(Navbar)
