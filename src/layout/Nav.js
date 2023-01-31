import React from 'react'
import '../style/Nav.css';

import { BsBasket2Fill,BsPersonCircle } from "react-icons/bs";

const Nav = () => {
  return (
    <div className='Nav'>
        <div className='logo'>
            <h2>Furnitures</h2>
        </div>
        <div className='navtext'>
            <h3> Home </h3>
            <h3> Shop </h3>
            <h3> About Us</h3>
            <h3> Contact </h3>
        </div>
        <div className='navcart'>
          <div className='icon'><BsBasket2Fill/></div>
          <div className='icon'><BsPersonCircle/></div>
        </div>
    </div>
  )
}

export default Nav