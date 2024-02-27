import React, { Component } from 'react';
import { Button, Form, FormControl, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Nav, Container } from 'react-bootstrap';
import logo from './logo_boo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'

class Header extends Component {
  render() {
    return (
      <>
      <div>
        <Navbar collapseOnSelect expand='md' bg='success' variant='dark'>
          <Container>
            <NavbarBrand href='/'>
              <img 
                src={logo}
                height='30'
                width='30'
                className='d-inline-block align-top'
                alt='Logo'

              />
              {/* {""} */}
              BooKris
            </NavbarBrand>

            <NavbarToggle aria-controls='responsive-navbar-nav'/>
            <NavbarCollapse id='responsive-navbar-nav'>
              <Nav className="me-auto">
                <NavLink href='/'> Home </NavLink>
                <NavLink href='/about'> About us </NavLink>
                <NavLink href='/contacts'> Contacts </NavLink>
                <NavLink href='/blog'> Blog </NavLink>

              </Nav>
              <Form className='d-flex'>
                <FormControl
                  type='text'
                  placeholder='Search'
                  className='me-sm-2'
                />
                <Button variant='outline-info'>Search</Button>

              </Form>

            </NavbarCollapse>
          </Container>

        </Navbar>

        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/contacts' element={<Contacts/>} />
            <Route exact path='/blog' element={<Blog/>} />

          </Routes>


        </Router>

      </div>
      </>
    );
  }
}

export default Header;