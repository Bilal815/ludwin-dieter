import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <Container>
        <Row className="text-center not__found__page m-5 p-5">
          <Col md={{ span: 6, offset: 3 }} className="bg-light p-5">
            <h1>404</h1>
            <h4 className='text-uppercase'>Page Not Found</h4>
            <p>The Page you are looking for is not found or does not exist.</p>
            <Link to="/" className="btn button">Back to Home</Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound