import React from 'react'

export default function Footer() {
  return (
    <footer
    className="footer"
    style={{
      backgroundImage: 'url("./assets/images/cryptocurrency.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
    <div className="footer-top" data-section="">
      <div
        className="container"
        style={{
          backgroundImage: 'url("./assets/images/fly-coins.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff"
        }}
      >
        <div className="footer-brand">
          <a href="#" className="logo">
            <img
              src="./assets/images/logo.svg"
              width={50}
              height={50}
              alt="Digital Payout logo"
            />
            Digital Payout
          </a>
          <h2 className="footer-title">Let's talk! 🤙</h2>
          <a href="tel:+123456789101" className="footer-contact-link">
            +12 345 678 9101
          </a>
          <a
            href="mailto:hello.digitalpayout@gmail.com"
            className="footer-contact-link"
          >
            hello.digitalpayout@gmail.com
          </a>
          <address className="footer-contact-link">
            Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
          </address>
        </div>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Products</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              Spot
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Inverse Perpetual
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              USDT Perpetual
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Exchange
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Launchpad
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Digital Wallet
            </a>
          </li>
        </ul>
        <ul className="footer-list" style={{ color: "#fff" }}>
          <li>
            <p className="footer-list-title">Services</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              Buy Crypto
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Markets
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Trading Fee
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Affiliate Program
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Referral Program
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              API
            </a>
          </li>
        </ul>
        <ul className="footer-list" style={{ color: "#fff" }}>
          <li>
            <p className="footer-list-title">Support</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              Digital Payout Academy
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              User Feedback
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Submit a request
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              API Documentation
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Trading Rules
            </a>
          </li>
        </ul>
        <ul className="footer-list" style={{ color: "#fff" }}>
          <li>
            <p className="footer-list-title">About Us</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              About Digital Payout
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Authenticity Check
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Business Contacts
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom" style={{ color: "#fff" }}>
      <div className="container">
        <p className="copyright">
          © 2022 Digital Payout All Rights Reserved by{" "}
          <a href="#" className="copyright-link">
            yourname
          </a>
        </p>
        <ul className="social-list">
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  
  )
}
