import MovieList from "../components/MovieList";
import { useEffect } from "react";
import useFetchmovies from "../hooks/useFetchmovies";

export default function Home() {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const {data : movies , loading , error} = useFetchmovies(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);

  return (
    <div className="bg-gray-900 min-h-screen text-white pt-20 px-8">
      <h2 className="text-3xl font-extrabold mb-6">Trending Now</h2>

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
}