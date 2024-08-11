import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 768) {
      return {
        right: menuOpened ? '0' : '-100%',
        transition: 'right 300ms ease-in'
      };
    }
    return {};
  };

  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img src='./logo.webp' alt="logo" width={150} className='main-logo'/>
        <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}>
        <div className='flexCenter h-menu' style={getMenuStyles()}>
          <a href="#companies">Our Clients</a>
          <a href="#products">Products</a>
          <a href="#values">Our Values</a>
          <a href="#contact">Contact Us</a>
          <a href="#get-started">Get Started</a>
          <button className='button'>
            <a href='https://wa.me/8630228315' target="_blank" rel="noopener noreferrer">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
         
        <div className="menu-icon" onClick={() => setMenuOpened(prev => !prev)}>
          <BiMenuAltRight size={30}/>
        </div>
      </div>
    </section>
  );
}

export default Header;
