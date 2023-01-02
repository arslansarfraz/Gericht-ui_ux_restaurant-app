import React from 'react';

import { Subheading } from '../../components';
import { images, Data } from '../../constants';
import './laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="app__laurels_awards-card">
        <img src={imgUrl} alt="awards" />
        <div className="app__laurels_awards-card_content">
            <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
            <p className="p__opensans">{subtitle}</p>
        </div>
    </div>
);

const Laurels = () => (
    <div className='app__bg'>
        <div className="app__laurels wrapper" id="awards">
            <div className="app__wrapper_info">
                <Subheading title="Awards & recognition" />
                <h1 className="heading-text">Our Laurels</h1>

                <div className="app__laurels_awards">
                    {Data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
                </div>
            </div>

            <div className="app__wrapper_img">
                <img src={images.laurels} alt="laurels_img" />
            </div>
        </div>
    </div>
);

export default Laurels;