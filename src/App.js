
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Program from './components/Program';
import Contact from './components/Contact';

 function App() {
  return (
    <>
    <div>
     <Nav/>
     
     <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/nav' element={<Nav/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/program' element={<Program/>}/>
     <Route path='/contact' element={<Contact/>}/>

     
     </Routes>
    </div>
    <Footer/>
    </>
    
  )
 
}

export default App;
