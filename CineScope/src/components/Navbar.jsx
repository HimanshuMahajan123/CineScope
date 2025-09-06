import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <nav className="flex justify-between items-center px-8 py-4 bg-black fixed w-full z-10 shadow-md">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold tracking-wide">
        <span className="text-red-600">Cine</span>
        <span className="text-white">Scope</span>
      </h1>

      {/* Links */}
      <ul className="flex gap-8 text-gray-200 font-medium">

        <li><Link to= "/" className="hover:text-white cursor-pointer">Home</Link></li>
        <li><Link to= "/movies" className="hover:text-white cursor-pointer">Movies</Link></li>
        <li><Link to= "/watchlist" className="hover:text-white cursor-pointer">Watchlist</Link></li>
        <li><Link to= "/about" className="hover:text-white cursor-pointer">About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
