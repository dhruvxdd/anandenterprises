import React from "react";
import "./Hero.css";
import { HiLocationMarker } from 'react-icons/hi';
import { RiTeamFill } from "react-icons/ri";
import {motion} from "framer-motion"

import CountUp from 'react-countup';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Magazines ', 'Diaries ','Bill Books ', 'Calendars ', 'Visiting Cards ', 'Stickers ','Brochures ','Catalogue ', 'Pamphlets ', 'Boxes ', 'Stationery Goods ', 'Banners ',],
    loop: true,
    delaySpeed: 2300,
    
  });

  return (
    <div className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover <br />
              Most Suitable <br />
              Printing Solutions
              <br />
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Discover premium offset printing solutions tailored to your needs</span>
            <span className="secondaryText">Simplify your printing process with our expert services</span>
          </div>
          <div className="search-bar">
            {/* <HiLocationMarker color="var(--blue)" size={20}/> */}
            <RiTeamFill color="var(--blue)" size={20} />
            <span className="typewriter-text">
              Need {text}? We've got 'em.
            </span>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={80} end={100} duration={6}/> 
                <span>+</span> 
              </span>
              <span className="secondaryText">Custom made Goods</span>
            </div>
            <div className="flexColCenter stat">
              <span><CountUp start={400} end={500} duration={6}/> 
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span><CountUp start={5} end={20} duration={6}/> 
                <span> years+</span>
              </span>
              <span className="secondaryText">Experience</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <motion.div className="hero-right flexCenter"
        initial={{y:"20rem",opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:5, type:"spring"}}
        >
          <div className="image-container">
            <img src="./hero-image.webp" alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
