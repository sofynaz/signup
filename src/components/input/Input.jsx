import React from 'react'

const Input = () => {
    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500" type="email" id="email" placeholder="Enter your email" />
            </div>
        </>
    )
}

export default Input

