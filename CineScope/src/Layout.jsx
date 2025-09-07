import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar />
      <main className="flex-grow  h-full pb-4 bg-gray-900">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
