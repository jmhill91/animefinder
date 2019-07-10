import React from 'react'

export default class AnimeShowPage extends React.Component {
  render() {
    return (
      <div>
        <button>Profile</button>
        <button>Search</button>

        <h1>Title: {this.props.anime.title}</h1>
        <img src={this.props.anime.image} alt='not found' />
        <div>Average Rating: {this.props.anime.rating}</div>
        <div>TV Rating: {this.props.anime.tv_rating}</div>
        <div>Description: {this.props.anime.description}</div>
        <div>Episode Count: {this.props.anime.episode_count}</div>
        <div>Start Date: {this.props.anime.start_date}</div>
        <div>End Date: {this.props.anime.end_date}</div>
        <a href={this.props.anime.watch_link}>Watch Link</a>

        <button>Favorite</button>
      </div>
    )
  }
}