import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FiEye } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

export default function Post({img,type,heading,cont,author,icon}) {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
       <Card.Subtitle>{icon} {type}</Card.Subtitle>
        <Card.Title>{heading}</Card.Title>
        <Card.Text className='text-secondary'>
          {cont}
        </Card.Text>
        <div className='lower'>
         <Card.Subtitle><CgProfile size='2em'/> {author}</Card.Subtitle>
         <Card.Subtitle><FiEye/> 1.4k views</Card.Subtitle>
        </div>
      </Card.Body>
    </Card>
  );
}

