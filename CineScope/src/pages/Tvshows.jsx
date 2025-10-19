import { useState } from "react";
import MovieList from "../components/MovieList";
import useFetchmovies from "../hooks/useFetchmovies";
import SkeletonCard from "../components/SkeletonCard";

export default function TVShows() {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc")


  const { data: shows, loading, error } = useFetchmovies(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${page}&sort_by=${sortBy}
        ${genre ? `&with_genres=${genre}` : ""}
        ${year ? `&primary_release_year=${year}` : ""}`)

  return (
    <div>
      <h2 className="text-red-500 dark:text-white text-3xl font-extrabold mb-6">Popular TV Shows</h2>

      {/* ADDING FILTERS */}
      <div className='flex flex-wrap gap-4 mb-6'>
        <select
          className="px-4 py-2 rounded-md bg-gray-500 dark:bg-gray-900 text-white"
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
          className="px-4 py-2 rounded-md bg-gray-500 dark:bg-gray-900 text-white"
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
          className="px-4 py-2 rounded-md bg-gray-500 dark:bg-gray-900 text-white" >
          <option value="">Popularity</option>
          <option value="release_date.desc">Release Date</option>
          <option value="vote_average.desc">Rating</option>
        </select>
      </div>

      {/* adding skeleton cards */}
      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      )}


      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && <MovieList movies={shows} mediaType="tv" />}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg ${page === 1
            ? "bg-gray-700 text-gray-500 cursor-not-allowed"
            : "bg-red-600 hover:bg-red-700"
            }`}
        >
          Prev
        </button>

        <span className="text-gray-600 dark:text-white">Page {page}</span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}
