import React, { useState } from 'react';
import Flower from '../../assets/black.jpeg';
import Footer from '../input/Footer';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('email', email);
        console.log('password', password);
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    return (
        <>
            <div className="signupContainer  flex items-center justify-center z-990 relative h-screen bg-gray-100">
                {/* =====images part==== */}
                <div className='absolute top-20 flex items-center transform -translate-x-1/2 md:left-10 md:transform-none'>
                    <img src={Flower} alt="Flower" className="w-20 sm:w-10  md:w-32 lg:w-auto" />
                </div>
                <div className="bg-white  p-8 w-11/12 md:w-1/2 rounded-lg h-auto absolute top-4  shadow-lg z-10">
                    {/* =====title of signup page ==== */}
                    <div className="title text-center">
                        <div className='font-bold text-2xl'>Sign-up and apply for free</div>
                        <div className='text-sm'>If you have already signed up, go to <a className='underline' href="">login</a> page</div>
                    </div>
                    {/* ====google button==== */}
                    <button className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 rounded-lg py-2 mb-4">
                        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
                        Login with Google
                    </button>
                    {/* =====or=== */}
                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-2 text-gray-500">Or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    {/* === form submit=== */}
                    <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" type="password" id="password" placeholder="Must be at least 8 letters" />
                        </div>
                        {/* ===name of candidate=== */}
                        <div className="nameOfCandidate flex flex-col md:flex-row md:space-x-4 mb-4">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="firstName">First Name</label>
                                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" type="text" id="firstName" placeholder="First Name" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="lastName">Last Name</label>
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" type="text" id="lastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <p className='text-sm mb-4'>By signing up, you agree to our <a className='underline' href="">terms and conditions</a></p>
                        {/* ===submit button ==== */}
                        <div className="button w-full h-full flex items-center">
                            <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-200" type="submit">Candidate Sign-up</button>
                        </div>
                    </form>
                    </div>
                    
                </div>   
           
            </div>
            <div className=''>

            <Footer  />
            </div>
        </>
    )
}

export default Signup;
