import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#703c19] text-white pt-16 pb-8 font-sans mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          
          {/* Left Column - Contact Info */}
          <div className="flex flex-col space-y-6">
            {/* Logo */}
            <div className="mb-2">
              <img 
                src="https://alumni.jnec.org/assets/images/mgm-u-logo.png" 
                alt="MGM University Logo" 
                className="w-48 h-auto object-contain"
              />
            </div>
            
            <div className="flex flex-col space-y-2 leading-relaxed text-[15px]">
              <p>
                MGM Campus, CIDCO, N-6, Aurangabad - 431003<br />
                Maharashtra (INDIA)
              </p>
              <p>Tel: 0240-6481000</p>
              <p>
                Email: <Link to="mailto:principal@jnec.ac.in" className="hover:text-[#ea580c] transition-colors">principal@jnec.ac.in</Link>
              </p>
            </div>
          </div>

          {/* Middle Column - Useful Links */}
          <div className="md:px-4">
            <h3 className="text-xl text-white font-bold mb-6 flex flex-col items-start font-serif">
              Useful Links
              <span className="w-10 h-0.5 bg-[#ea580c] mt-2"></span>
            </h3>
            
            <div className="grid grid-cols-2 gap-y-5 gap-x-4 text-[14px]">
              <Link to="/" className="hover:text-[#ea580c] transition-colors">Home</Link>
              <Link to="/admission" className="hover:text-[#ea580c] transition-colors">Admission</Link>
              
              <Link to="/ug-programs" className="hover:text-[#ea580c] transition-colors">UG Programs</Link>
              <Link to="/pg-programs" className="hover:text-[#ea580c] transition-colors">PG Programs</Link>
              
              <Link to="/placements" className="hover:text-[#ea580c] transition-colors">Placements</Link>
              <Link to="/gallery" className="hover:text-[#ea580c] transition-colors">Gallery</Link>
              
              <Link to="/blogs" className="hover:text-[#ea580c] transition-colors">Blogs</Link>
              <Link to="/news-letters" className="hover:text-[#ea580c] transition-colors">News Letters</Link>
              
              <Link to="/jnec-brochure" className="hover:text-[#ea580c] transition-colors col-span-2">JNEC Brochure</Link>
            </div>
          </div>

          {/* Right Column - Subscribe */}
          <div>
            <h3 className="text-xl text-white font-bold mb-6 flex flex-col items-start font-serif">
              Subscribe
              <span className="w-10 h-0.5 bg-[#ea580c] mt-2"></span>
            </h3>
            
            <p className="mb-6 text-[14px] leading-relaxed">
              Don't miss to subscribe to our new feeds, kindly fill the form below.
            </p>
            
            <form className="flex w-full">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-grow px-4 py-3 bg-[#f5f5f5] text-gray-800 text-[14px] focus:outline-none w-[60%]"
                required
              />
              <button 
                type="submit" 
                className="bg-[#754327] border border-white px-6 py-3 font-semibold text-[14px] hover:bg-white/10 transition-colors w-[40%] flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-20 text-center text-[14px]">
          <p>© Designed & Developed by CSE Department</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
