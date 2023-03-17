import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import '../App.css'

function Header() {
  return (
    <>
      <div className='flex justify-content-between items-center '>
        <div className=''>
          <img style={{ width: "100%", height: "20vh" }} src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/90/awe-logo.jpg" />
        </div>
        <div className='space-x-5 no-underline px-1 '>
          <NavLink style={{ textDecoration: "none" }} to={'/'}>Home</NavLink>
          <NavLink style={{ textDecoration: "none" }} to={'/'}>About-Us</NavLink>
          <NavLink style={{ textDecoration: "none" }} to={'/'}>Program</NavLink>
          <NavLink style={{ textDecoration: "none" }} to={'/'}>Contact-Us</NavLink>
          {/* <NavLink to={'/'}><Button style={{ padding: "10px" }}>Applynow</Button></NavLink> */}

        </div>
      </div>
      <div className='container'>
        <div className='about'>
          <h2>ABOUT
            AWE — RWANDA

          </h2>
          <p className='text'>
            U.S. Embassy Kigali announces the opening of applications for the 2nd cohort of the Academy for Women Entrepreneurs (AWE) training program, a Department of State initiative to support women entrepreneurs globally. Through the academy, Rwanda women entrepreneurs aged 18-35 will receive personalized business mentorship, as well as professional knowledge, tools and networks, in order to turn their ideas into successful businesses.
          </p>

        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <video controls>
              <source src="https://example.com/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <h2>AWE ACHIEVEMENT</h2>
            <p>The program will be carried out by the U.S. Embassy, in partnership with Igire Rwanda Organization and Noble Women. AWE uses DreamBuilder, an online training program on women’s entrepreneurship developed through a partnership between Arizona State University’s Thunderbird School of Management and Freeport-McMoRan. The curriculum teaches women to create their own business plans, understand how to raise capital, and connect with networks of successful business owners</p>
          </div>

        </div>

      </div>
      <div className=' listcontent grid grid-cols-5'>
        <div className='space-x-5'>
          <img style={{ width: "80%" }} src='https://d2v9ipibika81v.cloudfront.net/uploads/sites/90/awe-logo.jpg' />
          <div className='flex'>
            <FaInstagram size={20} />
            <FaFacebook size={20} />
            <FaTwitter size={20} />

          </div>
          <p>Copyright ©2023 by AWE-Rwanda, Inc. All rights reserved</p>
        </div>
        <div>
          <h4>Contact us</h4>
          <p>623 Kacyiru St., 2nd Floor, Kigali Rwanda

            +250-788-737-287
            awerwanda@gmail.com</p>
        </div>
        <div>
          <h4>Account</h4>
          <ul>
            <li>Create account</li>
            <li>Sign in</li>
          </ul>
         

        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About AWE</li>
            <li>For business</li>
            <li>partners</li>
            <li>careers</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>AWE directory</li>
            <li>Help center</li>
            <li>privacy & terms</li>
            
          </ul>
        </div>

      </div>
    </>
  )
}
export default Header;
