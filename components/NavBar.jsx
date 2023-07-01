import React from 'react'

const NavBar = () => {
  return (
    <div className='flex'>
      <div className='flex flex-row'>
        <h2 className='text-5xl'>Mid-Century Mindset</h2>
        <ul>
          <li>How It Started</li>
          <li>Explore Our Options</li>
          <li>How It Works</li>
        </ul>
        <ul>
          <li>Get Started</li>
          <li>Login</li>
        </ul>
      </div>        
    </div>
  )
}

export default NavBar