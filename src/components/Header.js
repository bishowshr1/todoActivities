import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {



  return (
    <header className='bg-blue-900 text-white flex justify-between px-7 py-3 sticky top-0'>

      <h1 className='text-xl'>Sample Web</h1>


      <nav className='space-x-7'>

        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'> Contact</NavLink>
        <NavLink to='/view'> View</NavLink>



      </nav>





    </header>
  )
}

export default Header



