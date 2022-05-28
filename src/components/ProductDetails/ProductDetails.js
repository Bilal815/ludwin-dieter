import {React, useState} from 'react'
import ProductSlider from '../ProductSlider/ProductSlider'
import { Col, Container, Row, Breadcrumb, Form, Modal, Button } from 'react-bootstrap';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';
import Testimonials from '../Testimonials/Testimonials';


let path = process.env.PUBLIC_URL;
let singleProductBanner = "/images/single-product-banner.png";
let socialShareImg = "/images/social-share.svg";
let minusIcon = "/images/minus-icon.svg";
let plusIcon = "/images/plus-icon.svg";
let customizeIcon = "/images/customize-icon.svg";
let addToCartIcon = "/images/add-to-cart-icon.svg";

let productImg1 = "/images/product-1.png";
let productImg2 = "/images/product-2.png";
let productImg3 = "/images/product-3.png";
let productImg4 = "/images/product-4.png";

let distanceImg = "/images/product-customize/distance.svg";
let BifocalWithLine = "/images/product-customize/BIFOCAL-WITH-LINE.svg";
let readingImg = "/images/product-customize/reading.svg";
let progressiceNoLineImg = "/images/product-customize/PROGRESSIVE-NO-LINE.svg";
let photochromicImg = "/images/product-customize/PHOTOCHROMIC-DARK-IN-SUN.svg";
let clearLensesImg = "/images/product-customize/CLEAR-LENSES.svg";
let sunglassDarkImg = "/images/product-customize/SUNGLASSES-ALWAYS-DARK.svg";


// setup the step content
const step1Content = 
    <div>
        <h3 className='enter__description'>Enter your prescription details</h3>
        <Form className="gray__form product__customize__form">
            <div className='product__form__step__row mb-5 d-flex align-items-center'>
                <div className="product__form__step__content__col">
                <strong>PD</strong>
                <p>Pupillary Distance</p>
                </div>
                <div className="product__form__step__content__col product__form__step__big">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Select aria-label="Default select example" className='form-control'>
                        <option>Select PD Number *</option>
                        <option value="1">Select PD Number *</option>
                        <option value="2">Select PD Number *</option>
                        <option value="3">Select PD Number *</option>
                        </Form.Select>
                    </Form.Group> 
                </div>
                <div className="product__form__step__input__col">
                    <a href="#">I have 2 PDs</a>
                </div>
            </div>

            <div className='product__form__step__row mb-5 d-flex align-items-center'>
                <div className="product__form__step__content__col">
                <strong>Right Eye *</strong>
                <p>Oculus Dextrus</p>
                </div>
                <div className="product__form__step__input__col">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Select aria-label="Default select example" className='form-control'>
                        <option>Select SPH </option>
                        <option value="1">Select SPH </option>
                        <option value="2">Select SPH </option>
                        <option value="3">Select SPH </option>
                        </Form.Select>
                    </Form.Group> 
                </div>
                <div className="product__form__step__input__col">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Select aria-label="Default select example" className='form-control'>
                        <option>Select CYL </option>
                        <option value="1">Select CYL </option>
                        <option value="2">Select CYL </option>
                        <option value="3">Select CYL </option>
                        </Form.Select>
                    </Form.Group> 
                </div>
                <div className="product__form__step__input__col">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Select aria-label="Default select example" className='form-control'>
                        <option>Select Axis </option>
                        <option value="1">Select Axis </option>
                        <option value="2">Select Axis </option>
                        <option value="3">Select Axis </option>
                        </Form.Select>
                    </Form.Group> 
                </div>
                <div className="product__form__step__input__col">
                    <Form.Group  controlId="formBasicEmail">
                        <Form.Select aria-label="Default select example" className='form-control'>
                        <option>Select Add </option>
                        <option value="1">Select Add </option>
                        <option value="2">Select Add </option>
                        <option value="3">Select Add </option>
                        </Form.Select>
                    </Form.Group> 
                </div>
            </div>
            
            <div className='product__form__step__row mb-5 d-flex align-items-center'>
                <div className="product__form__step__content__col">
                <strong>Left Eye *</strong>
                <p>Oculus Dextrus</p>
                </div>
                <div className="product__form__step__input__col">
                    <Form.Group  controlId="formBasicEmail">
                        <Form.Select aria-label="Default select example" className='form-control'>
                        <option>Select SPH </option>
                        <option value="1">Select SPH </option>
                        <option value="2">Select SPH </option>
                        <option value="3">Select SPH </option>
                        </Form.Select>
                    </Form.Group> 
                </div>
                <div className="product__form__step__input__col">
                    <Form.Group  controlId="formBasicEmail">
                        <Form.Select aria-label="Default select example" className='form-control'>
                        <option>Select CYL </option>
                        <option value="1">Select CYL </option>
                        <option value="2">Select CYL </option>
                        <option value="3">Select CYL </option>
                        </Form.Select>
                    </Form.Group> 
                </div>
                <div className="product__form__step__input__col">
                    <Form.Group  controlId="formBasicEmail">
                        <Form.Select aria-label="Default select example" className='form-control'>
                        <option>Select Axis </option>
                        <option value="1">Select Axis </option>
                        <option value="2">Select Axis </option>
                        <option value="3">Select Axis </option>
                        </Form.Select>
                    </Form.Group> 
                </div>
                <div className="product__form__step__input__col">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Select aria-label="Default select example" className='form-control'>
                        <option>Select Add </option>
                        <option value="1">Select Add </option>
                        <option value="2">Select Add </option>
                        <option value="3">Select Add </option>
                        </Form.Select>
                    </Form.Group> 
                </div>
            </div>
            <div className='product__form__step__row mb-5 d-flex align-items-center'>
            {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3 text-dark fw-bold">
                <Form.Check 
                    type={type}
                    id={`default-${type}`}
                    label="Mark as PRISM"
                />
                </div>
            ))}
            </div>

        </Form>
    </div>
