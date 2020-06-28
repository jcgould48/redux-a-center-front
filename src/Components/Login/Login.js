import React, { Component } from 'react'
import validator from 'validator'
import InputGroup from '../SharedGroup/InputGroup'
import ButtonGroup from '../SharedGroup/ButtonGroup'
import {successToast, failureToast} from '../Toastify/Toast'
import {loginApi} from '../redux/actions/authUserActions'
import {checkToken} from '../'

export default class Login extends Component {
    render() {
        return (
            <div>
                Login
            </div>
        )
    }
}
