import React from 'react'
import Genre from '../components/Genre'

const GenreList = (props) => {
  const genreItem = props.genres.map(genre => <Genre genreData={genre} key={`genre_${genre.id}`} addGenre={props.addGenre} removeGenre={props.removeGenre}/>)

  return (
    <div>
      <h4>Genre List:</h4>
      <ul className='genres-ul'>
        {genreItem}
      </ul>
    </div>
  )
}

export default GenreList
