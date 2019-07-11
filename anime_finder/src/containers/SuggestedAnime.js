import React from 'react'
import AnimeCard from '../components/AnimeCard'

class SuggestedAnime extends React.Component {
  state = {
    index: Math.floor(Math.random() * 1001),
    dance: false
  }

  handleLess = () => {
    this.setState({ index: this.state.index - 5 })
  }

  handleMore = () => {
    this.setState({ index: this.state.index + 5 })
  }

  handleShuffle = () => {
    this.setState({index: Math.floor(Math.random() * 1001)})
  }

  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  dancePrettyBoy = () => {
    this.setState({dance: !this.state.dance})
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
        <button onClick={this.handleShuffle}>Mix it Up!</button>
        <button onClick={this.dancePrettyBoy}>🕺🏻</button>
        <button onClick={this.handleMore}>➡️</button>
        {this.state.dance ? this.shuffle(spitOutAnimes.slice(this.state.index, (this.state.index + 5))) : spitOutAnimes.slice(this.state.index, (this.state.index + 5))}
      </div>
    )
  }
}

export default SuggestedAnime
