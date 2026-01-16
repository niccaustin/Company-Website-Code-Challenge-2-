import React, { useState } from 'react';
import Backendless from 'backendless';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState(''); // Added state for the name/username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = new Backendless.User();
      (user as any).name = name; // Assign the name/username to the Backendless user object
      user.email = email;
      user.password = password;
      
      await Backendless.UserService.register(user);
      alert("Registration Successful! Please check your email for verification.");
      navigate('/login'); // Redirect to login
    } catch (error: any) {
      alert(`Registration Failed: ${error.message}`);
      setIsLoading(false);
    }
  };

  const inputStyle = "w-full p-4 rounded-lg bg-white/70 backdrop-blur-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#AB6B2E] text-gray-800 placeholder-gray-500 shadow-md";
  const buttonStyle = "w-full bg-[#AB6B2E] text-white font-bold p-4 rounded-lg shadow-xl hover:bg-[#B8834E] transition duration-300 disabled:opacity-50";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#FFDCAB] via-[#B8834E] to-[#AB6B2E] p-4">
      <form onSubmit={handleRegister} className="bg-white/90 p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Create Account</h1>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full Name or Username"
            value={name}
            onChange={e => setName(e.target.value)}
            className={inputStyle}
            required
          />
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
          {isLoading ? 'Registering...' : 'Sign Up'}
        </button>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#AB6B2E] font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;