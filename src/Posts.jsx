import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

export default function Posts({children}) {
	return (<div className='posts'>
        <Container>
        	<Row>
        		<Col md={9}>{children}</Col>
        	</Row>
        </Container>
	</div>)
}