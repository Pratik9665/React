import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
      <div className='flex justify-between'>
        
              <div>
                <Link to='/'><img className='h-20 w-32 p-2 m' src='
                https://alumni.jnec.org/assets/images/mgm-u-logo.png'></img></Link>
              </div>
              <div className='flex justify-between gap-4  mt-2 mr-2 font-normal text-sm p-2'>
            <Link to='/login' className='hover:bg-amber-800 hover:text-white text-amber-800 h-6  text-center px-2 transition duration-200'>Login/Signup</Link>
            <Link to='/search' className='hover:bg-amber-800 hover:text-white text-amber-800 h-6  text-center px-2 transition duration-200'>Alumini Search</Link>
            <Link to='/contact' className='hover:bg-amber-800 hover:text-white text-amber-800 h-6  text-center px-2 transition duration-200'>Contact Us</Link> 
            <Link to='/' className='hover:bg-amber-800 hover:text-white text-amber-800 h-6  text-center px-2 transition duration-200'>Home</Link>   
            <Link to='/connect' className='hover:bg-amber-800 hover:text-white text-amber-800 h-6  text-center px-2 transition duration-200'>Connect Alumini Series</Link>
            </div>
            </div>

  )
}

export default Navbar
