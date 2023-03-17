import React from 'react'
import '../App'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
 function Contact() {
  return (
    <div className='contact-form'>
     
      <div className='m-8 '>
      <Card color="transparent" shadow={false}>
      <Typography variant="h2" color="white" paddding ="10px">
      CONTACT-US
      </Typography>
      
      <form className=" content-form mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
        <div className=" field mb-4 flex flex-col gap-6 w-20 m-10">
         
          <Input size="lg" label="First Name" />
          <Input size="lg" label="Last Name" />
         
          <Input size="lg" label="Email" />
         
          <Textarea size='' label='Fill your message'/>
        </div>
        
        
        <Button className="mt-3 m-10 bg-black text-white" >
          APPLY NOW
        </Button>
        
      </form>
    </Card>

      </div>
    </div>
  )
}
export default Contact
