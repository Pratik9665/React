import React from 'react'

const Brownbackground = () => {
  return (
    <div className='h-screen bg-red-500 flex flex-col items-center pt-16'>
      <div className='bg-white p-1'>
        <img 
          className='h-18'
          src='https://alumni.jnec.org/assets/images/LogoMGM.svg'
          alt='JNEC Logo'/>
      </div>
      <div className='text-center mt-3 px-4'>
        <h1 className='text-2xl md:text-3xl font-normal text-white leading-tight'>
          Jawaharlal Nehru <br />
          Engineering College Alumni
        </h1>
      </div>
      <div>
      <p className='text-white text-base md:text-sm mt-6 max-w-2xl text-center leading-relaxed'>
      Jawaharlal Nehru Engineering College is a premier institute of engineering <br />
      that has carved a niche for itself in the field of technical education <br />
      in a very short span of time.
     </p>      </div>
    <div className='flex gap-6 mt-8'>
  <button className='bg-white text-amber-900  font-medium px-20 py-3 text-sm rounded shadow-md transition duration-300'>
    Login
  </button>

  <button className=' text-white font-medium px-18 py-3 rounded shadow-md text-sm transition duration-300 border-2 border-white'>
    Register
  </button>
</div>

    </div>
  )
}

export default Brownbackground