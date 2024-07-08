import React, { useState } from 'react';
import Flower from '../../assets/Flower.png'
import Footer from '../input/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('email', email);
        console.log('password', password);
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <div className="bg-black overflow-hidden flex items-center justify-center min-h-screen relative">
                <div className='absolute   sm:w-10 sm:z-1 top-20 left-5 md:left-16 lg:w-auto md:w-40'>
                    <img className='w-20 sm:w-10 lg:w-auto md:w-40' src={Flower} alt="Flower" />
                </div>
                <div className="bg-white absolute z-10 space-y-2 right-5 top-3 md:right-20 rounded-lg shadow-lg p-8 w-11/12 md:w-1/2 max-w-md">
                    <div className="flex justify-between mb-6">
                        <button className="text-orange-500 font-semibold border-b-2 border-orange-500 pb-2">Candidate</button>
                        <button className="text-gray-500 font-semibold pb-2">Employer</button>
                    </div>
                    <button className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 rounded-lg py-2 mb-4">
                        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
                        Login with Google
                    </button>
                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-2 text-gray-500">Or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" type="password" id="password" placeholder="Must be at least 8 letters" />
                        </div>
                        <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-200" type="submit">Login</button>
                    </form>
                    <div className="text-right mt-4">
                        <a href="#" className="text-orange-500 hover:underline">Forgot password?</a>
                    </div>
                </div>

                {/* images container ====Footer====*/}
               <Footer/>
            </div>
        </>
    )
}

export default Login;
