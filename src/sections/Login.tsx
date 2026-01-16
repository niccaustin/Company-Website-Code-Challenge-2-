import React, { useState } from 'react';
import Backendless from 'backendless';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      // Third parameter 'true' keeps them logged in after closing browser
      const loggedInUser = await Backendless.UserService.login(email, password, true);
      setUser(loggedInUser); 
      navigate('/'); // Go home
    } catch (error: any) {
      alert(`Login Failed: ${error.message}`);
      setIsLoading(false); // Stop loading on error
    }
  };

  // Reusable styles for consistency
  const inputStyle = "w-full p-4 rounded-lg bg-white/70 backdrop-blur-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#AB6B2E] text-gray-800 placeholder-gray-500 shadow-md";
  const buttonStyle = "w-full bg-[#AB6B2E] text-white font-bold p-4 rounded-lg shadow-xl hover:bg-[#B8834E] transition duration-300 disabled:opacity-50";


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#FFDCAB] via-[#B8834E] to-[#AB6B2E] p-4">
      <form onSubmit={handleLogin} className="bg-white/90 p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Sign In</h1>

        <div className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={inputStyle}
            required
          />
        </div>
        
        <button type="submit" disabled={isLoading} className={`${buttonStyle} mt-8`}>
          {isLoading ? 'Logging In...' : 'Login'}
        </button>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#AB6B2E] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;