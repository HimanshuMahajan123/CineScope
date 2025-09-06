import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route , BrowserRouter , RouterProvider , createBrowserRouter , createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import About from './pages/About'
import Watchlist from './pages/Watchlist'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path = '' element = {<Home />}/>
      <Route path = 'watchlist' element = {<Watchlist />}/>
      <Route path = 'about' element = {<About />}/>
      <Route path = 'movie/:id' element = {<MovieDetails />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
