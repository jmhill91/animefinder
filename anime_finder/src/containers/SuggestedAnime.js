import React from 'react'
import AnimeCard from '../components/AnimeCard'

class SuggestedAnime extends React.Component {
  state = {
    index: 0
  }

  handleLess = () => {
    this.setState({ index: this.state.index - 5 })
  }

  handleMore = () => {
    this.setState({ index: this.state.index + 5 })
  }

  render() {
    let ids = [...new Set(this.props.filteredAnigens.map(ani_gen => ani_gen.anime_id))]
    let animeSuggestions = this.props.animes.filter(anime => ids.includes(anime.id))
    const spitOutAnimes = animeSuggestions.map(anime => {
      return (
        <AnimeCard history={this.props.history} anime={anime} key={anime.id} showPage={this.props.showPage} />
      )
    })

    return (
      <div>
        <h4>Suggestions based on your Genres</h4>
        <button onClick={this.handleLess}>⬅️</button>
        <button onClick={this.handleMore}>➡️</button>
        {spitOutAnimes.slice(this.state.index, (this.state.index + 5))}
      </div>
    )
  }
}

export default SuggestedAnime
