import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Signup extends Component {
    state = {
        canSubmit: true,
        formSetting: {
            username: {
                name: "username",
                placeholder: "Enter username",
                value: "",
                error: {
                    message: "",
                    noError: null,
                },
            },
            email: {
                name: "email",
                placeholder: "Enter email",
                value: "",
                error: {
                    message: "",
                    noError: null,
                },
            },
            password: {
                name: "password",
                placeholder: "Enter password",
                value: "",
                error: {
                    message: "",
                    noError: null,
                },
            },
        },
        validate: {
            usernameError: {
                noError: null,
                message: "",
            },
            emailError: {
                noError: null,
                message: "",
            },
            passwordError: {
                noError: null,
                message: "",
            },
        },
    };
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
