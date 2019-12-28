import React from 'react';

import BANQ from '../images/BANQ.png';
import DHH from '../images/deuxhuithuit.jpeg';

class Project extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience">
                
                <div className="title">Work Experience</div>

                <div className="item-ctn">
                    <div className="item">

                        <div className="image">
                            <img src={DHH}/>
                        </div>

                        <span>Deux Huit Huit</span>
                        <span>Web Developer</span>
                        <span>2019</span>

                    </div>
                </div>

            </div>
        );
    }
}
export default Project;
