import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import PhoneNav from './PhonePostNav';
export default function FirstPage() {
    const [isGroup, setIsGroup] = useState(false)

    function changeIsGroup() {
        setIsGroup(prev => !prev)
    }
    const text = (isGroup) ? 'Leave Group' : 'Join Group'
    return ( < div className = 'first-scroll' >
        <PhoneNav text = {text} handler={changeIsGroup}/> <
        div className = 'text' >
        <h2>Computer Engineering</h2> <
        p > A lot of computer engineers follow this < /p> < /
        div >

        <
        /div>)
    }