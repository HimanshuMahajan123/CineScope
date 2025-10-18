import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route , RouterProvider , createBrowserRouter , createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import About from './pages/About'
import Watchlist from './pages/Watchlist'
import Movies from './pages/Movies.jsx'
import TvShows from './pages/TvShows.jsx'
import SearchResults from './pages/SearchResults.jsx'
import { WatchlistProvider } from './contexts/Watchlistcontext.js'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path = '' element = {<Home />}/>
      <Route path = 'watchlist' element = {<Watchlist />}/>
      <Route path = 'about' element = {<About />}/>
      <Route path = 'discover/movies' element = {<Movies />} />
      <Route path= 'search/:query' element = {<SearchResults/>}/>
      <Route path = 'details/:mediaType/:id' element = {<MovieDetails />}/> {/*differentiating routes to prevent ambiguity*/}
      <Route path = 'discover/tv' element = {<TvShows/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <WatchlistProvider>
      <RouterProvider router = {router}/>
    </WatchlistProvider>

  </StrictMode>,
)