;
const step2Content = 
<div>
        <h3 className='enter__description'>Select Your RX Type</h3>
        <Form className="gray__form product__customize__form">

            <div className="step-2-contenet mb-5">

            <Row>
                <Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="customize-checkboxes">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                        />
                        </div>
                    ))}
                        <Col lg={'auto'} className='img-circle-col '>
                            <div className="img-circle">
                                <img src={path + distanceImg } className="img-fluid" alt="Product image" />
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>DISTANCE</h4>
                            <p>Corrects vision of distant objects, and is all time wear.</p>
                        </Col>
                    </Row>
                </Col>

<Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="customize-checkboxes">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                        />
                        </div>
                    ))}
                        <Col lg={'auto'} className='img-circle-col '>
                            <div className="img-circle">
                                <img src={path + readingImg  } className="img-fluid" alt="Product image" />
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>READING</h4>
                            <p>Corrects vision of near objects.</p>
                        </Col>
                    </Row>
                </Col>
                
            </Row>

           
            <Row>
            <Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="customize-checkboxes">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                            />
                            </div>
                        ))}
                        <Col lg={'auto'} className='img-circle-col'>
                            <div className="img-circle">
                                <img src={path + BifocalWithLine } className="img-fluid" alt="Product image" />
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>BIFOCAL WITH LINE</h4>
                            <p>Corrects near & distant vision and has visible line in the lense.</p>
                        </Col>
                    </Row>
                </Col> 

                <Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="customize-checkboxes">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                            />
                            </div>
                        ))}
                        <Col lg={'auto'} className='img-circle-col'>
                            <div className="img-circle">
                                <img src={path + progressiceNoLineImg } className="img-fluid" alt="Product image" />
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>PROGRESSIVE (NO LINE)   </h4>
                            <p>Corrects near & distant vision and does not have any visible line.</p>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
            </div>
       
        </Form>
</div>;
const step3Content = 
<div>
        <h3 className='enter__description'>Select Your Lense Type</h3>
        <Form className="gray__form product__customize__form">

            <div className="step-2-contenet mb-5">
            <Row>
                <Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="customize-checkboxes">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                        />
                        </div>
                    ))}
                        <Col lg={'auto'} className='img-circle-col '>
                            <div className="img-circle">
                                <img src={path + clearLensesImg } className="img-fluid" alt="Product image" />
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>CLEAR LENSES</h4>
                            <p>These lenses stay clear indoor and outdoor.</p>
                        </Col>
                    </Row>
                </Col>

<Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="customize-checkboxes">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                        />
                        </div>
                    ))}
                        <Col lg={'auto'} className='img-circle-col '>
                            <div className="img-circle">
                                <img src={path + sunglassDarkImg  } className="img-fluid" alt="Product image" />
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>SUNGLASSES (ALWAYS DARK)</h4>
                            <p>These are sunglasses, come in verity of colors. </p>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
            <Row>
            <Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="customize-checkboxes">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                            />
                            </div>
                        ))}
                        <Col lg={'auto'} className='img-circle-col'>
                            <div className="img-circle">
                                <img src={path + photochromicImg } className="img-fluid" alt="Product image" />
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>PHOTOCHROMIC (DARK IN SUN)</h4>
                            <p>These lenses have dark tint when they are in day light, and clear indoor.</p>
                        </Col>
                    </Row>
            </Col> 
  
            </Row>
            </div>
       
        </Form>
</div>;
const step4Content = 
<div>
        <h3 className='enter__description'>Select Lense Options</h3>
        <Form className="gray__form product__customize__form">

            <div className="step-2-contenet mb-5">
            <Row>
                <Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="customize-checkboxes">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                        />
                        </div>
                    ))}
                        <Col lg={'auto'} className='img-circle-col '>
                            <div className="img-circle">
                                <img src={path + clearLensesImg } className="img-fluid" alt="Product image" />
                                <strong>+$42</strong>
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>1.56 STANDARD LENSES</h4>
                            <p>These standard CR-39 Lenses are suitable for light prescription.</p>
                        </Col>
                    </Row>
                </Col>

<Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="customize-checkboxes">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                        />
                        </div>
                    ))}
                        <Col lg={'auto'} className='img-circle-col '>
                            <div className="img-circle">
                            <img src={path + clearLensesImg } className="img-fluid" alt="Product image" />
                            <strong>+$42</strong>
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>1.59 POLYCARBONATE</h4>
                            <p>These are highly impact resistant lenses. </p>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
            <Row>
            <Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="customize-checkboxes">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                            />
                            </div>
                        ))}
                        <Col lg={'auto'} className='img-circle-col'>
                            <div className="img-circle">
                                <img src={path + clearLensesImg } className="img-fluid" alt="Product image" />
                                <strong>+$42</strong>
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>1.61 THIN LENSES</h4>
                            <p>These type of lenses are suitable for medium strength prescriptions.</p>
                        </Col>
                    </Row>
            </Col> 
            <Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="customize-checkboxes">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                        />
                        </div>
                    ))}
                        <Col lg={'auto'} className='img-circle-col '>
                            <div className="img-circle">
                                <img src={path + clearLensesImg } className="img-fluid" alt="Product image" />
                                <strong>+$42</strong>
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>1.67 SUPER THIN LENSES</h4>
                            <p>These super thin lenses are recommended for strong prescription.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </div>
       
        </Form>
</div>;
const step5Content = 
<div>
        <h3 className='enter__description'>Select Lense Options</h3>
        <Form className="gray__form product__customize__form">

            <div className="step-2-contenet mb-5">
            <Row>
                <Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="customize-checkboxes">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                        />
                        </div>
                    ))}
                        <Col lg={'auto'} className='img-circle-col '>
                            <div className="img-circle">
                                <img src={path + clearLensesImg } className="img-fluid" alt="Product image" />
                                <strong>+$42</strong>
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>STANDARD COATINGS</h4>
                            <p>These standard CR-39 Lenses are suitable for light prescription.</p>
                        </Col>
                    </Row>
                </Col>

<Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="customize-checkboxes">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                        />
                        </div>
                    ))}
                        <Col lg={'auto'} className='img-circle-col '>
                            <div className="img-circle">
                            <img src={path + clearLensesImg } className="img-fluid" alt="Product image" />
                            <strong>+$42</strong>
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>PREMIUM COATINGS</h4>
                            <p>These are highly impact resistant lenses. </p>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
            <Row>
            <Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="customize-checkboxes">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                            />
                            </div>
                        ))}
                        <Col lg={'auto'} className='img-circle-col'>
                            <div className="img-circle">
                                <img src={path + clearLensesImg } className="img-fluid" alt="Product image" />
                                <strong>+$42</strong>
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>BLUE CUT DIGITAL PROTECTION</h4>
                            <p>These type of lenses are suitable for medium strength prescriptions.</p>
                        </Col>
                    </Row>
            </Col> 
            <Col lg={6} className="checkbox__box">
                    <Row className="checkbox__row align-items-center">
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="customize-checkboxes">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                        />
                        </div>
                    ))}
                        <Col lg={'auto'} className='img-circle-col '>
                            <div className="img-circle">
                                <img src={path + clearLensesImg } className="img-fluid" alt="Product image" />
                                <strong>+$42</strong>
                            </div>
                        </Col>
                        <Col className='content-col'>
                            <h4>NO COATINGS</h4>
                            <p>These super thin lenses are recommended for strong prescription.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </div>
       
        </Form>
