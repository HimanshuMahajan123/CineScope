import React from 'react'
import useFetchmovies from '../hooks/useFetchmovies'
import { useState , useEffect } from 'react';
import MovieList from '../components/MovieList';

function Movies() {

    const [page ,setPage] = useState(1);

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const {data : movies , loading , error } = useFetchmovies(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`)

    return (
        <div className="bg-gray-900 min-h-screen text-white pt-20 px-8">
            <h2 className='className="text-3xl font-extrabold mb-6'>Popular Movies</h2>

            {loading && <p className='text-gray-400'>Loading...</p>}
            {error && <p className='text-red-600'>Error : {error}</p>}

            {!loading && !error && <MovieList movies = {movies}/>}


            <div className='flex justify-center items-center gap-4 mt-10'>
                <button
                    disabled = {page === 1}
                    className= {`px-4 py-2 rounded-lg ${page === 1 ? "bg-gray-700 text-gray-500 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}`}
                    onClick={() => {
                        setPage((prev) => Math.max(prev-1 , 1));
                    }}
                    
                >Prev</button>


                <span>Page {page}</span>


                <button
                    className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
                    onClick={() => {
                        setPage((next) => next+1)
                    }}
                >Next</button>
            </div>

        </div>
    )
}

export default Movies

