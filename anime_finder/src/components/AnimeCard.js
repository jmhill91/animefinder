import React from 'react'
import { Link } from 'react-router-dom';

export default class AnimeCard extends React.Component {
  handleClick = (e) => {
    this.props.showPage(e, this.props.anime)
    this.props.history.push(`/anime/${this.props.anime.id}`)
  }
  render() {
    console.log(this.props)
    return (
      <div onClick={this.handleClick}>
        <h1>{this.props.anime.title}</h1>
        <img src={this.props.anime.image} alt={this.props.anime.title} />
      </div>
    )
  }
}
