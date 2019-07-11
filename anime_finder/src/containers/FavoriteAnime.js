import React from 'react'
import AnimeCard from '../components/AnimeCard'

const FAVORITES = 'http://localhost:3000/favorites'

class FavoriteAnime extends React.Component {
  state = {
    index: 0,
    foundFaves: []
  }

  componentDidMount() {
    fetch(FAVORITES)
      .then(resp => resp.json())
      .then(favs => {
        let findFavs = favs.filter(fav => fav.user_id === this.props.user_id
        )
        this.setState({ foundFaves: [...this.state.foundFaves, ...findFavs] })
      })
  }


  render() {
    let animeFavs = <div>Still Loading Favorites...</div>
    let favesID = this.state.foundFaves.map(found => {
      return found.anime_id
    })
    let foundAnime = this.props.animes.filter(anime => {
      return favesID.includes(anime.id)
    })
    animeFavs = <div>{foundAnime.map(anime => <AnimeCard history={this.props.history} anime={anime} key={anime.id} showPage={this.props.showPage}/>)}</div>

    return (
      <div>
        <h4>Your Favorite Anime</h4>
        <ul className='anime-ul'>
          {animeFavs}
        </ul>
      </div>
    )

  }
}


export default FavoriteAnime
