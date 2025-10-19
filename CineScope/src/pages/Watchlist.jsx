import MovieList from "../components/MovieList";

export default function Watchlist() {
  const savedMovies = [
    { title: "Interstellar", rating: "8.6", image: "https://via.placeholder.com/400x600" },
    { title: "Dune", rating: "8.3", image: "https://via.placeholder.com/400x600" }
  ];

  return (
    <div>
      <h2 className="text-3xl font-extrabold mb-6">My Watchlist</h2>
      {savedMovies.length > 0 ? (
        <MovieList movies={savedMovies} />
      ) : (
        <p className="text-gray-400">Your watchlist is empty.</p>
      )}
    </div>
  );
}
