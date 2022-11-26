import React,{useState} from 'react'

import './navbar.css'
import {FaBars,FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const [openmenu,setOpenMenu] = useState(false)

    const handleOpen = () =>{
        setOpenMenu(!openmenu)
    }
  return (
    <div className="header">
        <div className="container">
           <h1>De <span className="primary">crypto</span></h1>

           <ul className={openmenu ? "nav-menu active" : "nav-menu"}>
              <li><a href="#">Home</a></li>
              <li><a href="#">Featured</a></li>
              <li><a href="#">Earned</a></li>
              <li><a href="#">Crypto</a></li>
              <li><a href="#">Contact</a></li>
           </ul>

           <div className="btn-group">
            <button className="btn">Connect Wallet</button>
           </div>

           <div className="hamburger" onClick={handleOpen}>
             {
                openmenu ? 
                ( <FaTimes size={20} style={{color : '#333'}}/>)
                :
                ( <FaBars size={20} style={{color : '#333'}}/>)
                
             }
           </div>
        </div>
    </div>
  )
}

export default Navbar