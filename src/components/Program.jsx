
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { Button } from "@material-tailwind/react";
  import React, { useRef, useState } from "react";
  // Import Swiper React components
  import { Swiper, SwiperSlide } from "swiper/react";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  
  
  
  // import required modules
  import { Navigation } from "swiper";
  

 function Program() {
  return (
    <>
    <div className='About'>
        <h2>ABOUT
            AWE — RWANDA

          </h2>
          <p>The Academy for Women Entrepreneurs program was created to provide women with the knowledge, networks, and access they need to start and grow successful businesses. The AWE program is a flexible educational opportunity that combines the online platform DreamBuilder with locally provided content, mentoring, and facilitation. Through DreamBuilder, a cohort of women learn core business skills such as strategic planning, marketing and finance, and then discuss the material with local facilitators and business partners.</p>

          <p>The program seeks to promote women’s social and economic empowerment, by teaching enterprising women how to launch and scale their businesses. AWE reinforces peer-to-peer learning, networking, and cohesion among the graduating classes of women entrepreneurs, while also demonstrating local business growth. AWE Rwanda has proven to be customized, impactful and a lifetime opportunity for our Kigali and Bugesera graduates. We look forward to reaching out to other participants from other parts of Rwanda.</p>

    </div>
    <div className='grid grid-cols-2 pt-5'>
        <div>
        <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZSUyMHRlYWNoJTIwc3R1ZGVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          
          
        />
      </CardHeader>
      <CardBody className="text-center">
        
        <Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, a voluptates odit excepturi aliquid quisquam quae, ab sint neque adipisci illo deserunt mollitia delectus quaerat consequatur dolores. Dolorem, in dolor?
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small"><Button>Apply-now</Button></Typography>
        
      </CardFooter>
    </Card>
        </div>
        <div>
        <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwdGVhY2glMjBzdHVkZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, a voluptates odit excepturi aliquid quisquam quae, ab sint neque adipisci illo deserunt mollitia delectus quaerat consequatur dolores. Dolorem, in dolor?
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3 ">
        <Typography variant="small"><Button>APPLY-NOW</Button></Typography>
      </CardFooter>
    </Card>
        </div>

    </div>
    <div className='slideshows'>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div>
            <img src="https://plus.unsplash.com/premium_photo-1661777740346-9659fcdfe834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHN0dWRlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://images.unsplash.com/photo-1517842536804-bf6629e2c291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHN0dWRlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHN0dWRlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        </SwiperSlide>
        
      </Swiper>
    </div>
    </>
  )
}
export default Program;