</div>;
 
// setup step validators, will be called before proceeding to the next step
// function step2Validator() {
  
// }
 
// function step3Validator() {
  
// }
 
function onFormSubmit() {
  // handle the submit logic here
  // This function will be executed at the last step
  // when the submit button (next button in the previous steps) is pressed
}
 


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="product"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
        <h3 className='text-uppercase product__customize__title'>CUSTOMIZE “RAYBAN POLARIZED 3025”</h3>
<div className="multi__step__product__bar">
          <StepProgressBar
  startingStep={0}
  onSubmit={onFormSubmit}
  steps={[
    {
      label: 'Prescription',
      labelClass: "my-label",
      //subtitle: '20%',
      name: 'Prescription',
      content: step1Content
    },
    {
      label: 'RX Type',
      labelClass: "my-label",
      //subtitle: '40%',
      name: 'RX Type',
      content: step2Content,
      primaryBtnClass: 'asad-khan',
      //validator: step2Validator
    },
    {
      label: 'Lense Type',
      labelClass: "my-label",
     // subtitle: '60%',
      name: 'Lense Type',
      content: step3Content,
      //validator: step3Validator
    },
    {
        label: 'Lense Options',
        labelClass: "my-label",
        //subtitle: '80%',
        name: 'Lense Options',
        content: step4Content,
        //validator: step4Validator
    },
    {
    label: 'Coating',
    labelClass: "my-label",
    //subtitle: '100%',
    name: 'Coating',
    content: step5Content,
    //validator: step4Validator
    }
  ]}
/>

<div className="t__price">
    <strong>Total Price</strong>
    <p>$199</p>
</div>

</div>

        </Modal.Body>
      </Modal>
    );
  }

