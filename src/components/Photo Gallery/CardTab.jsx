import React from "react"
import Card from "./Card"

const CardTab = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <h1 className="text-3xl font-medium mt-5 mb-6">
        Photo Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <Card 
          url="https://alumni.jnec.org/storage//albums/Alumni%20Pre-meet%20Delhi/EE668XA8sef4CufECLmi3Hx9SLdbQGaUQmkw4hUv.png" 
          location="Delhi" 
          path="/gallery/delhi"
        />

        <Card 
          url="https://alumni.jnec.org/storage//albums/Mumbai/iaSGKlyajeYrpOilD1Ai4ekiNTExN7RxqnEjZ1Um.jpg" 
          location="Mumbai" 
          path="/gallery/mumbai"
          photoCount= {10}
        />

        <Card 
          url="https://alumni.jnec.org/storage//albums/Aurangabad/lmAs4ildNH97fvLDE0F9p1vBq5TkiqxjSZ0VUEho.jpg" 
          location="Chh.Sambhajinagar" 
          path="/gallery/sambhajinagar"

        />

        <Card 
          url="https://alumni.jnec.org/storage//albums/Pune/ECA67uqGvdxbfa6iGxXUuIHZABLvTgoSANOMDuBZ.jpg" 
          location="Pune" 
          path="/gallery/pune"
        />

      </div>
    </div>
  )
}

export default CardTab