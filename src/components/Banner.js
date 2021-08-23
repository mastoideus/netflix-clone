import React, {useEffect, useState} from 'react' 
import './Banner.css'
import requests from '../requests'
import axios from '../axios'


const Banner=(props)=>{
    const[movie, setMovie]=useState([])

    useEffect(()=>{
        const fetchMovie=async ()=>{
            const response= await axios.get(requests.fetchNetflixOriginal)
            setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
        }

        fetchMovie()
       

    },[])

     console.log(movie)
    
    return (
        <header 
        style={{
            backgroundSize: 'cover',
            backgroundPosition:'center center',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,


        }}
        className='banner'>
            <div className='banner__content'>
              <h1>{movie?.title || movie?.name}</h1>
              <div className='banner__buttons'>
               <button>Play</button>
               <button>My List</button>
              </div>
              <h2 className='banner__description'>{movie?.overview}</h2>
              
            </div>
            <div className='banner--fade'></div>
        </header>
    )
}

export default Banner 