import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-bold text-red-600 animate-bounce">404</h1>
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">Oops! Page Not Found</h2>
        <p className="text-gray-500 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/" className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg shadow-lg text-sm font-medium">
          <FaHome className="text-lg" />
          Back to Home
        </Link>

        
      </div>
    </div>
  );
};

export default Error;