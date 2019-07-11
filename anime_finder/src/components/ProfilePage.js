import React, { Component } from 'react'
import SuggestedAnime from '../containers/SuggestedAnime'
import FavoriteAnime from '../containers/FavoriteAnime'

const ANIGENSAPI = 'http://localhost:3000/anime-genres'


export default class ProfilePage extends Component {

  state = {
    usernameInput: '',
    passwordInput: '',
    filteredAnigens: [],
    favoriteAnime: [],
    currentUser: {}
  }

  componentDidMount() {
    fetch(ANIGENSAPI)
      .then(resp => resp.json())
      .then(anigensData => {

        let filterArr = anigensData.filter(anigen => this.props.genrePreferences.includes(anigen.genre_id.toString()))
        this.setState({ filteredAnigens: filterArr })
      })
  }


  render() {
    if (localStorage.token) {
      fetch('http://localhost:3000/profile', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(res => res.json())
        .then(profileInfo => {
          this.setState({
            currentUser: profileInfo
          })
        })
    }

    return (
      <div className='Profile'>
        <h1>{this.props.username}</h1>
        <img src={this.props.profilePic} alt="profile pic" />
        {this.props.user_id ?
          <FavoriteAnime user_id={this.props.user_id} animes={this.props.anime} favorites={this.state.favoriteAnime} />
          :
          null
        }
        <SuggestedAnime animes={this.props.anime} history={this.props.history} filteredAnigens={this.state.filteredAnigens} showPage={this.props.showPage} />
        <button>Search</button>
        <button>Sign Out</button>

      </div>
    )
  }
}
