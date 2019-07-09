import React, { Component } from 'react'

export default class LoginPage extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(parsRes => {
      localStorage.setItem('token', parsRes.token)
      this.props.history.push('/profile')
    })
  }

  handleLoginInputOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' placeholder='username' onChange={this.handleLoginInputOnChange}/>
          <br/>
          <input type='password' name='password' placeholder='password' onChange={this.handleLoginInputOnChange}/>
          <br/>
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}
