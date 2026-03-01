import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

const Navbar = () => {
  return (
    
      <div>
        <div className='flex justify-between'>
        
              <div className='h-12 w-25 object-cover '>
                <Link to='/'><img className=' p-2 ml-15' src='
                https://alumni.jnec.org/assets/images/mgm-u-logo.png'></img></Link>
              </div>
              <div className='flex justify-between gap-4 mt-3 mr-10 font-normal text-sm p-2'>
            <Link to='/login' className='hover:bg-amber-800 hover:text-white text-amber-800 h-6  text-center px-2 transition duration-200'>Login/Signup</Link>
            <Link to='/search' className='hover:bg-amber-800 flex items-center gap-1 hover:text-white text-amber-800 h-6  text-center px-2 transition duration-200'>Alumini Search <Search size={14} />
            </Link>
            <Link to='/contact' className='hover:bg-amber-800 hover:text-white text-amber-800 h-6  text-center px-2 transition duration-200'>Contact Us</Link> 
            <Link to='/connect' className='hover:bg-amber-800 hover:text-white text-amber-800 h-6  text-center px-2 transition duration-200'>Connect Alumini Series</Link>
            </div>
            </div>
            <div className='flex justify-between items-center'>
              <h1 className='text-amber-800 p-2 font-bold ml-6'>JNEC Alummini Association</h1>
              <div className='mr-40 flex justify-between gap-8'>
                <Link to='/' className='bg-amber-800 text-white py-0.5 px-1.5 transition duration-200 text-sm text-center'>Home</Link>
                <Link to='/gallery' className='hover:bg-amber-800 hover:text-white text-amber-800   text-center py-0.5 px-1.5 transition duration-200'>Gallary</Link>
              </div>
              </div>
      </div>

  )
}

export default Navbar
