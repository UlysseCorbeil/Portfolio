import React from 'react';

import BANQ from '../images/BANQ.png';
import DHH from '../images/deuxhuithuit.jpeg';

class Project extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="title">Work Experience</div>

                <div className="item-ctn">

                    <a href="https://www.deuxhuithuit.com" target="_blank" className="link">
                        <div className="item">

                            <div className="image">
                                <img src={DHH}/>
                            </div>

                            <div className="content">
                                <p>Deux Huit Huit</p>
                                <p>Web Developer</p>
                                <p>2019</p>
                            </div>

                        </div>
                    </a>
                </div>

                <div className="item-ctn">
                    <a target="_blank" className="link">
                        <div className="item">

                            <div className="image">
                                <img src={BANQ}/>
                            </div>

                            <div className="content">
                                <p>BANQ</p>
                                <p>IOS Web App (contract)</p>
                                <p>2019</p>
                            </div>

                        </div>
                    </a>
                </div>

            </React.Fragment>
        );
    }
}
export default Project;
