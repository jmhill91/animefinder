import React, { Component } from 'react'
import GenreList from '../containers/GenreList'

export default class SignupPage extends Component {

  state = {
    username: '',
    password: '',
    profilePicture: '',
    genreList: []
  }

  componentDidMount() {
    this.setState({genreList: this.props.genresList})
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleProfilePictureChange = (e) => {
    this.setState({profilePicture: e.target.value})
  }

  render() {
    return (
      <div className='signup'>
        <form>
          <input type='text' name='username' placeholder='username' onChange={this.handleOnChange}/>
          <br/>
          <input type='password' name='password' placeholder='password' onChange={this.handleOnChange}/>
          <br/>
          <input type='text' name='profile-picture' placeholder='URL to profile picture' value={this.state.profilePicture} onChange={this.handleProfilePictureChange}/>
          <br/>
          <GenreList genres={this.state.genreList}/>
          <br/>
          <input type='submit' value='Signup' />
        </form>
      </div>
    )
  }
}