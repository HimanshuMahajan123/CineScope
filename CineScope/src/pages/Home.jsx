import MovieList from "../components/MovieList";

export default function Home() {
  const sampleMovies = [
    { title: "Inception", rating: "8.8", image: "https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg" },
    { title: "Interstellar", rating: "8.6", image: "https://m.media-amazon.com/images/S/pv-target-images/991edf2ea502762dc5cd74e22bff1a4e06b9b35dc3bbf3d0c56381ece888ecb8._SX1080_FMjpg_.jpg" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white pt-20 px-8">
      <h2 className="text-3xl font-extrabold mb-6">Trending Now</h2>
      <MovieList movies={sampleMovies} />
    </div>
  );
}