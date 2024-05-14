import React from 'react'

export default function AboutSection() {
  return (
   
    <section class="section about" aria-label="about" data-section>
    <div class="container">
  
      <figure class="about-banner">
        <img src="./assets/images/about-banner.png" width="748" height="436" loading="lazy" alt="about banner"
          class="w-100" />
      </figure>
  
      <div class="about-content">
  
        <h2 class="h2 section-title">What Is Digital Payout</h2>
  
        <p class="section-text">
          Explore a variety of trading options on Digital Payout. You can engage in various types of coin transactions such as
          Spot Trade, Futures Trade, P2P, Staking, Mining, and margin trading.
        </p>
  
        <ul class="section-list">
  
          <li class="section-item">
            <div class="title-wrapper">
              <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
  
              <h3 class="h3 list-title">View real-time cryptocurrency prices</h3>
            </div>
  
            <p class="item-text">
              Stay updated with real-time cryptocurrency prices and market trends on Digital Payout.
            </p>
          </li>
  
          <li class="section-item">
            <div class="title-wrapper">
              <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
  
              <h3 class="h3 list-title">Buy and sell BTC, ETH, XRP, and more</h3>
            </div>
  
            <p class="item-text">
              Easily buy and sell a variety of cryptocurrencies including BTC, ETH, XRP, and many others on Digital Payout.
            </p>
          </li>
  
        </ul>
  
        <a href="#" class="btn btn-primary">Explore More</a>
  
      </div>
  
    </div>
  </section>
  
  )
}
