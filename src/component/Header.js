import React from 'react'

export default function Header() {
  return (
    <section className="section hero " aria-label="hero" data-section="">
    <div className="container-fluid section-hero">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{
              backgroundImage: 'url("./assets/images/testimonial/crt4.jpg")'
            }}
          >
            <div className="hero-content text-center">
              <h1 className="h1 hero-title">Bryan Adams</h1>
              <p className="hero-text text-light caption-left">
                Digital PayOut is the easiest, safest, and fastest way to buy
                &amp; sell crypto asset exchange.
              </p>
              <a href="#" className="btn btn-primary mt-5">
                Get started now
              </a>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              backgroundImage: 'url("./assets/images/testimonial/cert2.jpg")'
            }}
          >
            <div className="hero-content text-center">
              <h1 className="h1 hero-title">David Johnson</h1>
              <p className="hero-text text-white font-weight-bold caption-left">
                Thanks to Digital PayOut,
                <br /> I've been able to diversify my investment portfolio with
                ease.
                <br /> Their platform is top-notch!
              </p>
              <a href="#" className="btn btn-primary mt-5">
                Explore
              </a>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{
              backgroundImage: 'url("./assets/images/testimonial/crt6.jpg")'
            }}
          >
            <div className="hero-content text-center">
              <h1 className="h1 hero-title">Jan Johnson</h1>
              <p className="hero-text text-white caption-left">
                Thanks to Digital PayOut,
                <br /> I've been able to diversify my investment portfolio with
                ease.
                <br /> Their platform is top-notch!
              </p>
              <a href="#" className="btn btn-primary">
                Discover
              </a>
            </div>
          </div>
          {/* Add more carousel items as needed */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
  
  )
}
