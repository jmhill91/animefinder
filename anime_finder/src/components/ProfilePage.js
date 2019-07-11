import React, { Component } from 'react'
import SuggestedAnime from '../containers/SuggestedAnime'
import FavoriteAnime from '../containers/FavoriteAnime'

const ANIGENSAPI = 'http://localhost:3000/anime-genres'


export default class ProfilePage extends Component {

  state = {
    usernameInput: '',
    passwordInput: '',
    filteredAnigens: [],
    favoriteAnime: []
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
