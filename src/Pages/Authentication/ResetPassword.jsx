import { useState } from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa6';
import authTwo from '../../../public/image/auth/auth2.png'
import authLogo from '../../../public/image/auth/authLogo.png'

const ResetPassword = () => {
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

    // Basic form validation
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
      <div className="w-full md:w-[40%] h-[30vh] md:h-screen bg-gradient-to-b from-[#0A192F]  to-[#90E0D8] relative">
        <div className='flex justify-center h-full items-center'>
          <img
            src={authLogo}
            alt="Logo"
            className="max-w-[200px] md:max-w-[300px]"
          />
        </div>
      </div>

      <div className="w-full md:w-[60%] bg-[#011E39]  flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-lg">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          <div className="text-4xl md:text-5xl text-gray-400 font-bold flex justify-center mb-10">
            <img src={authTwo} alt="" />
          </div>
          <div className='mb-4'>
            <p className="text-gray-800 text-center  font-bold text-2xl mb-1">
              ResetPassword

            </p>
           
          </div>

          <form onSubmit={handleSubmit} className="space-y-4  bg-gray-100 p-6 py-10 rounded-2xl">
        
           

            <div>
              <label htmlFor="password" className="block text-gray-400 mb-1 text-lg font-medium">
               New Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your new password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border bg-[#F8FCFF] border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 pr-10"
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
              <label htmlFor="confirmPassword" className="block text-gray-400 mb-1 text-lg font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border bg-[#F8FCFF] border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 pr-10"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                </button>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-[#2A5CE6] text-white rounded-lg px-6 py-3 mt-6 text-lg font-medium transition-colors hover:bg-[#2A5CE6] ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                  }`}
              >
                {isLoading ? 'Confirming...' : 'Confirm'}
              </button>



            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;