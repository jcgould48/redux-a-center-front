import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {}

export class Profile extends Component {
    render() {
        const { user} = this.props.authUser
        // console.log(authUser)
        return (
            <div>
                <h1>Hello {user}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.authUser,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
