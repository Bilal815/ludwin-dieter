import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, Form, InputGroup, FormControl } from 'react-bootstrap';
import ProductList from '../ProductList/ProductList'

import RangeSlider from 'react-bootstrap-range-slider';

let path = process.env.PUBLIC_URL;
let promotionBtnImg = "/images/promotion-btn.svg";
let productSearchImg = "/images/product-search.svg";
let productListImg = "/images/product-list-grid.svg";
let productGridImg = "/images/product-grid.svg";
let shopBanner = "/images/shop-banner.png";

let filterImg = "/images/filter.svg";


const Shop = () => {

  const tooltipLabel = () => {
    return (
      <>
        <h1>afafa</h1>
      </>
    )
  }

  const [ value, setValue ] = useState(0); 

  return (
    <>
     <Container>
         <Row>
           <Col>
            <div className="page__banner">
                 <Row className='align-items-center'>
                     <Col lg="9">
                        <h1 className='text-uppercase'>Shop</h1>
                        <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Shop</Breadcrumb.Item>
                        </Breadcrumb>
                     </Col>
                     <Col lg="3"></Col>
                     <div className="my-account-banner-img"><img src={path + shopBanner } className="img-fluid" alt="Product image" /></div>
                 </Row>
             </div>
           </Col>
         </Row>
         <Row className='main__shop'>
             <Col lg="3" className='shop__left'>
                 <div className="product__filter__sidebar">

                 <div className="product__filter__box mb-5">
                   <div className="d-flex justify-content-between align-items-center">
                    <h3 className="product__filter__title">Price</h3>
                     
                      <img src={path + filterImg } className="img-fluid" alt="Product image" />
                   </div>
                        
                         <Form>
                           <div className="range">
                         <RangeSlider className='price__range__slider form-range'
      value={value}
      size={'lg'}
      tooltip={'on'}
      tooltipPlacement={'top'}
      onChange={changeEvent => setValue(changeEvent.target.value)}
    />
    <label htmlfor="customRange2" class="form-label">Range</label>

                           </div>




</Form>
                       
                     </div>

                    <div className="product__filter__box mb-5">
                         <h3 className="product__filter__title">Color</h3>
                     
                         <Form>
                       
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="radio__filters">

      <Form.Check
        inline
        label="1"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="2"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
       <Form.Check
        inline
        label="3"
        name="group1"
        type={type}
        id={`inline-${type}-3`}
      />
       <Form.Check
        inline
        label="4"
        name="group1"
        type={type}
        id={`inline-${type}-4`}
      />
       <Form.Check
        inline
        label="5"
        name="group1"
        type={type}
        id={`inline-${type}-5`}
      />
       <Form.Check
        inline
        label="6"
        name="group1"
        type={type}
        id={`inline-${type}-6`}
      />
       <Form.Check
        inline
        label="7"
        name="group1"
        type={type}
        id={`inline-${type}-7`}
      />
       <Form.Check
        inline
        label="8"
        name="group1"
        type={type}
        id={`inline-${type}-8`}
      />
        <Form.Check
        inline
        label="9"
        name="group1"
        type={type}
        id={`inline-${type}-9`}
      />
        <Form.Check
        inline
        label="10"
        name="group1"
        type={type}
        id={`inline-${type}-10`}
      />
    </div>
  ))}
</Form>
                       
                     </div>
                     <div className="product__filter__box mb-5">
                         <h3 className="product__filter__title">Categories</h3>
                         <nav>
                             <ul className='filter__menu p-0'>
                                 <li className="list-unstyled"><a className="text-decoration-none" href="">Eye Frames</a></li>
                                 <li className="list-unstyled"><a className="text-decoration-none" href="">Sun Glasses</a></li>
                                 <li className="list-unstyled"><a className="text-decoration-none" href="">Contact Lenses</a></li>
                                 <li className="list-unstyled"><a className="text-decoration-none" href="">Prescription Glasses</a></li>
                                 <li className="list-unstyled"><a className="text-decoration-none" href="">Accesories</a></li>
                             </ul>
                         </nav>
                     </div>
                 </div>
                <div className="promotion__widget">
                    <div className="promotion__content">
                        <h4>March <br />
                            Discount</h4>
                        <p>Up to 70% Off for All Items in March</p>
                        <a href='' className='btn promotion-btn mt-5'>Got it <img src={path + promotionBtnImg } alt="Product image" /></a>
                    </div>
                </div>
             </Col>
             <Col lg="9" className='shop__right'>
                 <Row>
                     <div className="product__search__filter">
                        <InputGroup>
                            <FormControl aria-label="Dollar amount (with dot and two decimal places)" placeholder="Search Products" />
                            <InputGroup.Text><img src={path + productSearchImg } alt="Product image" /></InputGroup.Text>
                        </InputGroup>
                     </div>
                 </Row>
                 <Row className='mb-4 mt-4 pt-3'>
                     <Col md="6"><span className='show__result_count text-secondary '>Showing 1-9 Results</span> </Col>
                     <Col>
                        <Row className='justify-content-end align-items-center sorting'>
                            <Col md="auto"><span className='text-dark'>Sort by</span></Col>
                            <Col md="auto">
                            <Form.Select aria-label="Default select example">
                                <option>Newest</option>
                                <option value="1">Oldest</option>
                                <option value="2">ASC</option>
                                <option value="3">DESC</option>
                            </Form.Select>
                            </Col>
                            <Col md="auto" className='hide-element'><img src={path + productListImg } alt="Product image" /></Col>
                            <Col md="auto" className='hide-element'><img src={path + productGridImg } alt="Product image" /></Col>
                        </Row>
                     </Col>
                 </Row>
                 <h3 className='text-uppercase mb-5'>Browse Products</h3>
                <ProductList />
                <Row className='text-center mb-5'>
                    <div><a href='' className='btn btn-style-1 black-outline-btn rounded-0' id='loadMore'>Load More</a></div>
                </Row>
             </Col>
         </Row>
     </Container> 
    </>
  )
}

export default Shop