import { useState } from "react";
import MovieList from "../components/MovieList";
import useFetchmovies from "../hooks/useFetchmovies";

export default function TVShows() {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [page, setPage] = useState(1);

  const { data: shows, loading, error } = useFetchmovies(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${page}`
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white pt-20 px-8">
      <h2 className="text-3xl font-extrabold mb-6">Popular TV Shows</h2>

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && <MovieList movies={shows} mediaType = "tv"/>}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg ${
            page === 1
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          Prev
        </button>

        <span className="text-lg font-bold">Page {page}</span>

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
