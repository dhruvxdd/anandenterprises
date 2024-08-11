import React from 'react'
import "./Footer.css"
import { HiLocationMarker } from 'react-icons/hi'
import { AiTwotoneCopyrightCircle } from "react-icons/ai";



const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="addings innerWidth flexCenter f-container">

            {/*Left side */}
            <div className="flexColStart f-left">
                <img src="./logo.webp" alt="logo" width={120} />
                <span className="secondaryText">
                    Our Vision is to be the leading provider of sustainable and innovative printing solutions, <br/>
                    enhancing brand experiences and transforming ideas into reality. <br/>
                    <AiTwotoneCopyrightCircle size={20}/> Anand Enterprises 2024
                </span>
                
            </div>
             {/*Right side*/}
             <div className="flexColStart f-right">
                <span className='primaryText'>Office Address</span>
                <span className='secondaryText'>
                <a href="https://www.google.com/maps/dir//21%2F1,+Naveen+Bazar,+Budhana+Rd,+Meerut,+Uttar+Pradesh+250001/@28.9807702,77.622511,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390c64f9862806db:0x6cab6f9a65380619!2m2!1d77.7049124!2d28.9807953?entry=ttu" target="_blank" rel="noopener noreferrer">
                  <HiLocationMarker color="var(--blue)" size={20}/> Head Office: 21 Swami Pada Meerut, Uttar Pradesh 250002  
                 
                </a>
                </span>
                <br/>
                <span className='secondaryText'>
                <a  target="_blank" rel="noopener noreferrer">
                  <HiLocationMarker color="var(--blue)" size={20}/> Branch Office: Agarwal Education Store, Baraut Uttar Pradesh 250611
                </a>
                </span>
                <div className="flexCenter f-menu">
                    
                </div>
             </div>
        </div>
    </section>
  )
}

export default Footer
