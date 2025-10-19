import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchmovies from '../hooks/useFetchmovies'
import MovieList from '../components/MovieList'
import SkeletonCard from '../components/SkeletonCard'

function SearchResults() {

  const { query } = useParams()
  console.log(query)
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY

  const { data: results, loading, error } = useFetchmovies(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`)

  const filtered = results?.filter(
    (item) => item.media_type === 'movie' || item.media_type === 'tv'
  )

  return (
    <div>
      <h2 className="text-3xl font-extrabold mb-6">
        Search Results for "{query}"
      </h2>


      {/* adding skeleton cards */}
      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      )}

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
