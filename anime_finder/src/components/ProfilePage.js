import React, { Component } from 'react'

export default class ProfilePage extends Component {

  state = {
    usernameInput: '',
    passwordInput: ''
  }

  render() {
    return (
      <div className='Profile'>
      <h1>Username</h1>
      <img src="" alt="profile picture" />
      <ul>
      <li>Favs</li>
      </ul>
      <ul>
      <li>Suggested</li>
      </ul>
      <button>Search</button>
      <button>Sign Out</button>

      </div>
    )
  }
}
