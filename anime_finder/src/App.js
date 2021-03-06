import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'

import ProfilePage from './components/ProfilePage'
import AnimeShowPage from './components/AnimeShowPage';

const GENRESAPI = 'http://localhost:3000/genres'
const ANIMEAPI = 'http://localhost:3000/animes'

class App extends React.Component {

  state = {
    username: '',
    genres: [],
    profilePic: '',
    animes: [],
    genrePreferences: [],
    currentAnime: {},
    user_id: 0
  }

  componentDidMount() {
    fetch(GENRESAPI)
      .then(resp => resp.json())
      .then(genres => {
        this.setState({ genres: genres })
      })

    fetch(ANIMEAPI)
      .then(resp => resp.json())
      .then(animes => {
        this.setState({ animes: animes })
      })

    if (localStorage.token) {
      fetch('http://localhost:3000/profile', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(res => res.json())
        .then(profileInfo => {
          let genreIdList = profileInfo.data.relationships.genres.data.map(genre => {
            return genre.id
          })
          this.setState({
            username: profileInfo.data.attributes.username, profilePic: profileInfo.data.attributes.profile_picture, genrePreferences: genreIdList, user_id: parseInt(profileInfo.data.id)
          })
        })
    }
  }

  handleAnimeShowPage = (event, data) => {
    console.log(data)
    this.setState({ currentAnime: data })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1>WELCOME TO ANIME FINDER!</h1>
            <h3>Please login or signup to continue.</h3>
            <button >
              <NavLink to="/signup" >Sign Up Now!</NavLink>
            </button>
            <button>
              <NavLink to="/login" >Login Now!</NavLink>
            </button>
            <br />
            <br />
            <Route path="/login" render={(routerProps) => <LoginPage {...routerProps} handleLoginFormSubmit={this.handleLoginFormSubmit} />} />
            <Route path="/signup" render={(routerProps) => <SignupPage {...routerProps} genresList={this.state.genres} />} />
          </div>
          <div>
            <Route path="/profile" render={(routerProps) => <ProfilePage {...routerProps} username={this.state.username}
            profilePic={this.state.profilePic} genrePreferences={this.state.genrePreferences}
            anime={this.state.animes}
            showPage={this.handleAnimeShowPage}
            user_id={this.state.user_id}/>} />


            <Route path={'/anime/:id'} render={(routerProps) => <AnimeShowPage {...routerProps} anime={this.state.currentAnime} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
