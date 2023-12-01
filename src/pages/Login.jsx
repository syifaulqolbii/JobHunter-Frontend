import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authAPI from '../modules/fetch/auth';
import { jwtDecode } from "jwt-decode";
import Navbar from "../components/Navbar.jsx";
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const redirectPath = determineRedirectPath(token);
      navigate(redirectPath);
    }
  }, []);

  const determineRedirectPath = (token) => {
    const decodedToken = jwtDecode(token); // Decode token menggunakan jwt-decode
    const role = decodedToken.role;

    if (role === 'user') {
      return '/homepage';
    } else if (role === 'company') {
      return '/dashboard';
    } else {
      console.error('Unknown role:', role);
      return '/';
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authAPI.login({ email, password });
      const { token, role } = response;
      localStorage.setItem('token', token);
      console.log('User role:', role);
            // Redirect based on the user's role
            if (role === 'user') {
              navigate('/homepage'); // Redirect to the homepage for regular users
            } else if (role === 'company') {
              navigate('/dashboard'); // Redirect to the dashboard for companies
            } else {
              // Handle unknown role
              console.error('Unknown role:', role);
            }
    } catch (error) {
      // Handle login error
      setError('Invalid email or password');
      console.error('Login error:', error);
    }
  };
      
  return (
    <>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
            </div>
        </section>
    </>
        
  );
};

export default Login;
