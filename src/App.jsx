import React, { useState, useEffect } from 'react';
import Navigation from './Navigation'
import FirstPage from './FirstPage'
import PostNavigation from './PostNavigation'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from './Post'
import Posts from './Posts'
import Postimg1 from './assets/post-img-1.jpg'
import Postimg2 from './assets/post-img-2.jpg'
import Postimg3 from './assets/post-img-3.jpg'
import Postimg4 from './assets/post-img-4.jpg'
import Postimg5 from './assets/post-img-5.jpg'
import Postimg6 from './assets/post-img-6.jpg'

import { FaRegPenToSquare, FaBook, FaCalendar, FaBriefcase, FaGraduationCap, FaNewspaper } from "react-icons/fa6";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import './App.css'

export default function App() {
    const [showNav, setShowNav] = useState(true)

    function show() {
        const mql = window.matchMedia("(max-width:800px)")
        if (mql.matches) {
            setShowNav(false)
        }
    }
    useEffect(() => {
        show()
    })
    return ( < > { showNav && <Navigation/> }
        <FirstPage/> <
        PostNavigation / >
        <Posts>
       <Post
    img={Postimg1}
    type='Education'
    heading="React Online Course"
    cont="Learn React from scratch with our online course..."
    author="Aakash Khamaru"
    icon={<FaBook />}
  /> <Post
    img={Postimg2}
    type='Event'
    heading="Tech Conference 2023"
    cont="Join us for the latest insights in technology and innovation..."
    author="Tech Events Inc."
    icon={<FaCalendar />}
  /><Post
    img={Postimg3}
    type='Job'
    heading="Software Engineer Position"
    cont="We are hiring a skilled Software Engineer to join our team..."
    author="Tech Innovations Ltd."
    icon={<FaBriefcase />}
  /><Post
    img={Postimg4}
    type='Education'
    heading="Advanced JavaScript Workshop"
    cont="Take your JavaScript skills to the next level with our advanced workshop covering modern frameworks and best practices..."
    author="CodeMaster"
    icon={<FaGraduationCap />}
  /><Post
    img={Postimg5}
    type='Event'
    heading="Web Development Summit 2023"
    cont="Join industry experts and developers from around the world at the Web Development Summit to explore the latest trends and technologies..."
    author="TechConferences LLC"
    icon={<FaCalendar />}
  /><Post
    img={Postimg6}
    type='Article'
    heading="The Impact of Artificial Intelligence on Society"
    cont="Explore the ethical and societal implications of the rapid advancements in artificial intelligence and machine learning..."
    author="TechEthics Analyst"
    icon={<FaNewspaper />}
  /><Post
    img={Postimg1}
    type='Job'
    heading="Frontend Developer Position"
    cont="We are seeking a creative and skilled Frontend Developer to join our dynamic team. Apply now to be part of exciting projects!"
    author="WebTech Solutions"
    icon={<FaBriefcase />}
  />

     </Posts>

        <
        />)
    }