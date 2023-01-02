import React from "react";
import Subheading from "../../components/Subheading/Subheading";
import {images} from "../../constants";
import "./header.css";
function Header() {
  return (
    <div className='app__header section__padding'>
      <div className='wrapper app__header-container'>
        <div className='app__header-info'>
          <Subheading title='Chase the new Flavour' />
          <h1>The key to Fine dining</h1>
          <p>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus{" "}
          </p>
          <button type='btn' className='custom__button'>
            Explore Menu
          </button>
        </div>
        <div className='app__header-img'>
          <img src={images.welcome} alt='welcome' />
        </div>
      </div>
    </div>
  );
}

export default Header;
