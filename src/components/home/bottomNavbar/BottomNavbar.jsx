import React from 'react'
import { Link } from 'react-router-dom'
import './BottomNavbar.css'

const BottomNavbar = () => {
  return (
    <div className='bottom-navbar'>
        <ul className='bottom-navbar-list'>
            <li>
                <Link to='/' className='item'>WINTERWEAR</Link>
            </li>
            <li>
                <Link to='/' className='item'>MEN</Link>
            </li>
            <li>
                <Link to='/' className='item'>WOMEN</Link>
            </li>
            <li>
                <Link to='/' className='item'>PLUS SIZE</Link>
            </li>
        </ul>
    </div>
  )
}

export default BottomNavbar