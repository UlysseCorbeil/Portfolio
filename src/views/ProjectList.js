import React from 'react';

// modules
import HoverProject from '../modules/HoverProject';
import FollowMouse from '../modules/FollowMouse';


import VLEC from '../images/vlec.png';

class ProjectList extends React.Component {

    constructor(props) {
        super(props);

        this.sels = {
            state: 'active'
        };
    };

    render() {
        return (
            <div className="project-list module">

                <div className="sectionTitle">Project I've worked on</div>

                {this.props.data.map((res, i) => (
                    <HoverProject key={i}>
                        {
                            isHovered =>
                                <div className="inner-ctn">
                                    {/* <FollowMouse /> */}
                                    <img className={"project-image " + (isHovered ? this.sels.state : "")} src={VLEC} alt="VLEC" />
                                    <div className="header">
                                        <div className="number">0{res.id + 1}</div>
                                        <div className="name">{res.nomProjet}</div>
                                    </div>
                                    <div className="item-ctn">
                                        <div className="categ">{res.categProjet}</div>
                                        <div className="roles">{res.roles}</div>
                                        <div className="date">{res.date}</div>
                                    </div>

                                </div>
                        }
                    </HoverProject>
                ))}
            </div>
        );
    }
}
export default ProjectList;