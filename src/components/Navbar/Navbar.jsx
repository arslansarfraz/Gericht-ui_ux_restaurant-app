import React, {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";
import {images} from "../../constants";
import "./navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app-logo' />
      </div>
      <div className='app__navbar-links'>
        <ul>
          <li className='p-global'>
            <a href='#home'>Home</a>
          </li>
          <li className='p-global'>
            <a href='#pages'>Pages</a>
          </li>
          <li className='p-global'>
            <a href='#contact'>Contact Us</a>
          </li>
          <li className='p-global'>
            <a href='#blog'>Blog</a>
          </li>
          <li className='p-global'>
            <a href='#landing'>Landing</a>
          </li>
        </ul>
      </div>
      <div className='app_navbar-login'>
        <a href='#' className='p-global'>
          Log in / Registration
        </a>
        <div />
        <a href='#' className='p-global'>
          Book Table
        </a>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          fontSize={30}
          className='app__navbar-smallscreen_icon'
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay'>
            <MdOutlineRestaurantMenu
              fontSize={30}
              className='app__navbar-smallscreen_icon overlay__close'
              onClick={() => setToggleMenu(false)}
            />
            <div className='app__navbar-smallscreen_links'>
              <ul>
                <li className='p-global'>
                  <a href='#home'>Home</a>
                </li>
                <li className='p-global'>
                  <a href='#pages'>Pages</a>
                </li>
                <li className='p-global'>
                  <a href='#contact'>Contact Us</a>
                </li>
                <li className='p-global'>
                  <a href='#blog'>Blog</a>
                </li>
                <li className='p-global'>
                  <a href='#landing'>Landing</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
