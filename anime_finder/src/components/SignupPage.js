import React, { Component } from 'react'

export default class SignupPage extends Component {

  state = {
    usernameInput: '',
    passwordInput: ''
  }

  render() {
    return (
      <div className='signup'>
        <form>
          <input type='text' name='username' value={this.state.usernameInput} />
          <br/>
          <input type='password' name='password' value={this.state.passwordInput} />
          <br/>
          <input type='submit' value='Signup' />
        </form>
      </div>
    )
  }
}