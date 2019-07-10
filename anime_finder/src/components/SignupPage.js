import React, { Component } from 'react'
import GenreList from '../containers/GenreList'

export default class SignupPage extends Component {

  state = {
    username: '',
    password: '',
    profile_picture: '',
    genreList: [],
    genre_attributes: []
  }

  componentDidMount() {
    this.setState({genreList: this.props.genresList})
  }

  handleAddGenre = (genre) => {
    this.setState({genre_attributes: [...this.state.genre_attributes, genre]})
  }

  handleRemoveGenre = (genre) => {
    let filterGenreList = this.state.genre_attributes.filter(currentGenre => currentGenre !== genre)
    this.setState({ genre_attributes: filterGenreList})
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
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        profile_picture: this.state.profile_picture,
        genre_attributes: this.state.genre_attributes,
      })
    })
      .then(res => res.json())
      .then(parsedResponse => {
        localStorage.setItem('token', parsedResponse.token)
        this.props.history.push('/profile')
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
          <GenreList addGenre={this.handleAddGenre} removeGenre={this.handleRemoveGenre} genres={this.state.genreList}/>
          <br/>
          <input type='submit' value='Signup' />
        </form>
      </div>
    )
  }
}
