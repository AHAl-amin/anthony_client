import { useState } from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa6';

import authLogo from '../../../public/image/auth/authLogo.png'


const EmailVerification = () => {
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
      <div className="w-full md:w-[40%] h-[20vh] md:h-screen bg-[#011F39] relative">
         <div className='flex justify-center flex-col h-full items-center'>
                  <img
                    src={authLogo}
                    alt="Logo"
                    className="md:w-[300px]"
                  />
                  
                </div>
      </div>

      <div className="w-full md:h-screen md:w-[60%] bg-[#041D35]  flex items-center justify-center px-6 py-16 md:p-8">
        <div className="w-full max-w-lg">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          
           <p className="text-gray-300 text-center  font-bold text-2xl mb-4">
              Password Reset

            </p>

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
                className="w-full px-4 py-2 borderAuth bg-[#F8FCFF] border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>


            <div>
<Link to="/otp_verify">


              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg text-white rounded-lg px-6 py-3 mt-6 text-lg font-medium transition-colors hover:bg ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                  }`}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
</Link>



             
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;