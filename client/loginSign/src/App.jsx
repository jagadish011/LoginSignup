import { useState } from 'react'
import SignUp from './signUp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
