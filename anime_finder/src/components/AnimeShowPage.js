import React from 'react'
import { Link } from 'react-router-dom';

const FAVORITESAPI = 'http://localhost:3000/favorites'

export default class AnimeShowPage extends React.Component {

  handleClick = (e) => {
    fetch(FAVORITESAPI, {
      method: 'POST',
      headers: {
        'Authorization': localStorage.token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        anime_id: this.props.anime.id
      })
    })
  }

  render() {
    return (
      <div>
        <Link to={`/profile`}>Profile</Link>
        <Link to={`/search`}>Search</Link>

        <h1>Title: {this.props.anime.title}</h1>
        <img src={this.props.anime.image} alt='not found' />
        <div>Average Rating: {this.props.anime.rating}</div>
        <div>TV Rating: {this.props.anime.tv_rating}</div>
        <div>Description: {this.props.anime.description}</div>
        <div>Episode Count: {this.props.anime.episode_count}</div>
        <div>Start Date: {this.props.anime.start_date}</div>
        <div>End Date: {this.props.anime.end_date}</div>
        <a href={this.props.anime.watch_link}>Watch Link</a>

        <button onClick={this.handleClick}>Favorite</button>
      </div>
    )
  }
}