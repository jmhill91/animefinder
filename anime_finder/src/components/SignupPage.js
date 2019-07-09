import React, { Component } from 'react'
import GenreList from '../containers/GenreList'

export default class SignupPage extends Component {

  state = {
    username: '',
    password: '',
    profile_picture: '',
    genreList: []
  }

  componentDidMount() {
    this.setState({genreList: this.props.genresList})
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(parsedResponse => {
        localStorage.setItem('token', parsedResponse.token) 
        this.props.history.push('/')
      })
  }


  render() {
    return (
      <div className='signup'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' placeholder='username' onChange={this.handleOnChange}/>
          <br/>
          <input type='password' name='password' placeholder='password' onChange={this.handleOnChange}/>
          <br/>
          <input type='text' name='profile_picture' placeholder='URL to profile picture' onChange={this.handleOnChange}/>
          <br/>
          <GenreList genres={this.state.genreList}/>
          <br/>
          <input type='submit' value='Signup' />
        </form>
      </div>
    )
  }
}