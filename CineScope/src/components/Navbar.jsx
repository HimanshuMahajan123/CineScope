import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../contexts/Theme.jsx";



export default function Navbar() {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/discover/movies", label: "Movies" },
    { to: "/discover/tv", label: "TV Shows" },
    { to: "/watchlist", label: "Watchlist" },
    { to: "/about", label: "About" }
  ];

  const [query, setQuery] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search/${query}`)
      setIsMenuOpen(false) // Close menu after search on mobile
    }
  }

  const handleNavClick = () => {
    setIsMenuOpen(false) // Close menu when nav link is clicked on mobile
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-4">

        {/* Top Row: Logo, Hamburger, Theme Toggle */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-extrabold text-red-600 tracking-wide">CineScope</h1>

          {/* Desktop Nav Links - Hidden on mobile */}
          <ul className="hidden lg:flex gap-6 xl:gap-8">
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

          {/* Right Side: Search (Desktop) + Theme Toggle + Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Searchbar - Hidden on mobile */}
            <form onSubmit={handleSearch} className="hidden lg:block">
              <input
                type="text"
                placeholder="Search.."
                value={query}
                onChange={(e) => { setQuery(e.target.value) }}
                className="w-48 xl:w-64 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </form>

            {/* Theme Toggle Button */}
            <button
              className="px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white focus:outline-none hover:bg-white/20 transition"
              onClick={toggleTheme}
            >
              <span className="hidden sm:inline">{theme === "dark" ? "🔆Light" : "🌙Dark"}</span>
              <span className="sm:hidden">{theme === "dark" ? "🔆" : "🌙"}</span>
            </button>

            {/* Hamburger Menu Button - Visible on mobile/tablet */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md bg-white/10 backdrop-blur-md text-white focus:outline-none hover:bg-white/20 transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide down animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
        >
          {/* Mobile Searchbar */}
          <form onSubmit={handleSearch} className="mb-4">
            <input
              type="text"
              placeholder="Search movies and TV shows.."
              value={query}
              onChange={(e) => { setQuery(e.target.value) }}
              className="w-full px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </form>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-4 pb-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `block py-2 font-medium transition duration-300 ${isActive
                      ? "text-red-500 border-l-4 border-red-500 pl-4"
                      : "text-gray-300 hover:text-white hover:pl-4 transition-all"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
