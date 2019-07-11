import React from 'react'
import AnimeCard from './AnimeCard';
// import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

export default class SearchPage extends React.Component {
  state = {
    input: '',
    searchedAnimes: []
  }

  handleSearchChange = (e) => {
    this.setState({input: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let searched = this.props.animes.map(anime => anime.title.includes(this.state.input))
    this.setState({searchedAnimes: [...searched]})
  }
   
  render() {
    let found = this.state.searchedAnimes.map(anime => {
      return (
        <AnimeCard history={this.props.history} anime={anime} key={anime.id} showPage={this.props.showPage} />
      )
    })
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.input} onChange={this.handleSearchChange}/>
          <input type='submit' name='Search' />
        </form>
        <ul>
          {found}
        </ul>
      </div>
    )
  }
}