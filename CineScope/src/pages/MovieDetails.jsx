import { useParams } from "react-router-dom";
import useFetchmovies from "../hooks/useFetchmovies";

export default function MovieDetails() {

  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const { data: movie, loading, error } = useFetchmovies(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`);//this url is dynamic based on the movie id

  if (loading) return <p className="text-gray-400">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!movie) return <p className="text-gray-400">No movie data found.</p>;

  return (
    <div className="bg-gray-900 text-white min-h-screen pt-20 px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <img 
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/400x600"}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />

        {/* Movie Info */}
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold mb-4">{movie.title}</h2>
          <p className="text-gray-300 mb-2">⭐ Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</p>
          <p className="text-gray-400 mb-6">
            {movie.overview ? movie.overview : "No description available."}
          </p>

          <h3 className="text-2xl font-bold mb-2">Top Cast</h3>
          <ul className="list-disc list-inside text-gray-300">
            {movie.credits && movie.credits.cast && movie.credits.cast.length > 0 ? (
              movie.credits.cast.slice(0, 5).map((actor) => (
                <li key={actor.cast_id}>{actor.name} as {actor.character}</li>
              ))
            ) : (
              <li>No cast information available.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
