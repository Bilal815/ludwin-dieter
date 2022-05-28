import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

let path = process.env.PUBLIC_URL;
let productImg1 = "/images/product-1.png";
let productImg2 = "/images/product-2.png";
let productImg3 = "/images/product-3.png";
let productImg4 = "/images/product-4.png";


const HomeProducts = () => {
  return (
    <section className='home__products'>
        <Row className='text-center text-uppercase primary__content__row'>
            <h2>Wear the outclass <br />
fashion glasses</h2>
        </Row>
        <Row>
            <Col lg="3" md="6" className="product__col">
                <div className='product__card'>
                    <Link to='/single-product' className='product__image'>
                        <img src={path + productImg1 } alt="Product image" />
                    </Link>
                    <div className="product__date">
                        <Link to="/single-product" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></Link>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="3" md="6" className="product__col">
                <div className='product__card'>
                    <Link to='/single-product' className='product__image'>
                        <img src={path + productImg2 } alt="Product image" />
                    </Link>
                    <div className="product__date">
                        <Link to='/single-product' className='product__title'><strong>RAYBAN POLARIZED 3025</strong></Link>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="3" md="6" className="product__col">
                <div className='product__card'>
                    <Link to='/single-product' className='product__image'>
                        <img src={path + productImg3 } alt="Product image" />
                    </Link>
                    <div className="product__date">
                        <Link to='/single-product' className='product__title'><strong>RAYBAN POLARIZED 3025</strong></Link>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="3" md="6" className="product__col">
                <div className='product__card'>
                    <Link to='/single-product' className='product__image'>
                        <img src={path + productImg1 } alt="Product image" />
                    </Link>
                    <div className="product__date">
                        <Link to="/single-product" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></Link>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="3" md="6" className="product__col">
                <div className='product__card'>
                    <Link to='/single-product' className='product__image'>
                        <img src={path + productImg2 } alt="Product image" />
                    </Link>
                    <div className="product__date">
                        <Link to='/single-product' className='product__title'><strong>RAYBAN POLARIZED 3025</strong></Link>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="3" md="6" className="product__col">
                <div className='product__card'>
                    <Link to='/single-product' className='product__image'>
                        <img src={path + productImg3 } alt="Product image" />
                    </Link>
                    <div className="product__date">
                        <Link to='/single-product' className='product__title'><strong>RAYBAN POLARIZED 3025</strong></Link>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="3" md="6" className="product__col">
                <div className='product__card'>
                    <Link to='/single-product' className='product__image'>
                        <img src={path + productImg1 } alt="Product image" />
                    </Link>
                    <div className="product__date">
                        <Link to="/single-product" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></Link>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="3" md="6" className="product__col">
                <div className='product__card'>
                    <Link to='/single-product' className='product__image'>
                        <img src={path + productImg2 } alt="Product image" />
                    </Link>
                    <div className="product__date">
                        <Link to='/single-product' className='product__title'><strong>RAYBAN POLARIZED 3025</strong></Link>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            
        </Row>

        <Row className='text-center'>
            <div> <a href='' className='btn btn-style-1 mt-5  black-outline-btn explore-product-btn'>Explore Products</a></div>
        </Row>
    </section>
  )
}

export default HomeProducts