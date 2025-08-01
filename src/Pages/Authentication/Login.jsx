import { useState } from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa6';

import authLogo from '../../../public/image/auth/authLogo.png'
const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // // Basic form validation
    // if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword || !formData.role) {
    //   setError('All fields are required');
    //   setIsLoading(false);
    //   return;
    // }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Add your API call here
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Handle successful registration
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <div className="w-full md:w-[40%] h-[30vh] md:h-screen bg-[#011F39] relative">
        <div className='flex justify-center flex-col h-full items-center'>
          <img
            src={authLogo}
            alt="Logo"
            className="md:w-[300px]"
          />

        </div>
      </div>

      <div className="w-full md:h-screen md:w-[60%] bg-[#041D35]  flex items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-lg">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}


          <div className='mb-4'>
            <p className="text-gray-100 text-center  font-bold text-2xl mb-1">
              Sign in to your account

            </p>
            <p className='text-center text-gray-400'>Don’t have an account? <Link to="/sign_up" className='text-[#E15111]'>Sign up</Link></p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4  bg-gray-100 p-6 py-10 rounded-2xl">

            <div>
              <label htmlFor="email" className="block text-gray-400 mb-1 text-lg font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border bg-[#F8FCFF] borderAuth rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-400 mb-1 text-lg font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border bg-[#F8FCFF] borderAuth rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                </button>
              </div>
            </div>
            <div>



              <Link to="/">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg text-white rounded-lg px-6 py-3 mt-6 text-lg font-medium transition-colors  ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                    }`}
                >
                  {isLoading ? 'Signing ...' : 'Sign In'}
                </button>
              </Link>


              <div className="flex justify-center mt-4 ">
                <Link to="/verify" className='text-[#E15111] font-semibold'>
                  Forgot password?
                </Link>
              </div>

              <div className="relative flex items-center py-5">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500 text-sm">Or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className='flex flex-col justify-between items-center gap-6'>
                <div className=' border borderAuth p-2 rounded-xl gap-2 text-center w-66 flex '>
                  <FcGoogle className='size-8' />
                  <p className='text-xl text-gray-400'>Continue with google</p>
                </div>
                <div className='border borderAuth p-2 rounded-xl gap-2 text-center w-66 flex '>
                  <FaApple className='size-8' />
                  <p className='text-xl text-gray-400'>Continue with Apple ID</p>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;