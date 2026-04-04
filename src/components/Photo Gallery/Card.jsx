import React from 'react'
import { Link } from "react-router-dom"

const Card = ({ url, location, path, photoCount = 0 }) => {
  return (
    <Link to={path} className="block"> 
      <div className='shadow-lg w-80 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300 bg-white'>
       
        <img 
          src={url} 
          alt={`Photos of ${location}`} 
          className='w-full h-54 object-cover'
        />

        <div className='mt-6 px-4 pb-6 text-center'>
          <h1 className='font-bold text-xl'>{location}</h1>
          <span className='block text-gray-400 text-sm'>{location}</span>
          <span className='block text-gray-400 mt-3'>Total Photos - {photoCount}</span>
        </div>

      </div>
    </Link>
  )
}

export default Card