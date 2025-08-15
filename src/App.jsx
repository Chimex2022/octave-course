import React from 'react'
import HomePage from './pages/home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        {/* <Route path={"/signin"} element={<SignIn />} />
        <Route path={"/signup"} element={<SignUp />} /> */}
     
      </Routes>
      <Footer />
    </div>
  )
}

export default Home