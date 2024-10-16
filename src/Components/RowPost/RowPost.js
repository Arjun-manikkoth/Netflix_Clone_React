import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../axios'
import { imgUrl,API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
   
  const { isSmall,title,url } = props;
  const [movies, setMovies] = useState([])
  const [movieId, setMovieId] = useState()
  
    useEffect(() => {
      axios.get(url).then((response) => {
        setMovies(response.data.results)
      })
    },[])
    
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

  function handleMovieClick(id){
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
      console.log(res.data.results)
      if (res.data.results.length) {
        setMovieId(res.data.results[0])
      } else {
        console.log("Array is empty")
      }
   })
  }
  
  return (
    <div className='row'>
      <h2>{ title}</h2>
      <div className="posters">

        {movies.map((movie,index) => {
          return <img onClick={() =>  handleMovieClick(movie.id) } key={index} className={isSmall?'small-poster':'poster'} src={ imgUrl+movie.backdrop_path}  alt="poster" />
        })}
    
      </div>
      {movieId &&
        <Youtube videoId={movieId.key} opts={opts}></Youtube>
      }
    </div>
  )
}

export default RowPost
