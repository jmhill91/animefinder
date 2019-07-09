import React from 'react'
import Genre from '../components/Genre'

const GenreList = (props) => {
  debugger
  const genreItem = () => {
    props.genres.map(genre => {
      debugger
      return <Genre genreData={genre}/>
    })
  }

  return (
    <div>
      <h4>Genre List:</h4>
      <ul>
        {genreItem}
      </ul>
    </div>
  )
}

export default GenreList