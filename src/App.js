import logo from './logo.svg';
//import './App.css';
import './Sass/main.css'
import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Links from './Links/Links';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import { pageDetails } from './Mock/Mock';


class App extends Component{
  render() {
    return(
    <div className="App">
      <>
      <Links/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />



        {/* {
          pageDetails.map(({name, path})=>{
            
            return (
              <>
              <Route path={path} element={name} />
              </>
            )
          })
        } */}
      </Routes>
      </>








        {/* <nav className='navBar'>
          <img src="../images/mphasisLogo.png" alt="not found" />
          <ul>
            <li>
              <Link className='links' to='/'>Home</Link>
            </li>
            <li>
              <Link className='links' to='about'>About</Link>
            </li>
            <li>
              <Link className='links' to='services'>Services</Link>
            </li>
          </ul>
        </nav> */}
     

    </div>
    )
  };
}

export default App;
