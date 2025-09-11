import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchmovies from '../hooks/useFetchmovies'
import MovieList from '../components/MovieList'

function SearchResults() {

    const {query} = useParams()
    console.log(query)
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY

    const {data : results , loading , error} = useFetchmovies(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`)

    const filtered = results?.filter(
        (item) => item.media_type === 'movie' || item.media_type === 'tv'
    )

  return (
    <div className="bg-gray-900 min-h-screen text-white pt-20 px-8">
      <h2 className="text-3xl font-extrabold mb-6">
        Search Results for "{query}"
      </h2>

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && filtered?.length > 0 ? (
        <MovieList movies={filtered} mediaType="mixed" />
      ) : (
        <p className="text-gray-400">No results found.</p>
      )}
    </div>
  );
}

export default SearchResults
