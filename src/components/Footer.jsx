import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import '../App'

function Footer() {
  return (
    <div className='list-footer bg-stone-800'>
        <div className='grid grid-cols-5'>
            <div>
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
            <div><h4>Account</h4>
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

    </div>
  )
}
export default  Footer;
