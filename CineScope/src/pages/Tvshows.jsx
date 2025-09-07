import React from 'react'
import useFetchmovies from '../hooks/useFetchmovies'
import MovieList from '../components/MovieList'

function TvShows() {

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY
    const {data : shows , loading , error } = useFetchmovies(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)

    return (
        <div className='bg-gray-900 min-h-screen text-white pt-20 px-8'>
            <h2 className= 'text-3xl font-extrabold mb-6'>Popular TV Shows</h2>
            {loading && <p className='text-gray-400'>Loading..</p>}
            {error && <p className='text-red-600'>Error : {error}</p>}
            {!loading && !error && <MovieList movies = {shows}/>}
        </div>
    )
}

export default TvShows
