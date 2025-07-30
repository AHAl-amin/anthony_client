

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import logo from '../../../public/image/home/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  const location = useLocation();
  const activeClass = 'text-[#90E0D8] border-b-2 border-[#90E0D8] pb-2';
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#011F39] py-3 px-6 shadow-md sticky top-0 z-50 shadow-black/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/' className="flex items-center space-x-4">
          <img src={logo} alt="" className='' />
        </Link>

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
            className="text-lg bg text-white py-2 px-4 rounded-md"
          >
            sign in
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-lg  text-gray-500 py-2 px-4 rounded-md flex items-center"
            >
              <img
                src="https://i.ibb.co/0nZ0Z0Z/user-placeholder.png"
                alt="User"
                className="h-10 w-10 rounded-full mr-2"
              />
              User
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full  w-48 bg-white shadow-lg mt-2 rounded-md z-50">
               
                <ul>
                  <li>
                    <Link
                      to="/user_dashboard/user_setting"
                      className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex gap-1 items-center"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <CiSettings className='size-5' />Profile Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signin"
                      className="block px-4 py-2 text-gray-800  hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
       
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
