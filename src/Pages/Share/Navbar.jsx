


import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import hamburger and close icons
import logo from '../../../public/image/home/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  const location = useLocation();
  const activeClass = 'text-[#90E0D8] border-b-2 border-[#90E0D8] pb-2';
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#011F39] py-6 px-6 shadow-md sticky top-0 z-50 shadow-black/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="md:w-40 w-30" />
        </Link>

        {/* Hamburger Icon for Small Devices */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-400 text-2xl">
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`text-lg ${location.pathname === '/' ? activeClass : 'text-gray-400'}`}
          >
            Home
          </Link>
          <div className="relative group">
            <Link
              to="/pricing"
              className={`text-lg ${location.pathname.includes('pricing') ? activeClass : 'text-gray-400'}`}
            >
              Pricing
            </Link>
           
          </div>
          <div className="relative">
            <Link
              to="/user_dashboard"
              className={`text-lg ${location.pathname.includes('user_dashboard') ? activeClass : 'text-gray-400'}`}
            >
              Dashboard
            </Link>
          </div>
        </div>

        {/* Desktop User Options */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signin" className="text-lg bg-[#E15111] text-white py-2 px-4 rounded-md">
            Sign In
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-lg text-gray-500 py-2 px-4 rounded-md flex items-center"
            >
              <img
                src="https://i.ibb.co/0nZ0Z0Z/user-placeholder.png"
                alt="User"
                className="h-10 w-10 rounded-full mr-2"
              />
              User
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full w-48 bg-white shadow-lg mt-2 rounded-md z-50">
                <ul>
                  <li>
                    <Link
                      to="/user_dashboard/user_setting"
                      className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex gap-1 items-center"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <CiSettings className="size-5" /> Profile Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signin"
                      className="block px-4 py-2  text-gray-800 "
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#011F39] pt-4 pb-6">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-lg w-12  ${location.pathname === '/' ? activeClass : 'text-gray-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="relative">
              <Link
                to="/pricing"
                className={`text-lg  ${location.pathname.includes('pricing') ? activeClass : 'text-gray-400'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
            </div>
            <Link
              to="/user_dashboard"
              className={`text-lg w-22  ${location.pathname.includes('user_dashboard') ? activeClass : 'text-gray-400'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/signin"
              className="text-lg bg-[#E15111] text-white py-2 px-4 rounded-md w-fit"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-lg text-gray-400 py-2 px-4 rounded-md flex items-center"
              >
                <img
                  src="https://i.ibb.co/0nZ0Z0Z/user-placeholder.png"
                  alt="User"
                  className="h-10 w-10 rounded-full mr-2"
                />
                User
              </button>
              {isDropdownOpen && (
                <div className="pl-4 pt-2">
                  <ul>
                    <li>
                      <Link
                        to="/user_dashboard/user_setting"
                        className="block px-4 py-2 text-gray-400 hover:text-[#90E0D8] flex gap-1 items-center"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <CiSettings className="size-5" /> Profile Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signin"
                        className="block px-4 py-2 text-gray-400 hover:text-[#90E0D8]"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
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
      )}
    </nav>
  );
};

export default Navbar;
