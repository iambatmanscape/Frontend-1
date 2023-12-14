import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'; 
import { FaCaretDown } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Navigation() {
  return ( <>
    <Navbar className="bg-body-white px-3 no-inflow">
       <Navbar.Brand style={{fontWeight:'700'}} href="#home">World of Warcraft</Navbar.Brand>
        <Navbar.Toggle />
         <Navbar.Collapse className='justify-content-center'>
         <Form className="d-flex ml-3">
         <FaMagnifyingGlass className='fa-magnifying-glass'/>
            <Form.Control
              type="search"
              className="me-2 round px-5"
              aria-label="Search"
              placeholder='Search'
            />
            </Form>
          </Navbar.Collapse> 
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Create account.<a className='sign-up-link' href="#login"> It's Free. <FaCaretDown /></a>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>

    </>)
}