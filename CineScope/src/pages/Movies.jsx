import React from 'react'
import useFetchmovies from '../hooks/useFetchmovies'
import { useState , useEffect } from 'react';
import MovieList from '../components/MovieList';

function Movies() {

    const [page ,setPage] = useState(1);
    const [genre , setGenre] = useState("");
    const [year , setYear] = useState("");
    const [sortBy , setSortBy] = useState("popularity.desc")

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const {data : movies , loading , error } = 
    useFetchmovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&sort_by=${sortBy}
        ${genre ? `&with_genres=${genre}`: ""}
        ${year ? `&primary_release_year=${year}`: ""}`)

    return (
        <div className="bg-gray-900 min-h-screen text-white pt-20 px-8">
            <h2 className='text-3xl font-extrabold mb-6'>Popular Movies</h2>

            {/* ADDING FILTERS */}
            <div className='flex flex-wrap gap-4 mb-6'>
                <select 
                className="px-4 py-2 rounded-md bg-gray-800 text-white"
                value={genre} 
                onChange={(e) => setGenre(e.target.value)}>
                    <option value="">All Genres</option>
                    <option value="35">Comedy</option>
                    <option value="18">Drama</option>
                    <option value="28">Action</option>
                    <option value="80">Crime</option>
                    <option value="10759">Action & Adventure</option>
                </select>

                <select 
                value={year}
                className="px-4 py-2 rounded-md bg-gray-800 text-white"
                onChange={(e) => setYear(e.target.value)}>
                    <option value="">All Years</option>
                    <option value="2020">2020 onwards</option>
                    <option value="2015">2015 onwards</option>
                    <option value="2010">2010 onwards</option>
                    <option value="1999">1999 onwards</option>
                </select>


                <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-md bg-gray-800 text-white" >
                    <option value="">Popularity</option>
                    <option value="release_date.desc">Release Date</option>
                    <option value="vote_average.desc">Rating</option>
                </select>
            </div>

            {loading && <p className='text-gray-400'>Loading...</p>}
            {error && <p className='text-red-600'>Error : {error}</p>}

            {!loading && !error && <MovieList movies = {movies} mediaType = "movie"/>}


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

