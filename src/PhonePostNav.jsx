import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from "react-icons/fa";
export default function PhoneNav({ text, handler }) {
    return (
        <nav className='PhoneNav mobi'>
		<Button variant="transparent"><FaArrowLeft style={{color:'white'}}/></Button>
		<Button variant="outline-light" onClick={handler}>{text}</Button>
	</nav>
    )
}