import MovieList from "../components/MovieList";
import { useWatchlist } from "../contexts/WatchlistContext";

export default function Watchlist() {
  const { watchlist } = useWatchlist();

  // Filter only movies and TV shows
  const savedMovies = watchlist;

  return (
    <div>
      <h2 className="text-red-500 dark:text-white text-3xl font-extrabold mb-6">My Watchlist</h2>
      {savedMovies.length > 0 ? (
        <MovieList movies={savedMovies} />
      ) : (
        <p className="text-gray-400">Your watchlist is empty.</p>
      )}
    </div>
  );
}
