import React from 'react'

export default class Genre extends React.Component {
  render() {
    return (
      <li>
        <input type='checkbox' value={this.props.genreData.genre_type}/>{this.props.genreData.genre_type}
      </li>
    )
  }
}