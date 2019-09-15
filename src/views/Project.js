import React from 'react';

import vlec from '../images/vlec.png';
import bonsound from '../images/bonsound.png';
import sandalwood from '../images/sandalwood.jpg';
import jez from '../images/jez.jpg';
import folespoir from '../images/folespoir.jpg';

import Slider from '../modules/Slider';

class Project extends React.Component {


    constructor(props) {
        super(props);

        this.images = [
            jez,
            vlec,
            bonsound,
            folespoir,
            sandalwood
        ]
    };

    render() {
        return (
            <div className="module">

                {
                    <div className="project">
                        <div className="sectionTitle">test</div>
                        <Slider
                            options={{
                                autoPlay: 4000,
                                pauseAutoPlayOnHover: true,
                                wrapAround: true,
                                fullscreen: true,
                                adaptiveHeight: true,
                            }}
                        >
                            {this.images.map((image, i) => (
                                <div style={{ width: '100%', height: '500px' }} key={i}>
                                    <img src={image} alt="" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                }

            </div>
        );
    }
}
export default Project;