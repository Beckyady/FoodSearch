import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import './navbar.css';
import logo from './logo.jpg';
import Search from '../search/search';




function Navigation(){
return(
    <div className=' navbody'>
    
    <div><img src={logo} alt='logo' className='logo' /></div>
    <Navbar className='Navbar'  expand='lg' >
    <div className="nav" >
      <Nav >
        <Nav.Item >
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link href="/about">About Us</Nav.Link>
        </Nav.Item>
          <Nav.Item >
          <Nav.Link href="/gallery">Gallery</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link href="/search">Search for food</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
    </Navbar>
    <div >

    </div>
      </div>
)
}
export default Navigation ;

// as="li"