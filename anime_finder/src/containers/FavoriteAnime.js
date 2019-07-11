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
        debugger
        this.setState({foundFaves: findFavs})
      })
    }


    render() {

        let animeFavs = this.props.animes.filter(anime => {
          this.state.foundFaves.includes(anime.id)
        })
        console.log(animeFavs)

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
