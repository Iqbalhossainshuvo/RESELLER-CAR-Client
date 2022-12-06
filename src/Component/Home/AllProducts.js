import React from 'react';
import { Link } from 'react-router-dom';
import audiLogo from '../../Assets/image/audiLogo.jpg'
import bmwLogo from '../../Assets/image/bmwLogo.jpg'
import hyundaiLogo from '../../Assets/image/hyundaiLogo.jpg'
import lamborghiniLogo from '../../Assets/image/lamborghiniLogo.jpg'
import mercedesLogo from '../../Assets/image/mercedesLogo.jpg'
import teslaLogo from '../../Assets/image/teslaLogo.jpg'
import { FaCarSide } from 'react-icons/fa';

const AllProducts = () => {
    return (
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-full my-40">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-3xl font-semibold tracking-wider text-neutral uppercase rounded-full bg-teal-accent-400">
             <div className='flex justify-center items-center gap-1'>
            <h1>Most Popular Brand</h1>
             </div>
            </p>
          </div>
         
       
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         

            <Link to='/audi'>
            
            <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={audiLogo}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-2xl font-bold text-white">
                Audi
                </p>
            
               
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                 
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Link>
            
            <Link to='/bmw'>
            
            <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={bmwLogo}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-2xl font-bold text-white">
                BMW
                </p>
            
               
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                 
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link to='/lamborghini'>
            
            <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={lamborghiniLogo}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-2xl font-bold text-white">
                Lamborghini
                </p>
            
               
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                 
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link to='/hyundai'>
            
            <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={hyundaiLogo}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-2xl font-bold text-white">
                Hyundai
                </p>
            
               
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                 
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link to='/mercedes'>
            
            <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={mercedesLogo}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-2xl font-bold text-white">
                Mercedes
                </p>
            
               
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                 
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link to='/tesla'>
            
            <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={teslaLogo}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-2xl font-bold text-white">
                Tesla
                </p>
            
               
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                 
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Link>



        </div>
      </div>
    );
};

export default AllProducts;