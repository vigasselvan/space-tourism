import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg'

export default function nav() {
  return (
    <div className='navBar'>
        <img className='logoImg' src={logo} alt='logo'/>
        <hr className='navHr'></hr>
        <ul className='navs'>
            <li> <Link to="/">00  HOME</Link> </li>
            <li> <Link to='/destination'>01 DESTINATION</Link> </li>
            <li> <Link to='/crew'>02 CREW</Link> </li>
            <li> <Link to='/technology'>03 TECHNOLOGY</Link> </li>
        </ul> 
        
    </div>
  )
}
