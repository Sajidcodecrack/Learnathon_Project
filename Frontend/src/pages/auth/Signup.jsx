import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-light_grey p-5">
      <div className="bg-background p-8 rounded-2xl w-full max-w-[450px] shadow-lg">
        <h1 className="text-3xl text-center mb-2 font-heading font-bold text-dark_grey">Create Account</h1>
        <p className="text-center text-sub_text mb-8 font-secondary">
          Please fill in your details to create your account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="w-full px-4 py-3 border border-light_grey rounded-lg text-base focus:outline-none focus:border-primary font-secondary"
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-light_grey rounded-lg text-base focus:outline-none focus:border-primary font-secondary"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 border border-light_grey rounded-lg text-base focus:outline-none focus:border-primary font-secondary"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              className="w-full px-4 py-3 border border-light_grey rounded-lg text-base focus:outline-none focus:border-primary font-secondary"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-primary text-white rounded-lg text-base font-medium hover:bg-opacity-90 transition-colors mb-5 font-secondary"
          >
            Create Account
          </button>
        </form>

        <div className="relative text-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-light_grey"></div>
          </div>
          <div className="relative">
            <span className="px-2 text-sm text-sub_text bg-background font-secondary">
              Or Sign up with
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
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
