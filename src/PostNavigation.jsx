import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { MdGroups } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
export default function PostNavigation() {
    return (<Container>
		<div className='posts'>
		 <ul className='post-type mt-1'>
		    <li><a className='no-line text-dark mobi fw-bold' href='#'>Posts(7)</a></li>
		   	<li><a className='no-line text-secondary active web' href='#'>All posts</a></li>
		   	<li><a className='no-line text-secondary web' href='#'>Article</a></li>
		   	<li><a className='no-line text-secondary web' href='#'>Event</a></li>
		   	<li><a className='no-line text-secondary web' href='#'>Education</a></li>
		   	<li><a className='no-line text-secondary web' href='#'>Job</a></li>
		   </ul>
		   <ul className='post-type ml-auto'>
		   	<li><Button variant='secondary' className='web'><FaPen/> Write a Post</Button></li>
		   	<li><Button variant='primary' className='web'><MdGroups style={{fontSize:'1.2rem'}}/> Join Group</Button></li>
		   	<li>
		   		<Form.Select aria-label="Default select example" className='mobi'>
                  <option value="all">All</option>
                  <option value="article">Article</option>
                  <option value="events">Event</option>
                  <option value="education">Education</option>
                  <option value="job">Job</option>
                </Form.Select>
		   	</li>
		   </ul>
		 </div>
		 </Container>)
}