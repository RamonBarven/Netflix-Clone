

const requests = {
    fetchTrending:'/trending/all/week?api_key=12a032850029e799e564982ec4a9b5d2&language=en-US',    
    fetchNetflixOriginal:'/discover/tv?api_key=12a032850029e799e564982ec4a9b5d2&with_networks=213',
    fetchTopRated:'/movie/top_rated?api_key=12a032850029e799e564982ec4a9b5d2&language=en-US',
    fetchActionMovies:'/discover/movie?api_key=12a032850029e799e564982ec4a9b5d2&with_genres=28',
    fetchComedyMovies:'/discover/movie?api_key=12a032850029e799e564982ec4a9b5d2&with_genres=35',
    fetchHorrorMovies:'/discover/movie?api_key=12a032850029e799e564982ec4a9b5d2&with_genres=27',
    fetchRomanceMovies:'/discover/movie?api_key=12a032850029e799e564982ec4a9b5d2&with_genres=10749',
    fetchDocumentaries:'/discover/movie?api_key=12a032850029e799e564982ec4a9b5d2&with_genres=99',
}

export default requests;
