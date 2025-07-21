import { useState } from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa6';
import authTwo from '../../../public/image/auth/auth2.png'
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
      <div className="w-full md:w-[40%] h-[30vh] md:h-screen bg-gradient-to-b from-[#A1ADFC] via-[#2563EB] to-[#2563EB] relative">
        <div className='flex justify-center h-full items-center'>
          <img
            src={authLogo}
            alt="Logo"
            className="max-w-[200px] md:max-w-[300px]"
          />
        </div>
      </div>

      <div className="w-full md:w-[60%] bg-gradient-to-b from-[#4d60df70] via-[#e7e9ec85] to-[#c4c7ca27] flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-lg">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          <div className="text-4xl md:text-5xl text-gray-400 font-bold flex justify-center mb-6">
            <img src={authTwo} alt="" />
          </div>
           <p className="text-gray-800 text-center  font-bold text-2xl mb-4">
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
                className="w-full px-4 py-2 border bg-[#F8FCFF] border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>


            <div>
<Link to="/otp_verify">


              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-[#2A5CE6] text-white rounded-lg px-6 py-3 mt-6 text-lg font-medium transition-colors hover:bg-[#2A5CE6] ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
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