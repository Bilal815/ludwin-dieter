import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



let path = process.env.PUBLIC_URL;
let catOne = "/images/cat-1.jpg";
let catTwo = "/images/cat-2.jpg";
let catThree = "/images/cat-3.jpg";
let catFour = "/images/cat-4.jpg";
let buttonArrow = "/images/right-arrow.svg";


const Categories = () => {
  return (
    <section className='home__category'>
        <Row className='justify-content-between mb-4'>
            <Col><h3 className='text-uppercase'>Categories</h3></Col>
            <Col className='text-end see__all__link'><a href="#">See All</a></Col>
        </Row>

        <Row>
            <Col lg="3" md="6">
                <Link to={'product-cat'} className='category__box'>
                    <img src={path + catOne } alt="category image 1" />
                    <h4>Eye Frames <img src={path + buttonArrow } alt="arrow" /></h4>
                </Link>
            </Col>

            <Col lg="3" md="6" >
                <Link to={'product-cat'} className='category__box'>
                    <img src={path + catTwo } alt="category image 1" />
                    <h4>Sun Glasses <img src={path + buttonArrow } alt="arrow" /></h4>
                </Link>
            </Col>

            <Col lg="3" md="6" >
                <Link to={'product-cat'} className='category__box'>
                    <img src={path + catThree } alt="category image 1" />
                    <h4>Eye Lenses <img src={path + buttonArrow } alt="arrow" /></h4>
                </Link>
            </Col>

            <Col lg="3" md="6" >
                <Link to={'product-cat'} className='category__box'>
                    <img src={path + catFour } alt="category image 1" />
                    <h4>Accessories <img src={path + buttonArrow } alt="arrow" /></h4>
                </Link>
            </Col>
        </Row>
    </section>
  )
}

export default Categories