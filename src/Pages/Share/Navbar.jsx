import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); 
  const activeClass = 'text-gray-600 border-b-2 border-[#2045AD]'; 

  return (
    <nav className="bg-[#FFFFFF] py-3 px-6 shadow-md sticky top-0 z-50 shadow-black/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* <img src="https://i.ibb.co/20mKHM8m/logo-final-2.png" alt="Text Humanizer Pro" className="h-18 w-auto" />  */}
          <h1 className='text-[#2A5CE6] font-bold text-3xl '>Text Humanizer Pro</h1>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`text-lg ${location.pathname === '/' ? activeClass : 'text-gray-400'}`}
          >
            Home
          </Link>
          <div className="relative">
            <Link
            to="/pricing"
              className={`text-lg ${location.pathname.includes('pricing') ? activeClass : 'text-gray-400'}`}
            >
              Pricing
            </Link>
            <div className="absolute top-full left-0 w-40 bg-white shadow-lg mt-2 hidden group-hover:block">
              <ul>
                <li><Link to="/property-types/residential" className="block px-4 py-2 text-gray-800">Residential</Link></li>
                <li><Link to="/property-types/commercial" className="block px-4 py-2 text-gray-800">Commercial</Link></li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <Link
            to="/user_dashboard"
              className={`text-lg ${location.pathname.includes('user_dashboard') ? activeClass : 'text-gray-400'}`}
            >
             Dashboard
            </Link>
            <div className="absolute top-full left-0 w-40 bg-white shadow-lg mt-2 hidden group-hover:block">
              <ul>
                <li><Link to="/countries/usa" className="block px-4 py-2 text-gray-800">USA</Link></li>
                <li><Link to="/countries/uk" className="block px-4 py-2 text-gray-800">UK</Link></li>
              </ul>
            </div>
          </div>
         
        </div>

        <div className="md:flex items-center space-x-4">
          <Link
            to="/signin"
            className="text-lg bg-[#2A5CE6] text-white py-2 px-4 rounded-md"
          >
            sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
