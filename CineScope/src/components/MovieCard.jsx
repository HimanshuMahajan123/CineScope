import React from 'react'

function MovieCard({ title, rating, image }) {
  return (
    <div className='relative transform hover:scale-105 transition duration-300'>
        <img 
            src={image} 
            alt={title} 
            className='w-full h-64 object-cover rounded-lg shadow-lg' 
        />

        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-b-lg'>
            <h3 className='text-white font-bold'>{title}</h3>
            <p className='text-sm text-gray-300'>⭐ {rating}</p>
        </div>
    </div>
  )
}

export default MovieCard
