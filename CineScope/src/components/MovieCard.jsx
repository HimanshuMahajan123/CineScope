import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({ id , title, rating, image , mediaType}) {
  return (
    <Link to={`/${mediaType}/${id}`} className='relative transform hover:scale-105 transition duration-300'>
        <img 
            src={image ? `https://image.tmdb.org/t/p/w500${image}` : "https://via.placeholder.com/400x600"} 
            alt={title} 
            className='w-full h-full object-cover rounded-lg shadow-lg ' 
        />

        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-b-lg'>
            <h3 className='text-white font-bold'>{title}</h3>
            <p className='text-sm text-gray-300'>⭐ {rating}</p>
        </div>
    </Link>
  )
}

export default MovieCard
