import React from 'react'
import LogoImg from "../assets/logo.png"

const Logo = () => {
  return (
    <div className='max-w-[97px] w-full'>
      <img className='h-[26.9px]' src={LogoImg} alt="logo" />  
    </div>
  )
}

export default Logo