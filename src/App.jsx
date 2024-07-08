import React from 'react'
import Login from './components/candidateSignup/Login';
import { Routes,Route } from 'react-router-dom';
import Signup from './components/candidateSignup/Signup';

const App = () => {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/s' element={<Signup/>}/>
      </Routes>
    
    
      
    </>
  )
}

export default App
