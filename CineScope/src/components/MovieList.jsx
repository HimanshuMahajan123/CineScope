import MovieCard from "./MovieCard";


function MovieList({movies}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard  
          key={movie.id} //“Each child in a list should have a unique ‘key’ prop.”
          id = {movie.id}
          title={movie.title || movie.name} 
          rating={movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} 
          image={movie.poster_path} 
        />
      ))}
    </div>
  )
}

export default MovieList
