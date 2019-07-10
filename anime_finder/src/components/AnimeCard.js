import React from 'react'

export default class AnimeCard extends React.Component {
  handleClick = (e) => {
    this.props.showPage(e , this.props.anime)
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
