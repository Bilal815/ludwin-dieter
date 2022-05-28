import React from 'react'

let path = process.env.PUBLIC_URL;
let homeCTABannerTwoImage = "/images/home-cta-banner-1.jpg";

const HomeCTAOne = () => {
  return (
    <>
            <section className='text-center text-uppercase cta-banner'>
            <img src={path + homeCTABannerTwoImage } alt="Banner" />
            <div className="cta-banner-content">
            <h3>Wear the outclass</h3>
            <h3>fashion glasses</h3>
            <div className='d-flex justify-content-center'>
            <a href='' className='btn btn-style-1 mt-5 me-3 white-bg-btn'>Explore</a>
            <a href='' className='btn btn-style-1 mt-5 ms-3'>Try Out</a>
            </div>
            
            </div>
        </section>
    </>
  )
}

export default HomeCTAOne