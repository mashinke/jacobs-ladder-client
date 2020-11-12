import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiHelpers from '../apiHelpers';
import TokenService from '../Services/TokenService'
import UserFormComponent from '../UserFormComponent/UserFormComponent';

export default class LoginMain extends UserFormComponent {
  state = {
    error: null,
    email: {
      value: '',
      touched: false
    },
    pass: {
      value: '',
      touched: false
    }
  }

  buttonText = 'Log in'

  formName = 'Login'

  formFields = [
    {
      id: 'email',
      validator: this.validateEmail,
      validationMessage: 'Valid email required',
      label: 'Email',
      validateTouch: true,
      type:'text'
    },
    {
      id: 'pass',
      validator: this.validatePassword,
      validationMessage: 'Password must be at least 8 characters',
      label: 'Password',
      validateTouch: true,
      type: 'password'
    }
  ]

  handleFormSubmit = async () => {
    const { token }= await apiHelpers.postLogin(
      this.state.email.value,
      this.state.pass.value
    )
    TokenService.saveAuthToken(token);
  }

  render() {
    return (
      <main>
        {this.renderForm()}
        <p><Link to='/signup'>Sign Up</Link></p>
      </main>
    )
  }
}