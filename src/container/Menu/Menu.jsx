import React from "react";
import Subheading from "../../components/Subheading/Subheading";
import "./menu.css";
import {images, Data} from "../../constants";
import SpecialMenu from "../../components/SpecialMenu/SpecialMenu";
export default function Menu() {
  return (
    <div className='app__menu section__padding'>
      <div className='wrapper '>
        <Subheading title='Menu that fits you palatte' />
        <h2 className='heading-text'>Today’s Special</h2>
        <div className='app__menu-details'>
          <div className='app__menu-wine'>
            <h2>Wine & Beer</h2>
            <div className='app__menu-wine_item'>
              {Data.wines.map((wine, index) => (
                <SpecialMenu
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                  key={wine.title + index}
                />
              ))}
            </div>
          </div>
          <div className='app__menu-img'>
            <img src={images.menu} alt='' srcset='' />
          </div>
          <div className='app__menu-cocktail'>
            <h2>Cocktails</h2>
            <div className='app__menu-cocktail_item'>
              {Data.cocktails.map((cocktails, index) => (
                <SpecialMenu
                  title={cocktails.title}
                  price={cocktails.price}
                  tags={cocktails.tags}
                  key={cocktails.title + index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
