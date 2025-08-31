import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black fixed w-full z-10">
      <h1 className="text-2xl font-extrabold text-red-600">CineScope</h1>
      <ul className="flex gap-8 text-gray-200 font-medium">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">Movies</li>
        <li className="hover:text-white cursor-pointer">Watchlist</li>
        <li className="hover:text-white cursor-pointer">About</li>
      </ul>
    </nav>
  )
}

export default Navbar
