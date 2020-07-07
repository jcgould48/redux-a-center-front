import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {}

export class Profile extends Component {
    render() {
        {console.log("test123", this.props.authUser)}
        const { user} = this.props.authUser
        // console.log(authUser)
        return (
            <div><h1>TEST</h1>
                <h1>Hello {user.username}</h1>
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
