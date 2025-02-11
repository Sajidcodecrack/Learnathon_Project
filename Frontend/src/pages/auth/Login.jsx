import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-light_grey p-5">
      <div className="bg-background p-8 rounded-2xl w-full max-w-[450px] shadow-lg">
        <h1 className="text-3xl text-center mb-2 font-heading font-bold text-dark_grey">Login</h1>
        <p className="text-center text-sub_text mb-8 font-secondary">
          Hey, Enter your details to get sign in to your account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Enter Email / Phone No"
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              className="w-full px-4 py-3 border border-light_grey rounded-lg text-base focus:outline-none focus:border-primary font-secondary"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Passcode"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              className="w-full px-4 py-3 border border-light_grey rounded-lg text-base focus:outline-none focus:border-primary font-secondary"
            />
          </div>

          <div className="mb-5">
            <a href="#" className="text-sub_text hover:text-dark_grey font-secondary">
              Having trouble in sign in?
            </a>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-primary text-white rounded-lg text-base font-medium hover:bg-opacity-90 transition-colors mb-5 font-secondary"
          >
            Sign in
          </button>
        </form>

        <div className="relative text-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-light_grey"></div>
          </div>
          <div className="relative">
            <span className="px-2 text-sm text-sub_text bg-background font-secondary">
              Or Sign in with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          <button className="flex items-center justify-center gap-2 py-2.5 border border-light_grey rounded-lg hover:bg-light_grey transition-colors font-secondary">
            <FcGoogle className="text-xl" />
            <span className="text-sm">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 border border-light_grey rounded-lg hover:bg-light_grey transition-colors font-secondary">
            <FaApple className="text-xl" />
            <span className="text-sm">Apple ID</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 border border-light_grey rounded-lg hover:bg-light_grey transition-colors font-secondary">
            <FaFacebook className="text-xl text-blue-600" />
            <span className="text-sm">Facebook</span>
          </button>
        </div>

        <p className="text-center text-sub_text font-secondary">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary font-medium hover:underline">
            Signup Now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;