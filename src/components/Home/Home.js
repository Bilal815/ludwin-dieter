import React from 'react';
import HomeCTAOne from '../HomeCTAOne/HomeCTAOne';
import  Categories  from '../Categories/Categories';
import  HomeProducts  from '../HomeProducts/HomeProducts';
import HomeCTATwo from '../HomeCTATwo/HomeCTATwo';
import { Container } from 'react-bootstrap';


const Home = () => {
  return (
    <>
      <Container>
      <HomeCTAOne />
      <Categories />
      <HomeProducts />
      <HomeCTATwo />
      </Container>
    </>
  )
}

export default Home