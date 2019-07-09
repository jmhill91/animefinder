import React, { Component } from 'react'

export default class LoginPage extends Component {

  state = {
    usernameInput: '',
    passwordInput: ''
  }

  render() {
    return (
      <div className='login'>
        <form>
          <input type='text' name='username' placeholder='username' value={this.state.usernameInput} />
          <br/>
          <input type='password' name='password' placeholder='password' value={this.state.passwordInput} />
          <br/>
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}