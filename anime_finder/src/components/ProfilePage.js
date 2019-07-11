import React, { Component } from 'react'
import SuggestedAnime from '../containers/SuggestedAnime'
import FavoriteAnime from '../containers/FavoriteAnime'
import SearchPage from '../components/SearchPage'
import { Route } from 'react-router-dom';

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


  handleSignOut = () => {
    localStorage.clear()
    this.props.history.push('/')
    this.setState({
      usernameInput: '',
      passwordInput: '',
      filteredAnigens: [],
      favoriteAnime: [],
      username: '',
      profilePic: '',
      genrePreferences: [],
      user_id: ''
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
          let genreIdList = profileInfo.data.relationships.genres.data.map(genre => {
            return genre.id
          })
          this.setState({
            username: profileInfo.data.attributes.username, profilePic: profileInfo.data.attributes.profile_picture, genrePreferences: genreIdList, user_id: parseInt(profileInfo.data.id)
          })
          this.forceUpdate()
        })
    }

    return (
      <div className='Profile'>
        <h1>{this.state.username}</h1>
        <img src={this.state.profilePic} alt="profile pic" />
        {this.state.user_id ?
          <FavoriteAnime user_id={this.state.user_id} animes={this.props.anime} favorites={this.state.favoriteAnime} history={this.props.history} showPage={this.props.showPage}/>
          :
          null
        }
        <SuggestedAnime animes={this.props.anime} history={this.props.history} filteredAnigens={this.state.filteredAnigens} showPage={this.props.showPage} />
        <button onClick={this.handleSignOut}>Sign Out</button>
        <button><Route path='/search' render={(routerProps) => <SearchPage {...routerProps} animes={this.props.anime} showPage={this.props.showPage}/> }/> Search</button>

      </div>
    )
  }
}
