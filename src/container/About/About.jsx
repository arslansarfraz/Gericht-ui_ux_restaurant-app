import React from "react";
import "./about.css";
import {images} from "../../constants";

export default function About() {
  return (
    <div className='app__about section__padding'>
      <div className='wrapper app__about-content'>
        <div className='app__about-content_about-us'>
          <h1 className='heading-text'>About Us</h1>
          <img src={images.spoon} alt='spoon' />
          <p className='p__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className='custom__button'>Know More</button>
        </div>
        <div className='app__about-content_img'>
          <img src={images.knife} alt='Knife-img' className='up-down' />
        </div>
        <div className='app__about-content_our-history'>
          <h1 className='heading-text'>Our History</h1>
          <img src={images.spoon} alt='spoon' />
          <p className='p__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  );
}
