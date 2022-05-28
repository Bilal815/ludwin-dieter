import React from 'react'
let path = process.env.PUBLIC_URL;
let homeCTABannerTwoImage = "/images/home-cta-banner-2.jpg";

const HomeCTAThree = () => {
  return (
    <>
      <div className="pb-3 pt-3"></div>
         <section className='text-center text-uppercase cta-banner'>
        <img src={path + homeCTABannerTwoImage } alt="Banner" />
        <div className="cta-banner-content">
        <h3>Looking for premium  </h3>
        <h3>EYEWEAR?</h3>
        <a href='' className='btn btn-style-1 mt-5 button rounded-0'>SHOP NOW!!</a>
        </div>
    </section>
    <div className="pb-2 pt-2"></div>
    </>
  )
}

export default HomeCTAThree