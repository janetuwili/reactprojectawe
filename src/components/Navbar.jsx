import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from 'bootstrap';
function Navbar() {
  return (
    <div>
        <div className='flex justify-content-between items-center '>
        <div className=''>
          <img style={{ width: "100%", height: "20vh" }} src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/90/awe-logo.jpg" />
        </div>
        <div className='space-x-5 no-underline px-1 '>
          <NavLink style={{ textDecoration: "none" }} to={'/'}>Home</NavLink>
          <NavLink style={{ textDecoration: "none" }} to={'/'}>About-Us</NavLink>
          <NavLink style={{ textDecoration: "none" }} to={'/'}>Program</NavLink>
          <NavLink style={{ textDecoration: "none" }} to={'/'}>Contact-Us</NavLink>
          <NavLink to={'/'}><Button style={{ padding: "10px" }}>Applynow</Button></NavLink>

        </div>
      </div>
    </div>
  )
}
export default  Navbar;
