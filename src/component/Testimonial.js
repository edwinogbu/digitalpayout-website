import React from 'react'

export default function Testimonial() {
  return (
    <section className="section trend" aria-label="crypto trend" data-section="">
    <div className="container">
      <div id="cryptoCarousel" className="carousel slide" data-ride="carousel">
        {/* <div class="carousel-inner"> */}
        <div className="trend-tab">
          {/* <ul class="tab-nav text-center" style="border: 3px solid white"> */}
          {/* <ul class="tab-nav" style="display: flex; justify-content: center; align-items: center;"> */}
          <ul
            className="tab-nav"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "3px solid white",
              borderRadius: 50
            }}
          >
            <li className="mx-5" style={{ display: "inline-block" }}>
              <button className="tab-btn text-capitalize">
                Digital Payout Crypto Company
              </button>
            </li>
            <li style={{ display: "inline-block" }}>
              <h1 className="card-title text-center text-white">
                Clients Testimonials
              </h1>
            </li>
            <li className="mx-5">
              {/* Carousel controls */}
              <a
                className="carousel-control-prev"
                href="#cryptoCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon text-white"
                  aria-hidden="true"
                />
                Previous
                <span className="sr-only text-white">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#cryptoCarousel"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                Next
                <span className="sr-only text-white">Next</span>
              </a>
            </li>
          </ul>
          {/* <div id="cryptoCarousel" class="carousel slide" data-ride="carousel">   */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <ul className="tab-content">
                <li>
                  <div className="trend-card">
                    <div className="card-title-wrapper">
                      <img
                        src="./assets/images/testimonial/crt4.jpg"
                        width={250}
                        height={250}
                        alt="bitcoin logo"
                      />
                      <a href="#" className="card-title">
                        Bitcoin <span className="span">BTC/USD</span>
                      </a>
                    </div>
                    <data className="card-value" value="46168.95">
                      USD 46,168.95
                    </data>
                    <div className="card-analytics">
                      <data className="current-price" value="36641.20">
                        36,641.20
                      </data>
                      <div className="badge red">
                        The customer support at Digital Payout is excellent.
                        <br />
                        They helped me navigate complex transactions.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="trend-card active">
                    <div className="card-title-wrapper">
                      <img
                        src="./assets/images/testimonial/cert2.jpg"
                        width={250}
                        height={250}
                        alt="ethereum logo"
                      />
                      <a href="#" className="card-title">
                        Jane Smith <span className="span">ETH/USD</span>
                      </a>
                    </div>
                    <data className="card-value" value="3480.04">
                      USD 3,480.04
                    </data>
                    <div className="card-analytics">
                      <data className="current-price" value="36641.20">
                        36,641.20
                      </data>
                      <div className="badge green">
                        I've been using Digital Payout for years. <br />
                        Their cryptocurrency exchange platform is top-notch!
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="trend-card">
                    <div className="card-title-wrapper">
                      <img
                        src="./assets/images/testimonial/crt6.jpg"
                        width={250}
                        height={250}
                        alt="tether logo"
                      />
                      <a href="#" className="card-title">
                        Tether <span className="span">USDT/USD</span>
                      </a>
                    </div>
                    <data className="card-value" value={1.0}>
                      USD 1.00
                    </data>
                    <div className="card-analytics">
                      <data className="current-price" value="36641.20">
                        36,641.20
                      </data>
                      <div className="badge red">
                        Digital Payout's low fees and fast execution
                        <br />
                        make it my go-to platform for crypto trading.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="trend-card">
                    <div className="card-title-wrapper">
                      <img
                        src="./assets/images/testimonial/crto1.jpg"
                        width={250}
                        height={250}
                        alt="bnb logo"
                      />
                      <a href="#" className="card-title">
                        BNB <span className="span">BNB/USD</span>
                      </a>
                    </div>
                    <data className="card-value" value="443.56">
                      USD 443.56
                    </data>
                    <div className="card-analytics">
                      <data className="current-price" value="36641.20">
                        36,641.20
                      </data>
                      <div className="badge red">
                        Digital Payout's security features give me peace of mind.
                        <br />
                        My assets are safe!
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="carousel-item">
              <ul className="tab-content">
                <li>
                  <div className="trend-card">
                    <div className="card-title-wrapper">
                      <img
                        src="./assets/images/testimonial/cer5.jpg"
                        width={250}
                        height={250}
                        alt="bitcoin logo"
                      />
                      <a href="#" className="card-title">
                        Bitcoin <span className="span">BTC/USD</span>
                      </a>
                    </div>
                    <data className="card-value" value="46168.95">
                      USD 46,168.95
                    </data>
                    <div className="card-analytics">
                      <data className="current-price" value="36641.20">
                        36,641.20
                      </data>
                      <div className="badge red">
                        The customer support at Digital Payout is excellent.
                        <br />
                        They helped me navigate complex transactions.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="trend-card active">
                    <div className="card-title-wrapper">
                      <img
                        src="./assets/images/testimonial/cert2.jpg"
                        width={250}
                        height={250}
                        alt="ethereum logo"
                      />
                      <a href="#" className="card-title">
                        Esther <span className="span">ETH/USD</span>
                      </a>
                    </div>
                    <data className="card-value" value="3480.04">
                      USD 3,480.04
                    </data>
                    <div className="card-analytics">
                      <data className="current-price" value="36641.20">
                        36,641.20
                      </data>
                      <div className="badge green">
                        I've been using Digital Payout for years.
                        <br />
                        Their cryptocurrency exchange platform is top-notch!
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="trend-card">
                    <div className="card-title-wrapper">
                      <img
                        src="./assets/images/testimonial/crt4.jpg"
                        width={250}
                        height={250}
                        alt="tether logo"
                      />
                      <a href="#" className="card-title">
                        Theresa Paul
                      </a>
                    </div>
                    <data className="card-value" value={1.0}>
                      USD 1.00
                    </data>
                    <div className="card-analytics">
                      <span className="span">USDT/USD</span>
                      <data className="current-price" value="36641.20">
                        36,641.20
                      </data>
                      <div className="badge  text-primary">
                        Digital Payout's low fees and fast execution <br />
                        make it my go-to platform for crypto trading.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="trend-card">
                    <div className="card-title-wrapper">
                      <img
                        src="./assets/images/testimonial/crt6.jpg"
                        width={250}
                        height={250}
                        alt="bnb logo"
                      />
                      <a href="#" className="card-title">
                        Barnard Joe<span className="span">BNB/USD</span>
                      </a>
                    </div>
                    <data className="card-value" value="443.56">
                      USD 443.56
                    </data>
                    <div className="card-analytics">
                      <data className="current-price" value="36641.20">
                        36,641.20
                      </data>
                      <div className="badge  text-secondary">
                        Digital Payout's security features give me peace of mind.
                        <br />
                        My assets are safe!
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  </section>
  
  )
}
