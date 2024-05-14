import React from 'react'

export default function InstructionSection() {
  return (
    <section
    className="section instruction"
    aria-label="instruction"
    data-section=""
  >
    <div className="container">
      <h2 className="h2 section-title">How It Works</h2>
      <p className="section-text">
        Digital Payout makes buying and selling digital assets incredibly easy for
        me. I highly recommend it to anyone looking to get into crypto.
      </p>
      <ul className="instruction-list">
        <li>
          <div className="instruction-card">
            <figure className="card-banner">
              <img
                src="./assets/images/instruction-1.png"
                width={96}
                height={96}
                loading="lazy"
                alt="Step 1"
                className="img"
              />
            </figure>
            <p className="card-subtitle">Step 1</p>
            <h3 className="h3 card-title">Download the Digital Payout App</h3>
            <p className="card-text">
              Download the Digital Payout app from your app store to get started.
            </p>
          </div>
        </li>
        <li>
          <div className="instruction-card">
            <figure className="card-banner">
              <img
                src="./assets/images/instruction-2.png"
                width={96}
                height={96}
                loading="lazy"
                alt="Step 2"
                className="img"
              />
            </figure>
            <p className="card-subtitle">Step 2</p>
            <h3 className="h3 card-title">Connect Your Digital Wallet</h3>
            <p className="card-text">
              Connect your digital wallet securely to your Digital Payout account.
            </p>
          </div>
        </li>
        <li>
          <div className="instruction-card">
            <figure className="card-banner">
              <img
                src="./assets/images/instruction-3.png"
                width={96}
                height={96}
                loading="lazy"
                alt="Step 3"
                className="img"
              />
            </figure>
            <p className="card-subtitle">Step 3</p>
            <h3 className="h3 card-title">Start Trading</h3>
            <p className="card-text">
              Begin trading cryptocurrencies with ease using Digital Payout's
              intuitive platform.
            </p>
          </div>
        </li>
        <li>
          <div className="instruction-card">
            <figure className="card-banner">
              <img
                src="./assets/images/instruction-4.png"
                width={96}
                height={96}
                loading="lazy"
                alt="Step 4"
                className="img"
              />
            </figure>
            <p className="card-subtitle">Step 4</p>
            <h3 className="h3 card-title">Earn Money</h3>
            <p className="card-text">
              Explore various investment opportunities and earn profits through
              Digital Payout.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  
  )
}
