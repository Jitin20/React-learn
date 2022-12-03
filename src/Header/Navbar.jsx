import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
   <NavLink to="/" style={{textDecoration:"none"}}>   <Navbar.Brand href="#home">Navbar</Navbar.Brand></NavLink>
      <Nav className="me-auto">
      <NavLink to = "/get" style={{textDecoration:"none"}}>  <li>Home</li></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to = "/create" style={{textDecoration:"none"}}><li>Create</li></NavLink>
        <li>Pricing</li>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigation