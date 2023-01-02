import React from "react";
import "./chef.css";
import {Subheading} from "../../components";
import {images} from "../../constants";

function Chef() {
  return (
    <div className='app__chef section__padding'>
      <div className='wrapper app_chef-content'>
        <div className='chef__app-content_img'>
          <img src={images.chef} alt='' srcset='' />
        </div>
        <div className='chef__app-content_details'>
          <div className='chef__app-content_details-subheading'>
            <Subheading title='Chef’s Word' />
          </div>
          <div className='chef__app-content_details-main_heading'>
            <h2 className='heading-text'>What we believe in</h2>
          </div>
          <div>
            <p className='p__text'>
              <img src={images.quote} alt='quote_image' className='quote-img' />
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </p>
          </div>

          <div className='app_chef-content_founder'>
            <h4>Kevin Luo</h4>
            <p>Chef & Founder</p>
          </div>
          <div className='app_chef-content_singnature'>
            <img src={images.sign} alt='sign_image' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chef;
