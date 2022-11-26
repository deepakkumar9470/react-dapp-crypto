import React from 'react'
import './hero.css'
import crypto from '../images/crypto.png'
const Hero = () => {
  return (
    <div className="hero">
        <div className="container">

             <div className="left">
                <p>Blockchain & Crypto Buy and sell your crypto</p>
                <h1>Invest in best Cryptocurrency</h1>
                <p>Buy,sell hundreds of cryptocurrencies of your choices</p>
                <button className="btn2">Learn More</button>
             </div>

          <div className="right">
            <div className="img_container">
                <img src={crypto} alt="crypto" />
            </div>
        </div>

        </div>
    </div>
  )
}

export default Hero