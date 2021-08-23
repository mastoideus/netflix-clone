const APIKEY= '615885515a2d517f3d91fb5674ee5a07'


const requests= {
    fetchTopRated:  `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    fetchNetflixOriginal: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchActions:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedies:`/discover/movie?api_key=${APIKEY}&with_genres=35` ,
    fetchHorrors:`/discover/movie?api_key=${APIKEY}&with_genres=27` ,
    fetchRomance:`/discover/movie?api_key=${APIKEY}&with_genres=10749`, 
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`

}



export default requests 