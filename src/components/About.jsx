import React from 'react'
import { useState } from 'react';
import '../App'

 function About() {
  const [showText, setShowText] = useState(true);
  return (
    <div className='container-About'>
        <div className='about'>
          <h2>ABOUT
            AWE — RWANDA

          </h2>
          {showText && (
          <p className='text' >
            U.S. Embassy Kigali announces the opening of applications for the 2nd cohort of the Academy for Women Entrepreneurs (AWE) training program, a Department of State initiative to support women entrepreneurs globally. Through the academy, Rwanda women entrepreneurs aged 18-35 will receive personalized business mentorship, as well as professional knowledge, tools and networks, in order to turn their ideas into successful businesses.
          </p>
           )}

        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='video-content'>
          <video controls>
        <source src="https://youtu.be/C09DUw_JNDo" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </div>
          <div className='left-content'>
            <h2>AWE ACHIEVEMENT</h2>
            <p>The program will be carried out by the U.S. Embassy, in partnership with Igire Rwanda Organization and Noble Women. AWE uses DreamBuilder, an online training program on women’s entrepreneurship developed through a partnership between Arizona State University’s Thunderbird School of Management and Freeport-McMoRan. The curriculum teaches women to create their own business plans, understand how to raise capital, and connect with networks of successful business owners</p>
          </div>

        </div>

    </div>
  )
}
export default About;
