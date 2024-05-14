import React from 'react'

export default function Navbar() {
  return (
    <header className="header" data-header="">
    <div className="container">
      <a href="#" className="logo">
        <img
          src="./assets/images/logo.svg"
          width={32}
          height={32}
          alt="Cryptex logo"
        />
        Digital PayOut
      </a>
      <nav className="navbar" data-navbar="">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#" className="navbar-link active" data-nav-link="">
              Homepage
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link="">
              Buy Crypto
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link="">
              Markets
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link="">
              Sell Crypto
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link="">
              Blog
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link="">
              BITUSDT
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="nav-toggle-btn"
        aria-label="Toggle menu"
        data-nav-toggler=""
      >
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
      </button>
      <a href="login2.html" className="btn btn-outline">
        Account
      </a>
      <a href="register2.html" className="btn btn-outline">
        Register
      </a>
      {/* <a href="login.html" class="btn btn-outline">Wallet</a> */}
    </div>
  </header>
  
  )
}
