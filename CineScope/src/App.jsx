import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import About from './pages/About'
import Watchlist from './pages/Watchlist'

function App() {

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow ">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
