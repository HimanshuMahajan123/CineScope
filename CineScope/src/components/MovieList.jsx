import MovieCard from "./MovieCard";


function MovieList({movies , mediaType}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {movies.map((m) => (
        <MovieCard  
          key={m.id} //“Each child in a list should have a unique ‘key’ prop.”
          id = {m.id}
          title={m.title || m.name} 
          rating={m.vote_average ? m.vote_average.toFixed(1) : "N/A"} 
          image={m.poster_path} 
          mediaType = {m.media_type || mediaType}
        />
      ))}
    </div>
  )
}

export default MovieList
