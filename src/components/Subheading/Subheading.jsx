import react from "react";
import {images} from "../../constants";
export default function Subheading({title}) {
  return (
    <div className='subheading'>
      <p className='subheading__title'>{title}</p>
      <img src={images.spoon} alt='spoon-img' />
    </div>
  );
}
