import React from 'react'

export default class Genre extends React.Component {
  debugger
  render() {
    return (
      <div>
        {this.props.genreData.genre_type}
      </div>
    )
  }
}