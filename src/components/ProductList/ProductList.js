import React from 'react'
import { Row, Col } from 'react-bootstrap'

let path = process.env.PUBLIC_URL;
let productImg1 = "/images/product-1.png";
let productImg2 = "/images/product-2.png";
let productImg3 = "/images/product-3.png";
let productImg4 = "/images/product-4.png";

const ProductList = () => {
  return (
    <>
         <Row>
         <Col lg="4" md="6" className="product__col">
                <div className='product__card'>
                    <a href='' className='product__image'>
                        <img src={path + productImg1 } alt="Product image" />
                    </a>
                    <div className="product__date">
                        <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="4" md="6" className="product__col">
                <div className='product__card'>
                    <a href='' className='product__image'>
                        <img src={path + productImg2 } alt="Product image" />
                    </a>
                    <div className="product__date">
                        <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="4" md="6" className="product__col">
                <div className='product__card'>
                    <a href='' className='product__image'>
                        <img src={path + productImg3 } alt="Product image" />
                    </a>
                    <div className="product__date">
                        <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="4" md="6" className="product__col">
                <div className='product__card'>
                    <a href='' className='product__image'>
                        <img src={path + productImg4 } alt="Product image" />
                    </a>
                    <div className="product__date">
                        <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>
            <Col lg="4" md="6" className="product__col">
                <div className='product__card'>
                    <a href='' className='product__image'>
                        <img src={path + productImg1 } alt="Product image" />
                    </a>
                    <div className="product__date">
                        <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="4" md="6" className="product__col">
                <div className='product__card'>
                    <a href='' className='product__image'>
                        <img src={path + productImg2 } alt="Product image" />
                    </a>
                    <div className="product__date">
                        <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="4" md="6" className="product__col">
                <div className='product__card'>
                    <a href='' className='product__image'>
                        <img src={path + productImg3 } alt="Product image" />
                    </a>
                    <div className="product__date">
                        <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="4" md="6" className="product__col">
                <div className='product__card'>
                    <a href='' className='product__image'>
                        <img src={path + productImg4 } alt="Product image" />
                    </a>
                    <div className="product__date">
                        <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>

            <Col lg="4" md="6" className="product__col">
                <div className='product__card'>
                    <a href='' className='product__image'>
                        <img src={path + productImg2 } alt="Product image" />
                    </a>
                    <div className="product__date">
                        <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                        <span className='product__category__name'>Eye Glasses</span>
                    <div class="product__price">
                      <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                        </span></span>
                    </div>

                    </div>
                </div>
            </Col>
            
        </Row>
    </>
  )
}

export default ProductList