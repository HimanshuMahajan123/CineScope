import MovieCard from "./MovieCard";


function MovieList({movies}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {movies.map((movie, index) => (
        <MovieCard 
          key={index} 
          title={movie.title} 
          rating={movie.rating} 
          image={movie.image} 
        />
      ))}
    </div>
  )
}

export default MovieList
