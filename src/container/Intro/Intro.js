import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { Meal } from '../../constants';
import './intro.css';

const Intro = () => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef();

    return (
        <div className="app__intro">
            <video
                ref={vidRef}
                src={Meal}
                type="video/mp4"
                loop
                controls={false}
                muted
            />
            <div className="app__intro-overlay flex__center">
                <div
                    className="app__intro-overlay_circle flex__center"
                    onClick={() => {
                        setPlayVideo(!playVideo);
                        if (playVideo) {
                            vidRef.current.pause();
                        } else {
                            vidRef.current.play();
                        }
                    }}
                >
                    {playVideo ? (
                        <BsPauseFill color="#fff" fontSize={30} />
                    ) : (
                        <BsFillPlayFill color="#fff" fontSize={30} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Intro;