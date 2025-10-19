import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar />
      <main className=" flex-grow bg-white dark:bg-gray-800 text-white min-h-screen pt-20 px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
