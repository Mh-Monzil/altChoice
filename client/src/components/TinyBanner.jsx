import { Link } from 'react-router-dom';
import banner from '../assets/banner/main-banner.png';

const TinyBanner = () => {
    return (
        <div style={{
            backgroundImage: `url(${banner})`
        }} className="mt-24 bg-cover bg-center rounded-md">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl backdrop-blur-lg">
              Explore All Queries <br /> at a Click!
              </h1>
            </div>
        
            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-400">Whether you're looking for quick tips, detailed guidance, or technical support, our comprehensive query hub has everything you need. Tap 'All Queries' to start exploring!</p>
            </div>

            <div className="text-center">
              <Link to='/queries' className="inline-flex justify-center items-center gap-x-3 text-center  bg-gradient-to-tl from-green-600 to-cyan-600 shadow-lg shadow-transparent hover:shadow-green-700/50 border border-transparent text-white text-lg font-semibold rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-7 dark:focus:ring-offset-gray-800" >
                All Queries
              </Link>
            </div>
          </div>
        </div>
    );
};

export default TinyBanner;