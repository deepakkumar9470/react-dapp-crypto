import React,{useState,useEffect} from 'react'
import './crypto.css'
import btc from '../images/bitcoin.png'
import {FiArrowUpRight,FiArrowDown} from 'react-icons/fi'
import axios from 'axios'

const Crypto = () => {
    const [cryptodata,setCryptoData] = useState([])


    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false
    `

    useEffect(() => {
       const fetchCryptoData = async () =>{
         try {

            const res = await axios.get(url)
            console.log(res.data)
            setCryptoData(res.data)
            
         } catch (error) {
            console.log(error)
         }

       }
       fetchCryptoData()
    }, [])

    console.log(cryptodata)
    if(!cryptodata) return <p>Loading...</p>
    
  return (
    <div className="featured">
        <div className="container">

            <div className="cryptos">
               {
                cryptodata?.map((item,i)=>
                <div className="card" key={i}>
                  <div className="top">
                        <img src={item.image} alt="BTC" />
                    </div>
                    <div>
                        <h5>{item.name}</h5>
                        <p>$ {item.current_price.toLocaleString()}</p>
                    </div>
                    {
                        item.price_change_percentage_24h < 0 ? 
                        (<span className="red"><FiArrowDown/>{item.price_change_percentage_24h.toFixed(2)}%</span>)
                        :
                        (<span className="green"><FiArrowUpRight/>{item.price_change_percentage_24h.toFixed(2)}%</span>)
                    }
                    
               </div>)
               }
            </div>

        </div>
    </div>
  )
}

export default Crypto