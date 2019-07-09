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

const GENRESAPI = 'http://localhost:3000/genres'

class App extends React.Component {

  state = {
    userDetails: null,
    genres: []
  }

  componentDidMount() {
    // debugger
    fetch(GENRESAPI)
      .then(resp => resp.json())
      .then(genres => {
        this.setState({genres: genres})
      })
      if (localStorage.token) {
        fetch('http://localhost:3000/profile', {
          headers: {
            Authorization: localStorage.token
          }
        })
        .then(res => res.json())
        .then(profileInfo => this.setState({ username: profileInfo.username }))
      }
      
  }

  handleLoginFormSubmit = (e, data) => {
    e.preventDefault()
    
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
            <br/>
            <br/>
            <Route path="/login" render={(routerProps) => <LoginPage {...routerProps} handleLoginFormSubmit={this.handleLoginFormSubmit} />} />
            <Route path="/signup" render={(routerProps) => <SignupPage {...routerProps} genresList={this.state.genres} />} />
          </div>
          <div>
            <Route path="/profile" component={ProfilePage} />
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
