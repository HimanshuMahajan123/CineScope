import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

// for lazy loading in react:
const Home = lazy(() => import('./pages/Home.jsx'))
const MovieDetails = lazy(() => import('./pages/MovieDetails.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Watchlist = lazy(() => import('./pages/Watchlist.jsx'))
const Movies = lazy(() => import('./pages/Movies.jsx'))
const TvShows = lazy(() => import('./pages/Tvshows.jsx'))
const SearchResults = lazy(() => import('./pages/SearchResults.jsx'))

import { WatchlistProvider } from './contexts/WatchlistContext.jsx'
import { ThemeProvider } from './contexts/Theme.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='watchlist' element={<Watchlist />} />
      <Route path='about' element={<About />} />
      <Route path='discover/movies' element={<Movies />} />
      <Route path='search/:query' element={<SearchResults />} />
      <Route path='details/:mediaType/:id' element={<MovieDetails />} /> {/*differentiating routes to prevent ambiguity*/}
      <Route path='discover/tv' element={<TvShows />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  /* Context data only flows downward (top → bottom) */
  <>
    <ThemeProvider>
      <WatchlistProvider>
        <Suspense fallback={null}>
          <RouterProvider router={router} />
        </Suspense>
      </WatchlistProvider>
    </ThemeProvider> 
  </>

)
