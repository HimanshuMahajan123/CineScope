import MovieList from "../components/MovieList";
import { useEffect } from "react";
import useFetchmovies from "../hooks/useFetchmovies";
import SkeletonCard from "../components/SkeletonCard";

export default function Home() {

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
  //       { method: 'GET',
  //         headers: {
  //           accept: 'application/json',
  //           authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
  //         }
  //       }
  //     );

  //     const data = await res.json();
  //     console.log(data);
  //   }
  //   getData();
  // }, [])


  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const { data: movies, loading, error } = useFetchmovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`);

  return (
    <div>
      <h2 className="text-red-500 dark:text-white text-3xl font-extrabold mb-6">Trending Now</h2>

      {/* adding skeleton cards */}
      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      )}

      {error && <p className="text-red-600">Error : {error}</p>}

      {!loading && !error && <MovieList movies={movies} mediaType="movie" />}
    </div>
  );
}