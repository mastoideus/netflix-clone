import React, {useEffect, useState} from 'react' 
import './Row.css'
import axios from '../axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'



const baseImageURL= 'https://image.tmdb.org/t/p/original/'


const Row = ({title, fetchURL, isLarger})=>{
    const [movies,setMovies]= useState([])
    const [trailerUrl, setTrailerUrl] = useState('')


    useEffect(()=>{
       const fetchData= async ()=>{
           const response= await axios.get(fetchURL)
           setMovies(response.data.results)
       }
       
       fetchData()
    },[fetchURL])
     
    let posterClasses= 'row__poster'
    if (isLarger){
        posterClasses= ['row__poster', isLarger && 'row__posterLarge'].join(' ')
    }


    const opts={
        width: '100%',    
        height: '380px',  
        playerVars:{
            autoplay:1
        }

    }
    const onTrailerHandler= (movie)=>{
        if (trailerUrl){
            setTrailerUrl('')
        } else {
           movieTrailer(movie?.name || movie.title || '')
           .then(url=>{
               const urlParams= new URLSearchParams(new URL(url).search)  
               setTrailerUrl(urlParams.get('v'))
           }).catch(error=>{
               console.log(error)
           })
        }     
    }


    return (
        <div className='row'>
            <h2 className='row__title'>{title}</h2>
            <div className='row__container'>
            {movies.map(movie=>{
                return <img onClick={()=>onTrailerHandler(movie)} className={posterClasses} src={`${baseImageURL}${isLarger?movie.poster_path:movie.backdrop_path}`} alt={movie.name} key={movie.id} />
            })} 
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    
    )
    
    
}



    
export default Row 

