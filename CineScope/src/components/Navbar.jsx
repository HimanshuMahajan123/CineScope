import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/movies", label: "Movies" },
    { to: "/tv", label: "TV Shows" },
    { to : "/watchlist" , label : "Watchlist"},
    { to : "/about" , label : "About"}
  ];

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
                  `relative font-medium transition duration-300 ${
                    isActive
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
      </div>
    </nav>
  );
}
