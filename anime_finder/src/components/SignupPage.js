import React, { Component } from 'react'

export default class SignupPage extends Component {

  state = {
    username: '',
    password: '',
    profilePicture: '',
    genreList: []
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleProfilePictureChange = (e) => {
    this.setState({profilePicture: e.target.value})
  }

  render() {
    // <input type='checkbox' name='' /> Test
    return (
      <div className='signup'>
        <form>
          <input type='text' name='username' placeholder='username' onChange={this.handleOnChange}/>
          <br/>
          <input type='password' name='password' placeholder='password' onChange={this.handleOnChange}/>
          <br/>
          <input type='text' name='profile-picture' placeholder='URL to profile picture' value={this.state.profilePicture} onChange={this.handleProfilePictureChange}/>
          <br/>
          <input type='checkbox' name='' /> Test
          <br/>
          <input type='submit' value='Signup' />
        </form>
      </div>
    )
  }
}