const ProductDetails = () => {

    const [modalShow, setModalShow] = useState(false);


  return (
      <>
        <Container>
        <Row>
            <Col>
             <div className="page__banner">
                 <Row className='align-items-center'>
                     <Col lg="9">
                        <h1 className='text-uppercase'>Product Details</h1>
                        <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Categories</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Galasses</Breadcrumb.Item>
                        <Breadcrumb.Item active>Rayban-Polarized-3025</Breadcrumb.Item>
                        </Breadcrumb>
                     </Col>
                     <Col lg="3"></Col>
                     <div className="my-account-banner-img"><img src={path + singleProductBanner } className="img-fluid" alt="Product image" /></div>
                 </Row>
             </div>
            </Col>
         </Row>
            <Row className='single__product__main'>
                <Col lg="7">
                    <div className="single__product__left">
                    <ProductSlider />
                    </div></Col>
                <Col lg="5">
                <div className="single__product__right">
                        <div className="product__summary">
                            <h2 className='single__product__title'>RAYBAN POLARIZED 3025</h2>
                            <p className='avalabilty mb-4 pb-2'>Avaliability : <strong>48 in stocks</strong></p>
                            <div className="priduct__variant">
                            <Row>
                                <Col lg="3"><h6>SKU</h6></Col>
                                <Col><p>: AA0031</p></Col>
                                <Col className='text-end'><img src={path + socialShareImg } alt="Product image" /></Col>
                            </Row>
                            <Row>
                                <Col lg="3"><h6>Category</h6></Col>
                                <Col>
                                    <ul className='prduct__data__list p-0'>
                                        <li>:</li>
                                        <li>Dresses</li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3"><h6>Tags</h6></Col>
                                <Col>
                                <ul className='prduct__data__list p-0'>
                                        <li>:</li>
                                        <li>Fashion</li>
                                        <li>Classic</li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row className='mb-4 pb-4 align-items-center'>
                                <Col lg="3"><h6>Select Size</h6></Col>
                                <Col>
                                <div className="product__variations p-0">
                      <div className="product__variations__row">
                   
                        <div className="product__variations__inner">
                          <div className="product__variations__swatches">
                            <input type="checkbox" className="form-check-input checkbox-style-1" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">XS</label>
                        </div>
                        <div className="product__variations__swatches">
                          <input type="checkbox" className="form-check-input checkbox-style-1" id="exampleCheck1" />
                          <label className="form-check-label" htmlFor="exampleCheck1">S</label>
                        </div>
                        <div className="product__variations__swatches">
                          <input type="checkbox" className="form-check-input checkbox-style-1" id="exampleCheck1" />
                          <label className="form-check-label" htmlFor="exampleCheck1">M</label>
                        </div>
                        </div>
                      </div>
                 
                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-4 pb-4 align-items-center'>
                                <Col lg="3"><h6>Select Color</h6></Col>
                                <Col>

                    <div className="product__variations">
                      <div className="product__variations__row ">
                        <div className="product__variations__inner">
                          <div className="product__variations__swatches product__variations__swatches--color" data-toggle="tooltip" data-placement="top" title="Black">
                            <input type="checkbox" className="form-check-input checkbox-style-1" id="exampleCheck1" style={{backgroundColor:"#441313"}} />
                            <label className="form-check-label" htmlFor="exampleCheck1"></label>
                        </div>
                        <div className="product__variations__swatches product__variations__swatches--color" data-toggle="tooltip" data-placement="top" title="Gray">
                          <input type="checkbox" className="form-check-input checkbox-style-1" id="exampleCheck1" style={{backgroundColor:"#C44040"}} />
                          <label className="form-check-label" htmlFor="exampleCheck1"></label>
                        </div>
                        <div className="product__variations__swatches product__variations__swatches--color" data-toggle="tooltip" data-placement="top" title="Navy Blue">
                          <input type="checkbox" className="form-check-input checkbox-style-1" id="exampleCheck1" style={{backgroundColor:"#48407D"}} />
                          <label className="form-check-label" htmlFor="exampleCheck1"></label>
                        </div>
                        </div>
                      </div>
                    </div>
                
                               
                                </Col>
                            </Row>
                            <Row className='mb-4 align-items-center'>
                                <Col lg="3"><h6>Quantity:</h6></Col>
                                <Col>
                                
                                <div class="input-group quantity">
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                            <img src={path + minusIcon } alt="Product image" />
                                        </button>
                                    </span>
                                    <input type="text" name="quant[1]" className="form-control input-quantity" value="8" min="8" max="30" />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                            <img src={path + plusIcon } alt="Product image" />
                                        </button>
                                    </span>
                                </div>
                                </Col>
                            </Row>
                            </div>
                            <Row className='mb-5'><p className='price'>
                                <strong>$199</strong>
                                <span className='price__old'>$1500</span>
                            </p></Row>
                            <div className='button__row d-flex'>
                                <div>
                                    <div  className='btn button-icon customize-product-btn' onClick={() => setModalShow(true)}><img src={path + customizeIcon } alt="Product image" />Customize</div>
                                </div>
                                <div>
                                    <a href='' className='btn button-icon add-to-cart-btn ms-3'><img src={path + addToCartIcon } alt="Product image" />Add to Cart</a>
                                </div>
                            </div>
                            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='product__details'>
                <Col lg="8" className='pe-5'>
                    <h4 className='product__details__title'>Description</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                </Col>
                <Col lg="4">
                    <h4 className='product__details__title'>Details</h4>
                    <ul>
                        <li>100% Cotton</li>
                        <li>Quick Dry</li>
                        <li>Ties as Shoulder</li>
                        <li>Accusantium doloremque </li>
                    </ul>
                </Col>
            </Row>

         


            <section className='people__also__bought'>
                <h4 className='text-uppercase people__also__bought__title'>People Also Baught</h4>
                    <Swiper
                    modules={[Navigation, A11y]}
                    navigation
                    spaceBetween={17}
                    slidesPerView={4}
                    breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 17,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 17,
                        },
                      }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
        >
                    <SwiperSlide>
                    <div  className="product__col">
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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product__col">
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
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product__col">
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
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product__col">
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
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div  className="product__col">
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
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <Row>
         
            <Testimonials />
           
            </Row>
        </Container>
      </>
  )
}

export default ProductDetails