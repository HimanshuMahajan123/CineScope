import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/discover/movies", label: "Movies" },
    { to: "/discover/tv", label: "TV Shows" },
    { to: "/watchlist", label: "Watchlist" },
    { to: "/about", label: "About" }
  ];

  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search/${query}`)
    }
  }


  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-extrabold text-red-600 tracking-wide">CineScope</h1>


        {/* Nav Links as List */}
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative font-medium transition duration-300 ${isActive
                    ? "text-red-500 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-red-500"
                    : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>


        {/* Searchbar */}
        <form onSubmit={handleSearch} className="ml-6">
          <input
            type="text"
            placeholder="Search.."
            value={query}
            onChange={(e) => { setQuery(e.target.value) }}
            className="w-3/4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none "
          />
        </form>


      </div>
    </nav>
  );
}
