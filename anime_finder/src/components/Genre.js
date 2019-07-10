import React from 'react'

export default class Genre extends React.Component {
  state = {
    picked: true
  }

  handleSelected = (e) => {
    this.setState({ 
      picked: !this.state.picked 
    })
    console.log(this.state.picked)
    this.state.picked ? this.props.addGenre(this.props.genreData) : this.props.removeGenre(this.props.genreData)
  }
  
  render() {
    return (
      <li>
        <input type='checkbox' onChange={this.handleSelected} value={this.props.genreData.genre_type} />{this.props.genreData.genre_type}
      </li>
    )
  }
}
