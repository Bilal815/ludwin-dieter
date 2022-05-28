import React from 'react'


let path = process.env.PUBLIC_URL;
let homeCTABannerTwoImage = "/images/home-cta-banner-2.jpg";

const HomeCTATwo = () => {
  return (
    <section className='text-center text-uppercase cta-banner'>
        <img src={path + homeCTABannerTwoImage } alt="Banner" />
        <div className="cta-banner-content">
        <h3>having difficulty choosing? </h3>
        <h3>Try Before You Buy</h3>
        <a href='' className='btn btn-style-1 mt-5'>TryOn Now!</a>
        </div>
    </section>
  )
}

export default HomeCTATwo