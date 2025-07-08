import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(){
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();


const handleLogin=(e)=>{
   e.preventDefault();
    if (username && password) {
      // Redirect to Home Page
      navigate('/home');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (

    // Method 1: Flexbox centering (Most Common)
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="font-extrabold text-xl text-center mb-6">Login TO Your Account</h2>
        
        <div className="space-y-6">
          <div>
            <input 
              className="w-full p-3 border border-gray-400 text-lg rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          
          <div>
            <input 
              className="w-full p-3 border border-gray-400 text-lg rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            onClick={handleLogin}
            className="w-full p-3 border-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all duration-200 focus:ring-4 focus:ring-blue-200"
          >
            Login
          </button>
        </div>
      </div>
    </div>

  
  );
}

export default LoginPage;

























// import React, { useState } from 'react';
// import { Eye, EyeOff, Lock, User, LogIn } from 'lucide-react';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error when user starts typing
//     if (error) setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     // Basic validation
//     if (!formData.username || !formData.password) {
//       setError('Enter username & password ');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // Demo credentials - replace with actual authentication
//       if (formData.username === 'admin' && formData.password === 'password') {
//         alert('Login successful!');
//         // Here you would typically redirect to dashboard
//         // window.location.href = '/dashboard';
//       } else {
//         setError('Wrong username or password');
//       }
//     } catch (err) {
//       setError('failed to Login please try again later');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen from-blue-600 flex items-center justify-center p-4">
//       {/* Background Animation */}
      

//       {/* Login Container */}
//       <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 hover:scale-105">
//         {/* Logo/Header */}
//         <div className="text-center mb-8">
//           <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
//             <Lock className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
//           <p className="text-gray-600"> login yor Account</p>
//         </div>

//         {/* Error Message */}
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
//             {error}
//           </div>
//         )}

//         {/* Login Form */}
//         <div className="space-y-6">
//           {/* Username Field */}
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
//               Username
//             </label>
//             <div className="relative">
//               <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 value={formData.username}
//                 onChange={handleInputChange}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                 placeholder="Enter username"
//                 required
//               />
//             </div>
//           </div>

//           {/* Password Field */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                 placeholder="Enter password"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//               </button>
//             </div>
//           </div>

//           {/* Remember Me & Forgot Password */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               />
//               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                 Remember me
//               </label>
//             </div>
//             <a href="#" className="text-sm text-blue-600 hover:text-blue-500 transition-colors">
//               Password भूल गए?
//             </a>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isLoading ? (
//               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//             ) : (
//               <>
//                 <LogIn className="w-5 h-5" />
//                 <span>Login करें</span>
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;