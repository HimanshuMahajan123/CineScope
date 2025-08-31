export default function MovieDetails() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-20 px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <img 
          src="https://via.placeholder.com/400x600" 
          alt="Movie Poster" 
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />

        {/* Movie Info */}
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold mb-4">Inception</h2>
          <p className="text-gray-300 mb-2">⭐ Rating: 8.8</p>
          <p className="text-gray-400 mb-6">
            A thief who steals corporate secrets through dream-sharing 
            technology is given the inverse task of planting an idea 
            into the mind of a CEO.
          </p>

          <h3 className="text-2xl font-bold mb-2">Cast</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Leonardo DiCaprio</li>
            <li>Joseph Gordon-Levitt</li>
            <li>Elliot Page</li>
            <li>Tom Hardy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
